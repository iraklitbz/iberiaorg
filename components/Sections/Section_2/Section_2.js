import Image from "next/image";
import Link from "next/link";
const Section_2 = () => {
  return ( 
    <section className="gallery-v2 margin-bottom-xxl">
        <div className="container max-width-adaptive-lg clearfix">
          <div className="margin-bottom-xl clearfix">
            <div className="grid gap-sm">
              <div className="col-6@lg offset-3@lg">
                <div className="text-component line-height-lg">
                  <h1 className="text-xl text-bold">¿Por qué nosotros?</h1>

                  <ul>
                    <li>Llevamos total transparencia de las gestiones.</li>
                    <li>Ponemos al día las cuentas de su comunidad.</li>
                    <li>Precio competitivo en el mercado.</li>
                    <li>Sin permanencia.</li>
                  </ul>
      
               
                 
      
              
                </div>
              </div>
            </div>
          </div>
      
          <ul className="gallery-v2__grid grid gap-sm">
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <Link href="/Servicios#fincas" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/toa-heftiba-nTA5aTtnoa8-unsplash.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </Link>

                <div className="padding-sm text-center">
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Administración de Fincas</a></h2>

                  
                </div>
              </div>
            </li>
      
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <Link href="/Servicios#seguros" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/seguro.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </Link>

                <div className="padding-sm text-center">
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Gestión externa de seguros</a></h2>

                 
                </div>
              </div>
            </li>
      
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <Link href="/Servicios#alquileres" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/maurits-bausenhart-7YVBPSt31BY-unsplash.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </Link>

                <div className="padding-sm text-center">
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Gestión de alquileres</a></h2>

                 
                </div>
              </div>
            </li>
      
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <Link href="/Servicios#tramites" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/tramites.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </Link>

                <div className="padding-sm text-center">
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Trámites administrativos</a></h2>

                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
   );
}
 
export default Section_2;