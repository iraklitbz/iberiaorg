import Link from "next/link";
const Section_3 = () => {
  return ( 
    <section className="position-relative z-index-1 margin-bottom-xxl">
        <div className="container max-width-xs margin-bottom-xl">
          <div className="text-component text-center">
            <h1 className="text-xxxl">Browse Categories</h1>
            <p className="color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque, cupiditate dicta quo vero praesentium ipsam.</p>
          </div>
        </div>

        <div className="container max-width-adaptive-md">
          <div className="grid gap-sm">
            <div>
              <div className="banner overflow-hidden">
                <Link href="/Empresa" className="text-decoration-none" aria-label="Shop Now">
                  <a className="text-decoration-none">
                    <div className="grid flex-row-reverse@md">
                      <div className="col-6@md overflow-hidden" aria-hidden="true">
                        <div className="banner__figure banner__figure1 width-100%"></div>
                      </div>
                
                      <div className="col-6@md">
                        <div className="text-component v-space-md height-100% flex flex-column padding-md padding-lg@md">
                          <h2>Sobre Nosotros</h2>
                          
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>

            <div>
              <div className="banner overflow-hidden">
                <Link href="/Contacto">
                  <a className="text-decoration-none">
                    <div className="grid flex-row-reverse@md">
                      <div className="col-6@md overflow-hidden" aria-hidden="true">
                        <div className="banner__figure banner__figure2 width-100%"></div>
                      </div>
                
                      <div className="col-6@md">
                        <div className="text-component v-space-md height-100% flex flex-column padding-md padding-lg@md">
                          <h2>Contacto</h2>
                        
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default Section_3;