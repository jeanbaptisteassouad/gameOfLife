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
    const wording = chooseWording(lang)

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

const chooseDefaultLang = (req: Request): 'fr' | 'en' | 'de' => {
  const arrayOfLangs = req.headers.get('accept-language')
    ?.split(',')
    ?.map((a) => a.split(';')[0])
    ?.map(a => a.split('-')[0]) ?? []

  for (const lang of arrayOfLangs) {
    if (lang === 'fr' || lang === 'en' || lang === 'de') {
      return lang
    }
  }

  return 'en'
}

const chooseWording = (lang: string) => {
  return (allWording as Record<string, WordingT>)[lang] ?? allWording.en
}
