import {
  useState,
  useEffect,
} from 'preact/hooks'

import {
  ComponentChildren,
} from 'preact'

import { WordingT } from '../wording/HomeWording.ts'

const LanguagePickerView = ({
  wording,
}: {
  wording: WordingT,
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <style>
        {`
          .LanguagePickerView_regular {
            display: initial;
          }

          .LanguagePickerView_small {
            display: none;
          }

          @media (max-width: 800px) {
            .LanguagePickerView_regular {
              display: none;
            }
            .LanguagePickerView_small {
              display: initial;
            }
          }
        `}
      </style>
      <div className='LanguagePickerView_regular'>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
          <ListOfLinks wording={wording}/>
        </div>
      </div>
      <div className='LanguagePickerView_small'>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end', position: 'relative'}}>
          <button style={{width: 'auto'}} onClick={() => {
            setMenuIsOpen(true)
          }}>
            De/En/Es/Fr/It
          </button>
          {
            menuIsOpen &&
            <MenuView wording={wording} setMenuIsOpen={setMenuIsOpen}/>
          }
        </div>
      </div>
    </>
  )
}

export default LanguagePickerView

const MenuView = ({
  wording,
  setMenuIsOpen,
}: {
  wording: WordingT,
  setMenuIsOpen: (a: boolean) => void,
}) => {
  useClickOutside({
    setMenuIsOpen,
  })

  return (
    <div className='LanguagePickerView_MenuView' style={{
      position: 'absolute',
      top: 0,
      background: 'linear-gradient(141deg, hsl(180 5% 100% / 1), hsl(180 5% 96% / 1))',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: '2rem',
      gap: '1rem',
      borderRadius: '0.25rem',
      border: '2px solid hsl(180deg 55.36% 23.21%)',
      boxShadow: '0.5rem 0.5rem 0rem hsl(180deg 78.78% 11.78%)',
      maxWidth: '14rem',
      width: '100%',
      boxSizing: 'border-box',
      zIndex: 100,
    }}>
      <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
        <button style={{width: 'fit-content'}} onClick={() => setMenuIsOpen(false)}>
          X
        </button>
      </div>
      <ListOfLinks wording={wording}/>
    </div>
  )
}

const ListOfLinks = ({
  wording,
}: {
  wording: WordingT,
}) => {
  return (
    <>
      <a href='/?lang=de'>{wording.body.de}</a>
      <a href='/?lang=en'>{wording.body.en}</a>
      <a href='/?lang=es'>{wording.body.es}</a>
      <a href='/?lang=fr'>{wording.body.fr}</a>
      <a href='/?lang=it'>{wording.body.it}</a>
    </>
  )
}

const useClickOutside = ({
  setMenuIsOpen,
}: {
  setMenuIsOpen: (a: boolean) => void,
}) => {
  useEffect(() => {
    const element = document.querySelector('.LanguagePickerView_MenuView')

    if (!element) {
      return
    }

    let shouldCloseMenu = true
    const onClick = () => {
      shouldCloseMenu = false
    }
    const onClickOutside = () => {
      if (shouldCloseMenu) {
        setMenuIsOpen(false)
      }
      shouldCloseMenu = true
    }
    element.addEventListener('click', onClick)
    document.addEventListener('click', onClickOutside)
    return () => {
      element.removeEventListener('click', onClick)
      document.removeEventListener('click', onClickOutside)
    }
  })
}
