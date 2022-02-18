import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Header/Header";
import { useIntl } from "react-intl";

const MainLayout = ({children, className, isPost}) => {
  const intl = useIntl();

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
        <div className={`main ${className || ''}`}> 
          <Header isPost={isPost} />
            { children }
          <Footer />
        </div>
   );
}
 
export default MainLayout;