import MainLayout from "../layouts/MainLayout";
import { useIntl } from 'react-intl'
const Service = () => {
  const intl = useIntl();
  return ( 
    <MainLayout>
        <section className="feature-v8 padding-bottom-xxl">
          <div className="feature-v8__main-content bg-iberia padding-top-xxl">
            <div className="container max-width-adaptive-lg">
              <div className="grid gap-md justify-between@md">
                <div className="col-12@md">
                  <div className="text-component">
                    <h2 className="text-center">{intl.formatMessage({ id: "service1" })}</h2>
                  </div>
                </div>

               
              </div>
            </div>
          </div>

          <div className="container max-width-adaptive-lg">
            <ul className="feature-v8__sub-content grid gap-lg">
              <li className="col-4@md">

                <div className="card-v8 bg radius-lg">
                  <figure>
                    <img src="https://iberiainfo.me/wp-content/uploads/2022/02/3-scaled.jpg" alt="Image description" />
                  </figure>

                  <footer className="padding-sm">
                    <div className="text-component">
                      <h4><span className="card-v8__title">{intl.formatMessage({ id: "service2" })}</span></h4>
                    </div>
                  </footer>
                </div>
              </li>

              <li className="col-4@md">

                <div className="card-v8 bg radius-lg">
                  <figure>
                    <img src="https://iberiainfo.me/wp-content/uploads/2022/02/2-scaled.jpg" alt="Image description" />
                  </figure>

                  <footer className="padding-sm">
                    <div className="text-component">
                      <h4><span className="card-v8__title">{intl.formatMessage({ id: "service3" })}</span></h4>
                    </div>
                  </footer>
                </div>
              </li>

              <li className="col-4@md">

                <div href="#0" className="card-v8 bg radius-lg">
                  <figure>
                    <img src="https://iberiainfo.me/wp-content/uploads/2022/02/1-scaled.jpg" alt="Image description" />
                  </figure>

                  <footer className="padding-sm">
                 
                    <div className="text-component">
                      <h4><span className="card-v8__title">{intl.formatMessage({ id: "service4" })}</span></h4>
                    </div>
                  </footer>
                </div>
              </li>
            </ul>
          </div>
        </section>
   
    </MainLayout>
   );
}
 
export default Service;