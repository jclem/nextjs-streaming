import {AppProps} from 'next/app'
import '../style/app.css'

const App = ({Component, pageProps}: AppProps) => <Component {...pageProps} />

export default App
