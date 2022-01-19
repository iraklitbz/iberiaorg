import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Section_4 from "../components/Sections/Section_4/Section_4";
import Section_5 from "../components/Sections/Section_5/Section_5";
import Head from 'next/head';
const Servicios = () => {
  return ( 
    <div>
       <Head>
          <title>Administraciones vesta - servicios</title>
          <meta name="description" content="Como empresa administradora que somos, ofrecemos una amplia gama de servicios, como administración de fincas, gestión de alquileres, gestión externa de seguros y trámites administrativos " />            
        </Head>
      <Header />
      <Section_4 />
      <Section_5 />
      <Footer />
    </div>
   );
}
 
export default Servicios;