import Image from "next/image";
const Section_2 = () => {
  return ( 
    <section className="gallery-v2 margin-bottom-xxl">
        <div className="container max-width-adaptive-lg clearfix">
          <div className="margin-bottom-xl clearfix">
            <div className="grid gap-sm">
              <div className="col-6@lg offset-3@lg">
                <div className="text-component line-height-lg">
                  <h1 className="text-xxxl">Art &amp; Craft</h1>
      
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sed tenetur rem quam nihil dolorum expedita maxime nisi recusandae sequi magni culpa fuga accusamus eveniet fugiat ipsum ab consequuntur.</p>
      
              
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
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Product Name</a></h2>

                  
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
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Product Name</a></h2>

                 
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
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Product Name</a></h2>

                 
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
                  <h2 className="text-md font-primary"><a href="#0" className="product-card-v2__title">Product Name</a></h2>

                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
   );
}
 
export default Section_2;