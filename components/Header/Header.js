import React, {useState, useEffect} from "react";
import Link from "next/link";
import { useIntl } from 'react-intl'
import Language from "./Language";

const Header = ({isPost}) => {
  const intl = useIntl();
  const [menuIsActive, setMenuIsActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isScrollOK, setIsScrollOK] = useState(false);
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
      
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
        };
        window.addEventListener("scroll", onScroll);
      if(scrollTop > 150) {
        setIsScrollOK(true)
      } else {
        setIsScrollOK(false)
      }

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const handleMenu = () => {
    if(menuIsActive) {
      setMenuIsActive(false)
    } else {
      setMenuIsActive(true)
    }
   
  }
  
  return ( 
    <header className={`f-header js-f-header position-fixed ${menuIsActive ? 'f-header--expanded': null}`}>
      <div className="f-header__mobile-content container max-width-lg">
        <Link href="/">
          <a className={isScrollOK ? 'f-header__logo active' : 'f-header__logo'}>
            <div className="small-logo-icon">
                  <img width="45px"  src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_icon.svg" />
                </div>
                <div className="logo-name">
                  <img width="120px" height="36px" src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_text-1.svg" />
              </div>
            </a>
        </Link>

        <div className="flex">
          {!isPost ? <Language /> : null}

          <button onClick={() => handleMenu()} className={`reset anim-menu-btn f-header__nav-control margin-left-xs ${menuIsActive ? 'anim-menu-btn--state-b' : null}`}>
            <i className="anim-menu-btn__icon anim-menu-btn__icon--close" aria-hidden={menuIsActive}></i>
          </button>
        </div>
      </div>
      
      <div className={`f-header__nav ${menuIsActive ? 'f-header__nav--is-visible' : null}`} role="navigation">
        <div className="f-header__nav-grid justify-between@md container max-width-lg">
          <div className={isScrollOK ? 'f-header__nav-logo-wrapper flex-grow flex-basis-0 active' : 'f-header__nav-logo-wrapper flex-grow flex-basis-0'}>
            <Link href="/">
              <a className="f-header__logo">
                <div className="small-logo-icon">
                  <img width="45px"  src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_icon.svg" />
                </div>
                <div className="logo-name">
                  <img width="120px" height="36px" src="https://iberiainfo.me/wp-content/uploads/2022/02/logo_iberia_text-1.svg" />
                </div>
                </a>
            </Link>
          </div>

          <ul className="f-header__list navbar-menu-primary">
              <li className="f-header__item"><Link href="/"><a className="f-header__link"> {intl.formatMessage({ id: "home" })} </a></Link></li>
              {intl.locale === 'es' 
              ? 
              <li className="f-header__item">
                <Link href={intl.locale === 'es' ? '/category/news' :  '/geo-category/news'} >
                  <a className="f-header__link">
                    <span>{intl.formatMessage({ id: "news" })}</span>
                    <svg className="f-header__dropdown-icon icon" aria-hidden="true" viewBox="0 0 12 12">
                      <path d="M9.943,4.269A.5.5,0,0,0,9.5,4h-7a.5.5,0,0,0-.41.787l3.5,5a.5.5,0,0,0,.82,0l3.5-5A.5.5,0,0,0,9.943,4.269Z" />
                    </svg>
                  </a>
                </Link>

                  <ul className="f-header__dropdown">
                        <li><Link href="/category/news"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "news" })} </a></Link></li>
                        <li><Link href="/category/events"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "events" })} </a></Link></li>
                        <li><Link href="/category/activities"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "activities" })} </a></Link></li>
                        <li><Link href="/category/curiosidades"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "curiosidades" })} </a></Link></li>
                        <li><Link href="/category/programs"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "programs" })} </a></Link></li>
                        <li><Link href="/category/tours"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "tours" })} </a></Link></li>
                      </ul>
                    </li>
                    : 
                    <li className="f-header__item">
                    <Link href={`/geo-category/news`}>
                      <a className="f-header__link">
                        <span>{intl.formatMessage({ id: "news" })}</span>
                        <svg className="f-header__dropdown-icon icon" aria-hidden="true" viewBox="0 0 12 12">
                          <path d="M9.943,4.269A.5.5,0,0,0,9.5,4h-7a.5.5,0,0,0-.41.787l3.5,5a.5.5,0,0,0,.82,0l3.5-5A.5.5,0,0,0,9.943,4.269Z" />
                        </svg>
                      </a>
                    </Link>

                  <ul className="f-header__dropdown">
                    <li><Link href="/geo-category/news"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "news" })} </a></Link></li>
                    <li><Link href="/geo-category/events"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "events" })} </a></Link></li>
                    <li><Link href="/geo-category/activities"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "activities" })} </a></Link></li>
                    <li><Link href="/geo-category/curiosidades"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "curiosidades" })} </a></Link></li>
                    <li><Link href="/geo-category/programs"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "programs" })} </a></Link></li>
                    <li><Link href="/geo-category/tours"><a className="f-header__dropdown-link"> {intl.formatMessage({ id: "tours" })} </a></Link></li>
                  </ul>
                </li>
              
              }
              <li className="f-header__item"><Link href="/about"><a className="f-header__link"> {intl.formatMessage({ id: "aboutus" })} </a></Link></li>
              <li className="f-header__item"><Link href="/service"><a className="f-header__link"> {intl.formatMessage({ id: "service" })} </a></Link></li>
              <li className="f-header__item"><Link href="/contact"><a className="f-header__link">{ intl.formatMessage({ id: "contactus" })} </a></Link></li>
            </ul>
        
            <div className="display@sm">
              {!isPost ? <Language /> : null}
            </div>
         </div>
        </div>
 
    </header>
   );
}
 
export default Header;