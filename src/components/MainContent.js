import React from 'react';
import { Link, Element } from 'react-scroll';
import '../styles/MainContent.css';
import PlansAndPricing from './PlansAndPrices.js';
import Functions from './Functions.js'
// import Contact from './Contact.js'

// Importar a imagem do banner
import banner from '../images/banner_voto_conectado.png';

const MainContent = () => {
  return (
      <main className="main-content">
      <section className="hero">
        <div className="hero-image">
          <img src={banner} alt="Voto conectado" />
          <div className="hero-text-overlay">
            <h1>Voto Conectado é a ferramenta de envio instantâneo de mensagens.</h1>
            <p>O Voto Conectado é a solução ideal para candidatos,<br/> 
                permitindo o envio de mensagens instantâneas e em massa<br/> para eleitores via WhatsApp,
                <br/>facilitando a comunicação direta<br/>
                e eficiente durante a campanha eleitoral.</p>
            <br/>
            <Link className="cta-button-hero" to="funcionalidade" smooth={true} duration={500}>Saiba mais</Link>
          </div>
        </div>
      </section>
      <Element name="funcionalidade" className="plans-and-pricing" id="funcionalidade">
        <Functions />
      </Element>
      <Element name="precos" className="plans-and-pricing" id="planos">
        <PlansAndPricing />
      </Element>
      {/* <Element name="contato" className="plans-and-pricing" id="contato">
        <Contact />
      </Element> */}
    </main>
  );
};

export default MainContent;
