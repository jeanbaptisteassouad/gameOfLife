import {
  useMemo,
  useLayoutEffect,
} from 'preact/hooks'

type CellT = {
  element: SuperHTMLDivElementT,
  boundingClientRect: BoundingClientRectT,
  isAlive: boolean,
  nextIsAlive: boolean,
  backgroundH: number,
  nextBackgroundH: number,
  backgroundS: number,
  nextBackgroundS: number,
  backgroundL: number,
  nextBackgroundL: number,
}

type SuperHTMLDivElementT = {
  isAlive: boolean,
  style: {
    background: string,
  },
  backgroundH: number,
  backgroundS: number,
  backgroundL: number,
  getBoundingClientRect: () => BoundingClientRectT,
}

type BoundingClientRectT = {
  x: number,
  y: number,
  width: number,
  height: number,
}

const GameOfLifeView = ({
  rowCount,
  columnCount,
}: {
  rowCount: number,
  columnCount: number,
}) => {
    const arrayOfCells = useMemo(() => {
    const arrayOfCells = []
    for (let x = 0; x < rowCount; x++) {
      for (let y = 0; y < columnCount; y++) {
        arrayOfCells.push({
          id: randomString(),
        })
      }
    }
    return arrayOfCells
  }, [rowCount, columnCount])

  const gridTemplateRows = useMemo(() => {
    const gridTemplateRows = []
    for (let x = 0; x < rowCount; x++) {
      gridTemplateRows.push('1fr')
    }
    return gridTemplateRows.join(' ')
  }, [rowCount])

  const gridTemplateColumns = useMemo(() => {
    const gridTemplateColumns = []
    for (let y = 0; y < columnCount; y++) {
      gridTemplateColumns.push('1fr')
    }
    return gridTemplateColumns.join(' ')
  }, [columnCount])

  useLayoutEffect(() => {
    let clientX = 0
    let clientY = 0

    const onMouseMove = (event: MouseEvent) => {
      clientX = event.clientX
      clientY = event.clientY
    }
    const onTouchMove = (event: TouchEvent) => {
      clientX = event.touches[0].clientX
      clientY = event.touches[0].clientY
    }
    const onTouchEnd = (event: TouchEvent) => {
      clientX = 0
      clientY = 0
    }

    let animationMustStop = false
    let frameCount = 0

    const animation = () => {
      if (animationMustStop) {
        return
      }

      const arrayOfCells: Array<CellT> = []

      // read
      document.querySelectorAll('.Cell').forEach((_element) => {
        const element = _element as unknown as SuperHTMLDivElementT
        arrayOfCells.push({
          element,
          boundingClientRect: element.getBoundingClientRect(),

          isAlive: Boolean(element.isAlive),
          nextIsAlive: Boolean(element.isAlive),
          backgroundH: element.backgroundH,
          nextBackgroundH: element.backgroundH,
          backgroundS: element.backgroundS,
          nextBackgroundS: element.backgroundS,
          backgroundL: element.backgroundL,
          nextBackgroundL: element.backgroundL,
        })
      })

      arrayOfCells.forEach((cell, index) => {
        if (mouseIsInRect({boundingClientRect: cell.boundingClientRect, clientX, clientY})) {
          cell.nextIsAlive = true
          cell.nextBackgroundH = Math.floor(Math.random() * 360)
          cell.nextBackgroundS = Math.floor(Math.random() * 101)
          cell.nextBackgroundL = Math.floor(Math.random() * 101)
        } else if (frameCount % 8 === 0) {
          simulateLife({arrayOfCells, cell, index, rowCount, columnCount})
        }
      })

      // write
      arrayOfCells.forEach((cell) => {
        cell.element.isAlive = cell.nextIsAlive
        cell.element.style.background = `hsl(${cell.nextBackgroundH}, ${cell.nextBackgroundS}%, ${cell.nextBackgroundL}%)`
        cell.element.backgroundH = cell.nextBackgroundH
        cell.element.backgroundS = cell.nextBackgroundS
        cell.element.backgroundL = cell.nextBackgroundL
      })

      frameCount++
      requestAnimationFrame(animation)
    }


    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchmove', onTouchMove)
    document.addEventListener('touchend', onTouchEnd)
    animation()
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
      animationMustStop = true
    }
  }, [rowCount, columnCount])

  return (
    <>
      <style>
        {`
          .World > * {
            --var-cell-border-color: #cbcbcb;
            background: white;
            border: 1px solid var(--var-cell-border-color);
            border-radius: 20rem;
          }

{/*          .World {
            --var-cell-border-color: #cbcbcb;
            background: white;
          }

          .World :nth-child(n) {
            border-top: 1px solid var(--var-cell-border-color);
            border-left: 1px solid var(--var-cell-border-color);
          }

          .World :nth-child(${columnCount}n) {
            border-right: 1px solid var(--var-cell-border-color);
          }

          .World :nth-child(n + ${(rowCount - 1) * columnCount + 1}) {
            border-bottom: 1px solid var(--var-cell-border-color);
          }
*/}        `}
      </style>
      <div className='World' style={{
        aspectRatio: '1 / 1',
        display: 'grid',
        gridTemplateRows,
        gridTemplateColumns,
      }}>
        {arrayOfCells.map((cell) => {
          return (
            <div className='Cell'/>
          )
        })}
      </div>
    </>
  )
}

