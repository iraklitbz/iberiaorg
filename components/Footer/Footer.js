import Link from "next/link";
const Footer = () => {
  return ( 
        <footer className="main-footer bg-contrast-lower padding-top-md padding-bottom-md">
          <div className="container max-width-lg reveal-fx reveal-fx--translate-up reveal-fx--is-visible" data-reveal-fx-delta="50">
           

            <div className="main-footer__colophon border-top padding-top-xs">
              <div className="text-sm text-xs@md color-contrast-medium flex gap-xs">
                <span>© myWebsite</span>
                <Link href="/aviso-legal" className="color-contrast-high">Aviso legal</Link>
                <Link href="/politica-de-privacidad" className="color-contrast-high">Privacy</Link>
              </div>

              <div className="flex items-center gap-xs">
                <a  className="main-footer__social">
                  <svg className="icon" viewBox="0 0 16 16">
                    <title>Follow us on Twitter</title>
                    <g>
                      <path d="M16,3c-0.6,0.3-1.2,0.4-1.9,0.5c0.7-0.4,1.2-1,1.4-1.8c-0.6,0.4-1.3,0.6-2.1,0.8c-0.6-0.6-1.5-1-2.4-1 C9.3,1.5,7.8,3,7.8,4.8c0,0.3,0,0.5,0.1,0.7C5.2,5.4,2.7,4.1,1.1,2.1c-0.3,0.5-0.4,1-0.4,1.7c0,1.1,0.6,2.1,1.5,2.7 c-0.5,0-1-0.2-1.5-0.4c0,0,0,0,0,0c0,1.6,1.1,2.9,2.6,3.2C3,9.4,2.7,9.4,2.4,9.4c-0.2,0-0.4,0-0.6-0.1c0.4,1.3,1.6,2.3,3.1,2.3 c-1.1,0.9-2.5,1.4-4.1,1.4c-0.3,0-0.5,0-0.8,0c1.5,0.9,3.2,1.5,5,1.5c6,0,9.3-5,9.3-9.3c0-0.1,0-0.3,0-0.4C15,4.3,15.6,3.7,16,3z">
                      </path>
                    </g>
                  </svg>
                </a>

                <a  className="main-footer__social">
                  <svg className="icon" viewBox="0 0 16 16">
                    <title>Follow us on Youtube</title>
                    <g>
                      <path d="M15.8,4.8c-0.2-1.3-0.8-2.2-2.2-2.4C11.4,2,8,2,8,2S4.6,2,2.4,2.4C1,2.6,0.3,3.5,0.2,4.8C0,6.1,0,8,0,8 s0,1.9,0.2,3.2c0.2,1.3,0.8,2.2,2.2,2.4C4.6,14,8,14,8,14s3.4,0,5.6-0.4c1.4-0.3,2-1.1,2.2-2.4C16,9.9,16,8,16,8S16,6.1,15.8,4.8z M6,11V5l5,3L6,11z">
                      </path>
                    </g>
                  </svg>
                </a>

                <a className="main-footer__social">
                  <svg className="icon" viewBox="0 0 16 16">
                    <title>Find us on Facebook</title>
                    <g>
                      <path d="M16,8.048a8,8,0,1,0-9.25,7.9V10.36H4.719V8.048H6.75V6.285A2.822,2.822,0,0,1,9.771,3.173a12.2,12.2,0,0,1,1.791.156V5.3H10.554a1.155,1.155,0,0,0-1.3,1.25v1.5h2.219l-.355,2.312H9.25v5.591A8,8,0,0,0,16,8.048Z">
                      </path>
                    </g>
                  </svg>
                </a>

                <a  className="main-footer__social">
                  <svg className="icon" viewBox="0 0 16 16">
                    <title>Follow us on Instagram</title>
                    <g>
                      <circle cx="12.145" cy="3.892" r="0.96"></circle>
                      <path d="M8,12c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S10.206,12,8,12z M8,6C6.897,6,6,6.897,6,8 s0.897,2,2,2s2-0.897,2-2S9.103,6,8,6z">
                      </path>
                      <path d="M12,16H4c-2.056,0-4-1.944-4-4V4c0-2.056,1.944-4,4-4h8c2.056,0,4,1.944,4,4v8C16,14.056,14.056,16,12,16z M4,2C3.065,2,2,3.065,2,4v8c0,0.953,1.047,2,2,2h8c0.935,0,2-1.065,2-2V4c0-0.935-1.065-2-2-2H4z">
                      </path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
      </footer>
   );
}
 
export default Footer;