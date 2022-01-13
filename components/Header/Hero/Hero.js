const Hero = () => {
  return ( 
    <section className="intro intro--top-overlay position-relative z-index-1 diagonal-section-bottom diagonal-section-bottom--flip-x bg-transparent margin-bottom-xxl">
    <div className="container max-width-adaptive-lg padding-top-xxl padding-bottom-xxl">
      <div className="max-width-xs ie:bg ie:padding-md" >
      

        <div className="text-component margin-bottom-sm reveal-fx reveal-fx--translate-up reveal-fx--is-visible" data-reveal-fx-delay="100" data-reveal-fx-delta="0">
          <h1 className="text-xxl text-bold">Administración de Fincas e Inmuebles en Palma de Mallorca.</h1>
          <p>Tu comunidad en las mejores manos.</p>
        </div>

        <div className="flex flex-wrap items-center gap-sm reveal-fx reveal-fx--translate-up reveal-fx--is-visible" data-reveal-fx-delay="200" data-reveal-fx-delta="0">
          <a href="shop.html" className="btn btn--primary">Solicitar presupuesto</a>
        </div>
      </div>
    </div>
  </section>
   );
}
 
export default Hero;