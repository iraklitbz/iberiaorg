import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ContactoForm from "../components/Sections/Contact/Contact";
import Head from 'next/head';
const Contacto = () => {
  return (
    <div>
       <Head>
          <title>Administraciones vesta - contacto</title>
          <meta name="description" content="Contactar con aministraciones vesta" />   

        </Head>
      <Header />
      <ContactoForm />
      <Footer />
    </div>
  );
};

export default Contacto;
