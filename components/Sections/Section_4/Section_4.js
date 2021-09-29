import Image from "next/image";
const Section_4 = () => {
  return ( 
    <section className="feature-v10 margin-top-xxl">
        <div className="container max-width-adaptive-sm">
          <div className="text-component text-center">
            <h1>Servicios</h1>
            <p className="color-contrast-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="padding-y-xl padding-top-xl@md padding-bottom-0@md">
          <div className="container max-width-adaptive-lg">
            <div className="grid">
              <figure className="col-6@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <Image className="block width-100% height-100% object-cover" width="640px" height="400px" src="/img/feature-v10-img-1.jpg" loading="lazy" alt="Image description" />
              </figure>

              <div className="bg-contrast-lower col-6@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Consultoria</h2>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-y-xl padding-bottom-xxl@md padding-top-0@md" data-theme="dark-1">
          <div className="container max-width-adaptive-lg">
            <div className="grid">
              <figure className="col-6@md order-2@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <Image className="block width-100% height-100% object-cover" width="640px" height="400px" src="/img/feature-v10-img-2.jpg" loading="lazy" alt="Image description" />
              </figure>

              <div className="bg-contrast-lower col-6@md order-1@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Lorem ipsum</h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default Section_4;