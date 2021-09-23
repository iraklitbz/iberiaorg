import { useEffect, Fragment } from "react";
import "../scss/index.scss";
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.getElementsByTagName("html")[0].className += "js"
  },[])
  return (
      <Fragment>
         <Component {...pageProps} />
         <Script src="https://unpkg.com/codyhouse-framework/main/assets/js/util.js"></Script>
      </Fragment>
  )
}

export default MyApp
