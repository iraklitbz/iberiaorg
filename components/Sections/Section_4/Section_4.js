import Image from "next/image";
const Section_4 = () => {
  return ( 
    <section className="feature-v10 margin-top-xxl">
        <div className="container max-width-adaptive-sm">
          <div className="text-component text-center">
            <h1>Servicios</h1>
            <p className="color-contrast-medium">Como empresa administradora que somos, ofrecemos una amplia gama de servicios para que no tenga que preocuparse por nada. Gestionamos de principio a fin cualquier problema o impedimento que le pueda surgir.</p>
            <p className="color-contrast-medium">Si tiene alguna duda acerca de cualquiera de nuestros servicios, contacte con nosotros sin ningún compromiso y le daremos una solución.</p>
          </div>
        </div>

        <div className="padding-y-xl padding-top-xl@md padding-bottom-0@md">
          <div className="container max-width-adaptive-lg">
            <div className="grid">
              <figure className="col-6@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <Image className="block width-100% height-100% object-cover" width="640px" height="400px" src="/img/sara-sadeghloo-nQtar6m82YA-unsplash.jpg" loading="lazy" alt="Image description" />
              </figure>

              <div className="bg-contrast-lower col-6@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Administración de Fincas</h2>
                  <ul className="list list--ul text-sm">
                    <li>Constitución y redacción de estatutos</li>
                    <li>Administración y gestión integral de la Comunidad</li>
                    <li>Ponemos al día sus cuentas</li>
                    <li>Contabilidad, cobros y pagos de la Comunidad</li>
                    <li>Convocatoria y asistencia a juntas. Redacción y envío de actas</li>
                    <li>Control del mantenimiento de las partes comunes del edificio</li>
                    <li>Reclamación judicial de impagados</li>
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-y-xl padding-bottom-0@md padding-top-0@md" data-theme="dark-1">
          <div className="container max-width-adaptive-lg">
            <div className="grid">
              <figure className="col-6@md order-2@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <Image className="block width-100% height-100% object-cover" width="640px" height="400px" src="/img/nusa-urbancek-EgRFzUJ3WhU-unsplash.jpg" loading="lazy" alt="Image description" />
              </figure>

              <div className="bg-contrast-lower col-6@md order-1@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Gestión de alquileres</h2>
                  <ul className="list list--ul text-sm">
                    <li>Asesoramiento y alquiler de viviendas y locales</li>
                    <li>Administración y cobro de alquileres</li>
                    <li>Redacción contratos de arrendamiento</li>
                    <li>Actualización de rentas</li>
                   
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="padding-y-xl padding-top-0@md padding-bottom-0@md">
          <div className="container max-width-adaptive-lg">
            <div className="grid">
              <figure className="col-6@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <Image className="block width-100% height-100% object-cover" width="640px" height="400px" src="/img/tom-podmore-27wlT2XF9tY-unsplash.jpg" loading="lazy" alt="Image description" />
              </figure>

              <div className="bg-contrast-lower col-6@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Gestión externa de seguros</h2>
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="padding-y-xl padding-bottom-xxl@md padding-top-0@md" data-theme="dark-1">
          <div className="container max-width-adaptive-lg">
            <div className="grid">
              <figure className="col-6@md order-2@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <Image className="block width-100% height-100% object-cover" width="640px" height="400px" src="/img/sedki-alimam-7aBz-b2UYEY-unsplash.jpg" loading="lazy" alt="Image description" />
              </figure>

              <div className="bg-contrast-lower col-6@md order-1@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Trámites administrativos</h2>
                  <ul className="list list--ul text-sm">
                    <li>Alta y cambios de titularidad en el Impuesto Bienes Inmuebles</li>
                    <li>Obtención y renovación de cédulas de habitabilidad viviendas y locales</li>
                    <li>Tramitación de escrituras compraventa, obra nueva, constitución y cancelación de hipotecas</li>
                    <li>Agencia Inmobiliaria</li>
                    <li>Mediación y asesoramiento en compraventa de inmuebles</li>
                    <li>Valoraciones y peritaciones de inmuebles</li>
                   
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
   );
}
 
export default Section_4;