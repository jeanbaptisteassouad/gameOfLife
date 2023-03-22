import { WordingT } from '../wording/HomeWording.ts'

const HeadStyleComponent = ({
  wording,
}: {
  wording: WordingT,
}) => {
  return (
    <>
      <title>{wording.head.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <style>
        {`
          @font-face {
            font-family: titleFont;
            src: url('/Pacifico/Pacifico-Regular.ttf');
          }

          @font-face {
            font-family: myFont;
            src: url('/Roboto_Mono/static/RobotoMono-Regular.ttf');
          }

          * {
            font-family: myFont;
          }


          html {
            --var-body-height: 100vh;

            --var-title-font-size: 4rem;
            --var-font-size: 16px;
            --var-main-gap: 2rem;
            --var-language-picker-bottom-padding: 0rem;

            font-size: var(--var-font-size);
            height: var(--var-body-height);
          }

          @media (max-width: 800px) {
            html {
              --var-title-font-size: 2rem;
              --var-font-size: 14px;
              --var-main-gap: 1rem;
              --var-language-picker-bottom-padding: 1rem;
            }
          }

          body {
            overflow: hidden;
            height: var(--var-body-height);

            margin: 0;
            padding: 2rem;
            box-sizing: border-box;
            background: linear-gradient(312deg, hsl(0 0% 96% / 1), hsl(0 0% 92% / 1));
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
    </>
  )
}

export default HeadStyleComponent
