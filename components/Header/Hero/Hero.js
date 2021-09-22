const Hero = () => {
  return ( 
    <section className="intro intro--top-overlay position-relative z-index-1 diagonal-section-bottom diagonal-section-bottom--flip-x bg-transparent margin-bottom-xxl" data-theme="dark-1">
    <div className="container max-width-adaptive-lg padding-top-xxxl padding-bottom-lg">
      <div className="max-width-xs ie:bg ie:padding-md">
        <div className="text-sm opacity-60% margin-bottom-xxs reveal-fx reveal-fx--translate-up reveal-fx--is-visible" data-reveal-fx-delta="0">
          This is a Label</div>

        <div className="text-component margin-bottom-sm reveal-fx reveal-fx--translate-up reveal-fx--is-visible" data-reveal-fx-delay="100" data-reveal-fx-delta="0">
          <h1 className="text-xxxxl text-uppercase">Art <em>&amp;</em> Clothing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic
            quod!</p>
        </div>

        <div className="flex flex-wrap items-center gap-sm reveal-fx reveal-fx--translate-up reveal-fx--is-visible" data-reveal-fx-delay="200" data-reveal-fx-delta="0">
          <a href="shop.html" className="btn btn--subtle">Shop Now</a>
        </div>
      </div>
    </div>
  </section>
   );
}
 
export default Hero;