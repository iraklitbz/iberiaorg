import Link from "next/link";
import CookieConsent from "react-cookie-consent";
const Footer = () => {
  return ( 
        <footer className="main-footer bg-contrast-lower padding-top-md padding-bottom-md">
         <CookieConsent
            containerClasses="cookies-container max-width-xxxs@sm bg-light padding-md radius-md inner-glow shadow-md"
            location="bottom"
            enableDeclineButton
            buttonText="Acepto"
            disableStyles={true}
            declineButtonText="Descartar"
            cookieName="vestaCookie"
            style={{ background: "#2B373B" }}
            buttonClasses='btn btn--primary'
            declineButtonClasses='btn btn--secundary'
            expires={150}
        >
         Este sitio web utiliza cookies para mejorar la experiencia del usuario.{" "}
          <Link className="link" href="/politica-cookies">Política cookies</Link>
        </CookieConsent>
          <div className="container max-width-lg reveal-fx reveal-fx--translate-up reveal-fx--is-visible" data-reveal-fx-delta="50">
           

            <div className="main-footer__colophon border-top padding-top-xs">
              <div className="text-sm text-xs@md color-contrast-medium flex gap-xs">
                <span>©<strong>VESTA</strong> ADMINISTRACIONES</span>
                <Link href="/politica-de-privacidad" className="color-contrast-high">Política de privacidad</Link>
                <Link href="/politica-cookies" className="color-contrast-high">Política cookies</Link>
              
              </div>

              <div className="flex items-center gap-xs">
              

            

                <Link  target="_blank" href="https://www.instagram.com/administracionesvesta/" >
                  <a className="main-footer__social">
                  <svg className="icon" viewBox="0 0 16 16">
                    <title>Síguenos en instagram</title>
                    <g>
                      <circle cx="12.145" cy="3.892" r="0.96"></circle>
                      <path d="M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12z M8,6C6.897,6,6,6.897,6,8 s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z">
                      </path>
                      <path d="M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16z M4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z">
                      </path>
                    </g>
                  </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
      </footer>
   );
}
 
export default Footer;