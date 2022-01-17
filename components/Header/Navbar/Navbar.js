import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return ( 
      <div className="header__container container max-width-lg">
        <div className="header__logo">
          <Link href='/' >
            <a className='header__logo__box'>
              <span>
                 <img src="/logo_vesta.png" layout='fill' alt="logo" />
              </span>
            <p>VESTA </p>
            </a>

          </Link>
        </div>

        <button className="btn btn--subtle header__trigger js-header__trigger" aria-label="Toggle menu" aria-expanded="false" aria-controls="header-nav">
          <i className="header__trigger-icon" aria-hidden="true"></i>
          <span>Menu</span>
        </button>

        <nav className="header__nav js-header__nav" id="header-nav" role="navigation" aria-label="Main">
          <div className="header__nav-inner">
            <div className="header__label">Menu</div>
            <ul className="header__list">
              <li className="header__item"> 
              <Link href="/"> 
                <a className={`header__link ${router.pathname == "/" ? "active" : ""}`}>Inicio</a> 
              </Link></li>
              <li className="header__item">
                <Link href="/Servicios">
                  <a className={`header__link ${router.pathname == "/Servicios" ? "active" : ""}`}>Servicios</a>
                </Link>
              </li>
              <li className="header__item">
                <Link href="/Empresa">
                  <a className={`header__link ${router.pathname == "/Empresa" ? "active" : ""}`}>Sobre nosotros</a>
                </Link>
              </li>
              <li className="header__item">
                <Link href="/Inmobiliaria">
                  <a className={`header__link ${router.pathname == "/Inmobiliaria" ? "active" : ""}`}>Inmobiliaria</a>
                </Link>
              </li>
             
              <li className="header__item header__item--divider" aria-hidden="true"></li>
              <li className="header__item">
                <Link href="/Contacto">
                  <a className="header__nav-btn btn btn--primary">Contacto</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    </div>
   );
}
 
export default Navbar;