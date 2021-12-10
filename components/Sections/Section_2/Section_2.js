import Image from "next/image";
const Section_2 = () => {
  return ( 
    <section className="gallery-v2 margin-bottom-xxl">
        <div className="container max-width-adaptive-lg clearfix">
          <div className="margin-bottom-xl clearfix">
            <div className="grid gap-sm">
              <div className="col-6@lg offset-3@lg">
                <div className="text-component line-height-lg">
                  <h1 className="text-xl">¿Por qué trabajar con nosotros?</h1>
      
                  <p>Llevamos una total transparencia de las gestiones
                    <br />
                    Ponemos al día las cuentas de su comunidad
                    <br />
                    Precio competitivo en el mercado
                    <br />
                    Sin permanencia
                  </p>
                 
      
              
                </div>
              </div>
            </div>
          </div>
      
          <ul className="gallery-v2__grid grid gap-sm">
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <a href="#0" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/product-card-v2-img-1a.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </a>

                <div className="padding-sm text-center">
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Administración de Fincas</a></h2>

                  
                </div>
              </div>
            </li>
      
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <a href="#0" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/product-card-v2-img-2a.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </a>

                <div className="padding-sm text-center">
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Gestión externa de seguros</a></h2>

                 
                </div>
              </div>
            </li>
      
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <a href="#0" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/product-card-v2-img-4a.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </a>

                <div className="padding-sm text-center">
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Gestión de alquileres</a></h2>

                 
                </div>
              </div>
            </li>
      
            <li className="gallery-v2__item col-6@sm col-3@lg">
              <div className="prod-card-v2">
                <a href="#0" className="prod-card-v2__img-link" aria-label="Description of the link">
                  <figure className="media-wrapper media-wrapper--4:5">
                    <Image src="/img/product-card-v2-img-5a.jpg" layout='fill' loading="lazy" alt="Product preview image" />
                  </figure>
                </a>

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