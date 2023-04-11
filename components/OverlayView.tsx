import {
  useState,
} from 'preact/hooks'

import { WordingT } from '../wording/HomeWording.ts'

const OverlayView = ({
  wording,
}: {
  wording: WordingT,
}) => {
  const [opacity, setOpacity] = useState(1)

  return (
    <div
      onMouseMove={() => setOpacity(0)}
      onTouchMove={() => setOpacity(0)}
      style={{
        opacity,
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        background: 'hsl(180deg 67.43% 11.09% / 15%)',
        transition: 'opacity 0.3s ease',
        padding: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'var(--var-title-font-size)',
        fontFamily: 'titleFont',
        textAlign: 'center',
        lineHeight: 1.5,
      }}>
        {wording.body.overlayMessage}
      </div>
    </div>
  )
}

export default OverlayView
