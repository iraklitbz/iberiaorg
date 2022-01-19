import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Section_6 from "../components/Sections/Section_6/Section_6";
import Section_7 from "../components/Sections/Section_7/Section_7";
import Head from 'next/head';
const Empresa = () => {
  return ( 
    <div>
       <Head>
          <title>Administraciones vesta - sobre nosotros</title>
          <meta name="description" content="Administraciones Vesta es una empresa dedicada a la administración de fincas y gestión de la propiedad, en Palma de Mallorca." />   
        </Head>
      <Header />
      <Section_6 />
      <Section_7 />
      <Footer />
    </div>
   );
}
 
export default Empresa;