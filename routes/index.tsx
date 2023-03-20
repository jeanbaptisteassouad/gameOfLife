import { Head } from '$fresh/runtime.ts'
import HomeIsland from '../islands/HomeIsland.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Game of Life</title>
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

              font-size: var(--var-font-size);
              height: var(--var-body-height);
            }

            body {
              overflow: hidden;
              height: var(--var-body-height);
            }

            @media (max-width: 800px) {
              html {
                --var-title-font-size: 2rem;
                --var-font-size: 14px;
                --var-main-gap: 1rem;
              }
            }
          `}
        </style>
      </Head>
      <HomeIsland/>
    </>
  )
}
