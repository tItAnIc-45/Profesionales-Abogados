import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import LaFirma from './components/LaFirma/LaFirma';
import Practicas from './components/Practicas/Practicas';
import Equipo from './components/Equipo/Equipo';
import Cotizador from './components/Cotizador/Cotizador';
import Contacto from './components/Contacto/Contacto';
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat';
import ReadmeModal from './components/ReadmeModal/ReadmeModal';
import Footer from './components/Footer/Footer';
import Legal from './components/Legal/Legal';
import Perfil from './components/Perfil/Perfil';
import ScrollTop from './components/ScrollTop/ScrollTop';
import './scripts/main.js';
import './scripts/calculator.js';
/* PREUEBA DE EQUIPOOOOOO
holaaaaaaaaaaaaaaa*/
export default function App() {
  useEffect(() => {
    document.documentElement.lang = 'es';
    document.documentElement.dataset.theme ||= 'dark';
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <LaFirma />
      <Practicas />
      <Equipo />
      <Cotizador />
      <Contacto />
      <WhatsappFloat />
      <ReadmeModal />
      <Footer />
      <Legal />
      <Perfil />
      <ScrollTop />
    </>
  );
}
