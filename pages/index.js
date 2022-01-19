import Header from "../components/Header/Header"
import Hero from "../components/Header/Hero/Hero" 
import Section_1 from "../components/Sections/Section_1/Section_1"
import Section_2 from "../components/Sections/Section_2/Section_2"
import Section_3 from "../components/Sections/Section_3/Section_3"
import Footer from "../components/Footer/Footer";
import Head from 'next/head';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Administraciones vesta</title>
        <meta name="description" content="Administración de Fincas e Inmuebles en Palma de Mallorca." />   
      </Head>
      <Header />
      <Hero />
      <Section_2 />
      <Section_1 />
      <Section_3 />
      <Footer />
    </div>
  )
}
