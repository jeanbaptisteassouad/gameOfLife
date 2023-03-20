import {
  useState,
  useLayoutEffect,
} from 'preact/hooks'

import GameOfLifeView from '../components/GameOfLifeView.tsx'
import WorldSizePickerView from '../components/WorldSizePickerView.tsx'

const HomeIsland = () => {
  const [rowCount, setRowCount] = useState(30)
  const [columnCount, setColumnCount] = useState(30)

  useLayoutEffect(() => {
    const appHeight = () => {
      document.documentElement.style.setProperty('--var-body-height', `${window.innerHeight}px`)
    }
    window.addEventListener('resize', appHeight)
    appHeight()
    return () => {
      window.removeEventListener('resize', appHeight)
    }
  }, [])


  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            padding: 2rem;
            box-sizing: border-box;
            background: #f4f4f4;
          }

          button {
            line-height: 1;
            padding: 0.5rem 1rem;
            width: 8rem;
            cursor: pointer;
            font-size: 1rem;
            border-radius: 0.25rem;
            outline: none;
            border: 2px solid;
          }
        `}
      </style>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--var-main-gap)',
      }}>
        <div style={{fontSize: 'var(--var-title-font-size)', fontFamily: 'titleFont'}}>
          Game of Life
        </div>
        <div style={{maxWidth: '32rem'}}>
          <div>
            « The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. »
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a href={'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'}>Wikipedia</a>
          </div>
        </div>
        <div style={{maxWidth: '45rem'}}>
          <WorldSizePickerView
            rowCount={rowCount}
            setRowCount={setRowCount}
            columnCount={columnCount}
            setColumnCount={setColumnCount}
          />
        </div>
        <div style={{flex: '1 0 auto', aspectRatio: '1', maxWidth: '100%'}}>
          <GameOfLifeView rowCount={rowCount} columnCount={columnCount}/>
        </div>
        <div>
          Made by Jean-Baptiste Assouad
        </div>
      </div>
    </>
  )
}

export default HomeIsland
