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
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <div style={{maxWidth: '32rem', width: '100%', paddingBottom: 'var(--var-language-picker-bottom-padding)'}}>
        <LanguagePickerView wording={wording}/>
      </div>
      <div style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--var-main-gap)',
      }}>
        <div style={{fontSize: 'var(--var-title-font-size)', fontFamily: 'titleFont'}}>
          {wording.body.title}
        </div>
        <div style={{maxWidth: '32rem'}}>
          <div>
            {wording.body.descriptionOfWikipedia}
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <a href={wording.body.wikipediaURL}>Wikipedia</a>
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
          <GameOfLifeView rowCount={rowCount} columnCount={columnCount} wording={wording}/>
        </div>
        <div>
          {wording.body.madeBy}
        </div>
      </div>
    </div>
  )
}

export default HomeIsland
