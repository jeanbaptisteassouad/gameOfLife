import {
  useState,
} from 'preact/hooks'

import GameOfLifeView from '../components/GameOfLifeView.tsx'
import WorldSizePickerView from '../components/WorldSizePickerView.tsx'

const HomeIsland = () => {
  const [rowCount, setRowCount] = useState(30)
  const [columnCount, setColumnCount] = useState(30)

  return (
    <>
      <style>
        {`
          html {
            font-size: 16px;
          }

          body {
            margin: 0;
            padding: 4rem;
            height: 100vh;
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
        gap: '2rem',
      }}>
        <div style={{fontSize: '4rem'}}>
          Game of Life
        </div>
        <div style={{width: '45rem'}}>
          <WorldSizePickerView
            rowCount={rowCount}
            setRowCount={setRowCount}
            columnCount={columnCount}
            setColumnCount={setColumnCount}
          />
        </div>
        <div style={{flex: '1 0 auto', aspectRatio: '1'}}>
          <GameOfLifeView rowCount={rowCount} columnCount={columnCount}/>
        </div>
      </div>
    </>
  )
}

export default HomeIsland
