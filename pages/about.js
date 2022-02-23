import React from "react";
import MainLayout from "../layouts/MainLayout";
import Team from "../components/Team/Team";
import Link from "next/link";
import { useIntl } from 'react-intl'
const AboutUs = () => {
  const intl = useIntl();
  return (
   <MainLayout>
      <Team />
      <section className="position-relative z-index-1 ">


     

          <div className="container max-width-adaptive-md margin-top-xl">
           
            <ol className="hiw-list">
              <li className="hiw-list__item">
                <div className="hiw-list__item-inner">
                  <div className="hiw-list__counter" aria-hidden="true"></div>
          
                  <div className="flex-grow">
                    <div className="hiw-list__content grid gap-md items-center@md">
                      <figure className="col-6@md">
                        <img className="block width-100%" src="https://iberiainfo.me/wp-content/uploads/2022/02/how-it-works-img-1.png"  />
                      </figure>
              
                      <div className="col-6@md">
                        <div className="text-component">
            
                          <p className="color-contrast-medium" dangerouslySetInnerHTML={{__html: intl.formatMessage({id: 'aboutus1_html'})}}></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="hiw-list__item">
                <div className="hiw-list__item-inner">
                  <div className="hiw-list__counter" aria-hidden="true"></div>
          
                  <div className="flex-grow">
                    <div className="hiw-list__content grid gap-md items-center@md">
                      <figure className="col-6@md">
                        <img className="block width-100%" src="https://iberiainfo.me/wp-content/uploads/2022/02/how-it-works-img-2.png"  />
                      </figure>
              
                      <div className="col-6@md">
                        <div className="text-component">
            
                          <p className="color-contrast-medium" dangerouslySetInnerHTML={{__html: intl.formatMessage({id: 'aboutus2'})}}></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className="hiw-list__item">
                <div className="hiw-list__item-inner">
                  <div className="hiw-list__counter" aria-hidden="true"></div>
          
                  <div className="flex-grow">
                    <div className="hiw-list__content grid gap-md items-center@md">
                      <figure className="col-6@md">
                        <img className="block width-100%" src="https://iberiainfo.me/wp-content/uploads/2022/02/how-it-works-img-3.png"  />
                      </figure>
              
                      <div className="col-6@md">
                        <div className="text-component">
                      
                          <p className="color-contrast-medium" dangerouslySetInnerHTML={{__html: intl.formatMessage({id: 'aboutus3_html'})}}></p>
                        </div>

                        <div className="margin-top-md">
                          <Link href="/contact"><a className="btn btn--primary"> {intl.formatMessage({ id: "contactus" })} </a></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
          
        </section>
    
   </MainLayout>
  )
}

export default AboutUs
