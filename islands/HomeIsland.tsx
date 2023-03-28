import {
  useState,
  useLayoutEffect,
} from 'preact/hooks'

import GameOfLifeView from '../components/GameOfLifeView.tsx'
import WorldSizePickerView from '../components/WorldSizePickerView.tsx'
import LanguagePickerView from '../components/LanguagePickerView.tsx'

import { WordingT } from '../wording/HomeWording.ts'

const HomeIsland = ({
  wording,
}: {
  wording: WordingT,
}) => {
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
          .HomeIsland_Grid {
            grid-template-areas:
              "MainTitle GameOfLifeView"
              "Wikipedia GameOfLifeView"
              "WorldSizePickerView GameOfLifeView"
              "MadeBy GameOfLifeView";
            grid-template-rows: auto auto auto auto;
            grid-template-columns: 370px 1fr;
          }

          @media (max-width: 800px) {
            .HomeIsland_Grid {
              grid-template-areas:
                "MainTitle"
                "Wikipedia"
                "WorldSizePickerView"
                "GameOfLifeView"
                "MadeBy";
              grid-template-rows: auto auto auto 1fr auto;
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{paddingBottom: '1rem', display: 'flex', justifyContent: 'flex-end'}}>
          <LanguagePickerView wording={wording}/>
        </div>
        <div className='HomeIsland_Grid' style={{
          display: 'grid',
          height: '100%',
          alignItems: 'center',
          gap: 'var(--var-main-gap)',
        }}>
          <div style={{gridArea: 'MainTitle', fontSize: 'var(--var-title-font-size)', fontFamily: 'titleFont', display: 'flex', justifyContent: 'center'}}>
            {wording.body.title}
          </div>
          <div style={{gridArea: 'Wikipedia'}}>
            <div>
              {wording.body.descriptionOfWikipedia}
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <a href={wording.body.wikipediaURL}>Wikipedia</a>
            </div>
          </div>
          <div style={{gridArea: 'WorldSizePickerView'}}>
            <WorldSizePickerView
              rowCount={rowCount}
              setRowCount={setRowCount}
              columnCount={columnCount}
              setColumnCount={setColumnCount}
            />
          </div>
          <div style={{gridArea: 'GameOfLifeView', height: '100%'}}>
            <GameOfLifeView rowCount={rowCount} columnCount={columnCount} wording={wording}/>
          </div>
          <div style={{gridArea: 'MadeBy', display: 'flex', justifyContent: 'center'}}>
            {wording.body.madeBy}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeIsland
