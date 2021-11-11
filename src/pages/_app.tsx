import {AppProps} from 'next/app'
import Head from 'next/head'
import '../style/app.css'

const App = ({Component, pageProps}: AppProps) => (
  <>
    <Head>
      <title>Next.js Streaming Test</title>
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
