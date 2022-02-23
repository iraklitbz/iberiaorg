import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useIntl } from "react-intl";
import Head from 'next/head'
import { useRouter } from 'next/router'

const MainLayout = ({children, className, isPost, pageTitle, description, previewImage}) => {
  const intl = useIntl();
  const router = useRouter()
  useEffect(() => {
    if(intl.locale === 'es') {
      document.getElementsByTagName("body")[0].classList.remove("ge");
      document.getElementsByTagName("body")[0].className += " es";
      
    } else if (intl.locale === 'ge') {
      document.getElementsByTagName("body")[0].classList.remove("es");
      document.getElementsByTagName("body")[0].className += " ge";
      
    } 

  }, [intl.locale]);
  return ( 
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
         
          <meta name="description" content={description}  />
          <meta property="og:url" content={`https://www.iberiainfo.org${router?.asPath}`} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content="Iberia" key="ogsitename" />
          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
          <title>{pageTitle}</title>
        </Head>
        <div className={`main ${className || ''}`}> 
          <Header isPost={isPost} />
            { children }
          <Footer />
        </div>
      </>
   );
}
 
export default MainLayout;