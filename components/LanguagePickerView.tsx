import { WordingT } from '../wording/HomeWording.ts'

const LanguagePickerView = ({
  wording,
}: {
  wording: WordingT,
}) => {
  return (
    <div style={{display: 'flex', gap: '1rem', justifyContent: 'flex-end'}}>
      <a href='/?lang=fr'>{wording.body.fr}</a>
      <a href='/?lang=en'>{wording.body.en}</a>
    </div>
  )
}

export default LanguagePickerView
