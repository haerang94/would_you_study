import 'styles/globals.css'
import { AppProps } from 'next/app'
function MyApp({ Component, pageProps }:string) {
  return <Component {...pageProps} />
}

export default MyApp
