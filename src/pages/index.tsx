import Head from 'next/head'
import Home from '~/components/home'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>AIGC Dream</title>
        <meta name="description" content="AIGC test project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
