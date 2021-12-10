import { useEffect, Fragment } from "react";
import "../scss/index.scss";
import Script from 'next/script'



function MyApp({ Component, pageProps }) {
  
  useEffect(() => {
    const UtilScript = document.createElement('script');
    UtilScript.setAttribute('src','https://unpkg.com/codyhouse-framework/main/assets/js/util.js');
    document.getElementsByTagName("html")[0].className += "js";
    document.head.appendChild(UtilScript);
  },[])
  return (
      <Fragment>
         <Component {...pageProps} />
      </Fragment>
  )
}

export default MyApp
