import React from "react";
import MainLayout from "../layouts/MainLayout";
import Team from "../components/Team/Team";
import Link from "next/link";
import { useIntl } from 'react-intl'
const AboutUs = () => {
  const intl = useIntl();
  return (
   <MainLayout>
      <section className="position-relative z-index-1 ">
        <div className="diagonal-section bg-contrast-lower bg-opacity-50% margin-top-md margin-bottom-xl" style={{backgroundImage: "url('https://iberiainfo.me/wp-content/uploads/2022/02/abstract5-scaled.jpg')"}}>
          <div className="container max-width-adaptive-sm padding-y-xxxl">
            <div className="text-center">

              <div className="text-component margin-bottom-sm">
                <h1>{intl.formatMessage({ id: "aboutus" })}</h1>
              </div>
          
              
            </div>
          </div>
        </div>
          <div className="container max-width-adaptive-md">
           
            <ol className="hiw-list">
              <li className="hiw-list__item">
                <div className="hiw-list__item-inner">
                  <div className="hiw-list__counter" aria-hidden="true"></div>
          
                  <div className="flex-grow">
                    <div className="hiw-list__content grid gap-md items-center@md">
                      <figure className="col-6@md">
                        <img className="block width-100%" src="https://codyhouse.co/app/assets/img/how-it-works-img-1.png"  />
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
                        <img className="block width-100%" src="https://codyhouse.co/app/assets/img/how-it-works-img-2.png"  />
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
                        <img className="block width-100%" src="https://codyhouse.co/app/assets/img/how-it-works-img-3.png"  />
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
        <Team />
   </MainLayout>
  )
}

export default AboutUs
