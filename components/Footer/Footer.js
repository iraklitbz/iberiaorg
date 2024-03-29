import React from "react";
import Link from "next/link";
import { useIntl } from 'react-intl'
const Footer = () => {
  const intl = useIntl();
  return ( 
    <footer className="main-footer position-relative z-index-1 padding-top-xl">
      <div className="container max-width-lg">
        <div className="grid gap-lg">
          <div className="col-3@lg order-2@lg text-right@lg">
            <Link href="/">
              <a className="f-header__logo normal-logo">
                  <div className="small-logo-icon">
                    <img width="45px" height="45px" src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_icon.svg" />
                  </div>
                  <div className="logo-name">
                    <img width="120px" height="36px" src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_text-1.svg" />
                  </div>
              </a>
            </Link>
          </div>
          
          <nav className="col-9@lg order-1@lg">
            <ul className="grid gap-lg">
            
    
              <li className="col-6@xs col-3@md">
                <h4 className="margin-bottom-sm">{intl.formatMessage({ id: "mapaweb" })}</h4>
                <ul className="grid gap-xs">
                  <li className="f-header__item"><Link href="/"><a> {intl.formatMessage({ id: "home" })} </a></Link></li>
                  <li className="f-header__item"><Link href="/about"><a> {intl.formatMessage({ id: "aboutus" })} </a></Link></li>
                  <li className="f-header__item"><Link href="/service"><a> {intl.formatMessage({ id: "service" })} </a></Link></li>
                  <li className="f-header__item"><Link href="/contact"><a> {intl.formatMessage({ id: "contactus" })} </a></Link></li>
                </ul>
              </li>

              <li className="col-6@xs col-3@md">
                <h4 className="margin-bottom-sm">{intl.formatMessage({ id: "news" })}</h4>
              
                {intl.locale === 'es' 
                ?
                <ul className="grid gap-xs">
                    <li><Link href="/categorynews"><a> {intl.formatMessage({ id: "news" })} </a></Link></li>
                    <li><Link href="/category/events"><a> {intl.formatMessage({ id: "events" })} </a></Link></li>
                    <li><Link href="/category/activities"><a> {intl.formatMessage({ id: "activities" })} </a></Link></li>
                    <li><Link href="/category/programs"><a> {intl.formatMessage({ id: "programs" })} </a></Link></li>
                  <li><Link href="/category/tours"><a> {intl.formatMessage({ id: "tours" })} </a></Link></li>
                  </ul>
                  :
                  <ul className="grid gap-xs">
                    <li><Link href="/geo-category/news-ge"><a> {intl.formatMessage({ id: "news" })} </a></Link></li>
                    <li><Link href="/geo-category/events-ge"><a> {intl.formatMessage({ id: "events" })} </a></Link></li>
                    <li><Link href="/geo-category/activities-ge"><a> {intl.formatMessage({ id: "activities" })} </a></Link></li>
                    <li><Link href="/geo-category/programs-ge"><a> {intl.formatMessage({ id: "programs" })} </a></Link></li>
                    <li><Link href="/geo-categorytours-ge"><a> {intl.formatMessage({ id: "tours" })} </a></Link></li>
                  </ul>
                }
              
              </li>
    
              <li className="col-6@xs col-3@md">
                <h4 className="margin-bottom-sm">{intl.formatMessage({ id: "footer" })}</h4>
                <ul className="grid gap-xs social-net">
                  <li><Link target="_blank" href="https://www.facebook.com/CentroHispanoGeorgiano/"><a className="main-footer__link"> <i className="bx-pull-left bx bxl-facebook bx-sm"></i> Facebook  </a></Link></li>
                  <li><Link href="/"><a className="main-footer__link"> <i className="bx-pull-left bx bxl-instagram  bx-sm"></i> Instagram </a></Link></li>
                  <li><Link target="_blank" href="https://youtube.com/user/asociacioniberia"><a className="main-footer__link"> <i className="bx-pull-left bx bxl-youtube bx-sm"></i> Youtube </a></Link></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      
        <div className="flex flex-column border-top padding-y-xs margin-top-lg flex-row@md justify-between@md items-center@md">
          <div className="margin-bottom-sm margin-bottom-0@md">
            <div className="text-sm text-xs@md color-contrast-medium flex flex-wrap gap-xs">
              <span>&copy; iberiainfo.org</span>
              <Link href="/"><a className="color-contrast-high"> Política de privacidad </a></Link>
              <Link href="/"><a className="color-contrast-high"> Política de cookies </a></Link>
            </div>
          </div>
    
          <div className="flex items-center gap-xs">
          <Link target="_blank" href="https://www.facebook.com/CentroHispanoGeorgiano/">
            <a className="main-footer__social">
              <svg className="icon block" viewBox="0 0 16 16"><title>Follow us on Facebook</title><g><path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z"></path></g></svg>
            </a>
          </Link>
    
          <Link target="_blank" href="https://youtube.com/user/asociacioniberia">
            <a className="main-footer__social">
              <svg className="icon block" viewBox="0 0 16 16"><title>Follow us on Youtube</title><g><path d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z"></path></g></svg>
            </a>
          </Link>
    
         
          </div>
        </div>
      </div>
  </footer>
   );
}
 
export default Footer;