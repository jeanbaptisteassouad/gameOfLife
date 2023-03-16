import { Head } from '$fresh/runtime.ts'
import HomeIsland from '../islands/HomeIsland.tsx'

export default function Home() {
  return (
    <>
      <Head>
        <title>Game of Life</title>
      </Head>
      <HomeIsland/>
    </>
  )
}
