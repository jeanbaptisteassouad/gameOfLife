import { Head } from '$fresh/runtime.ts'
import { Handlers, PageProps } from '$fresh/server.ts'
import HomeIsland from '../islands/HomeIsland.tsx'
import HeadStyleComponent from '../components/HeadStyleComponent.tsx'


import { WordingT, allWording } from '../wording/HomeWording.ts'

type Props = {
  wording: WordingT,
}

export const handler: Handlers<Props> = {
  GET: async (req, ctx) => {
    const searchParams = new URLSearchParams(new URL(req.url).search)
    const lang = searchParams.get('lang') ?? chooseDefaultLang(req)
    let wording = allWording.en
    if (lang === 'fr') {
      wording = allWording.fr
    }

    return ctx.render({wording})
  },
}

export default function Home(props: PageProps<Props>) {
  return (
    <>
      <Head>
        <HeadStyleComponent wording={props.data.wording}/>
      </Head>
      <HomeIsland wording={props.data.wording}/>
    </>
  )
}

const chooseDefaultLang = (req: Request): 'fr' | 'en' => {
  const arrayOfLangs = req.headers.get('accept-language')
    ?.split(',')
    ?.map((a) => a.split(';')[0])
    ?.map(a => a.split('-')[0]) ?? []

  for (const lang of arrayOfLangs) {
    if (lang === 'fr' || lang === 'en') {
      return lang
    }
  }

  return 'en'
}
