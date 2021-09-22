import { useEffect, Fragment } from "react";
import "../scss/index.scss";
import Head from "next/head";



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.getElementsByTagName("html")[0].className += "js"
  },[])
  return (
      <Fragment>
         <Component {...pageProps} />
         <script src="https://unpkg.com/codyhouse-framework/main/assets/js/util.js"></script>
      </Fragment>
  )
}

export default MyApp
