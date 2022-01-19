import Image from "next/image";
const Section_4 = () => {
  return ( 
    <section className="feature-v10 margin-top-xxxl margin-top-xxl@md">
        <div className="container max-width-adaptive-sm">
          <div className="text-component text-center">
            <h1 className="text-bold">Servicios</h1>
            <p className="color-contrast-medium">Como empresa administradora que somos, ofrecemos una amplia gama de servicios para que no tenga que preocuparse por nada. Gestionamos de principio a fin cualquier problema o impedimento que le pueda surgir.</p>
            <p className="color-contrast-medium">Si tiene alguna duda acerca de cualquiera de nuestros servicios, contacte con nosotros sin ningún compromiso y le daremos una solución.</p>
          </div>
        </div>

        <div id="seguros" className="padding-y-xl padding-top-xl@md padding-bottom-0@md mg-f">
          <div id="alquileres" className="container max-width-adaptive-lg">
            <div className="grid grid-service">
              <figure className="col-6@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <img className="block width-100% height-100% object-cover"  width="640" height="400" src="/img/sara-sadeghloo-nQtar6m82YA-unsplash.webp" alt="Administración de Fincas imagen" />
              </figure>

              <div className="bg-contrast-lower col-6@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Administración de Fincas</h2>
                  <ul className="list list--ul text-sm">
                    <li>Constitución y redacción de estatutos.</li>
                    <li>Administración y gestión integral de la comunidad.</li>
                    <li>Ponemos al día sus cuentas.</li>
                    <li>Contabilidad, cobros y pagos de la comunidad.</li>
                    <li>Convocatoria y asistencia a juntas. Redacción y envío de actas.</li>
                    <li>Control del mantenimiento de las partes comunes del edificio.</li>
                    <li>Reclamación judicial de impagados.</li>
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="seguros" className="padding-y-xl padding-bottom-0@md padding-top-0@md mg-f" data-theme="dark-1">
          <div className="container max-width-adaptive-lg">
            <div className="grid grid-service">
              <figure className="col-6@md order-2@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <img className="block width-100% height-100% object-cover"  width="640" height="400" src="/img/nusa-urbancek-EgRFzUJ3WhU-unsplash.webp" alt="Gestión de alquileres imagen" />
              </figure>

              <div className="bg-contrast-lower col-6@md order-1@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Gestión de alquileres</h2>
                  <ul className="list list--ul text-sm">
                    <li>Asesoramiento y alquiler de viviendas y locales.</li>
                    <li>Administración y cobro de alquileres.</li>
                    <li>Redacción contratos de arrendamiento.</li>
                    <li>Actualización de rentas.</li>
                    <li>Seguro de impago de alquiler.</li>
                   
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tramites" className="padding-y-xl padding-top-0@md padding-bottom-0@md mg-f">
          <div className="container max-width-adaptive-lg">
            <div className="grid grid-service">
              <figure className="col-6@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <img className="block width-100% height-100% object-cover"  width="640" height="400" src="/img/save.webp" alt="Gestión externa de seguros imagen" />
              </figure>

              <div className="bg-contrast-lower col-6@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Gestión externa de seguros</h2>
                  <ul className="list list--ul text-sm">
                    <li>Seguros personales: vida, accidentes personales, salud o enfermedad, dependencia.</li>
                    <li>Seguros de daños o patrimoniales: hogar, comunidades, automóvil, ingeniería, multirriesgo, crédito, robo, transportes, incendios, responsabilidad civil, objetos.</li>
                    <li>Seguros de prestación de servicios: asistencia en viaje, decesos, defensa jurídica.</li>
      
                   
                  </ul>
                  
                 
                </div>
              
              </div>
            </div>
          </div>
        </div>

        <div  className="padding-y-xl padding-bottom-xxl@md padding-top-0@md mg-f" data-theme="dark-1">
          <div className="container max-width-adaptive-lg">
            <div className="grid grid-service">
              <figure className="col-6@md order-2@md reveal-fx reveal-fx--clip-y reveal-fx--is-visible">
                <img className="block width-100% height-100% object-cover"  width="640" height="400" src="/img/windows-SwHvzwEzCfA-unsplash.webp" loading="lazy" alt="Trámites administrativos imagen" />
              </figure>

              <div className="bg-contrast-lower col-6@md order-1@md">
                <div className="text-component v-space-md height-100% flex flex-column padding-md">
                  <h2>Trámites administrativos</h2>
                  <ul className="list list--ul text-sm">
                    <li>Alta y cambios de titularidad en el Impuesto Bienes Inmuebles.</li>
                    <li>Obtención y renovación de cédulas de habitabilidad viviendas y locales.</li>
                    <li>Tramitación de escrituras compraventa, obra nueva, constitución y cancelación de hipotecas.</li>
                    <li>Agencia Inmobiliaria.</li>
                    <li>Mediación y asesoramiento en compraventa de inmuebles.</li>
                    <li>Valoraciones y peritaciones de inmuebles.</li>
                   
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