export default GameOfLifeView

const randomString = () => Math.random().toString(36).slice(2)

const mouseIsInRect = ({
  boundingClientRect,
  clientX,
  clientY,
}: {
  boundingClientRect: BoundingClientRectT,
  clientX: number,
  clientY: number,
}) => {
  return (
    boundingClientRect.x <= clientX && clientX <= boundingClientRect.x + boundingClientRect.width &&
    boundingClientRect.y <= clientY && clientY <= boundingClientRect.y + boundingClientRect.height
  )
}

const simulateLife = ({
  arrayOfCells,
  cell,
  index,
  rowCount,
  columnCount,
}: {
  arrayOfCells: Array<CellT>,
  cell: CellT,
  index: number,
  rowCount: number,
  columnCount: number,
}) => {
  const len = rowCount * columnCount
  const cap = (a: number) => {
    if (a < 0) {
      return a % len + len
    } else {
      return a % len
    }
  }

  const arrayOfNeighbors = [
    index - 1 - columnCount, index - columnCount, index + 1 - columnCount,
    index - 1,                                    index + 1,
    index - 1 + columnCount, index + columnCount, index + 1 + columnCount,
  ].map(index => arrayOfCells[cap(index)])

  const totalAliveCount = arrayOfNeighbors.reduce((acc, val) => acc + Number(val.isAlive), 0)

  if (totalAliveCount === 3) {
    cell.nextIsAlive = true
    if (cell.isAlive === false) {
      const aliveNeighbors = arrayOfNeighbors.filter((cell) => cell.isAlive)
      cell.nextBackgroundH = draw(aliveNeighbors).backgroundH
      cell.nextBackgroundS = mean(aliveNeighbors.map(cell => cell.backgroundS))
      cell.nextBackgroundL = mean(aliveNeighbors.map(cell => cell.backgroundL))
    }
  } else if (totalAliveCount === 2) {
    cell.nextIsAlive = cell.isAlive
    cell.nextBackgroundH = cell.backgroundH
    cell.nextBackgroundS = cell.backgroundS
    cell.nextBackgroundL = cell.backgroundL
  } else {
    cell.nextIsAlive = false
    cell.nextBackgroundH = 0
    cell.nextBackgroundS = 0
    cell.nextBackgroundL = 100
  }
}

const draw = <T extends unknown>(array: Array<T>) => array[Math.floor(Math.random() * array.length)]
const mean = (array: Array<number>) => array.reduce((acc, val) => acc + val, 0) / array.length
