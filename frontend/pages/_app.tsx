import {globalStyle} from 'styles/globalStyles'
import { Global } from '@emotion/react'
import  {AppProps}  from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyle}></Global>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
