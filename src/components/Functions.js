import React from 'react';
import bannerFunc from '../images/servicos.png';
import video from '../images/video_voto_conectado.mp4'
import Apresentation from './ApresentationVideo.js'
import HelpSection from './HelpSection.js';
import '../styles/Functions.css';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <MainContent />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header-func">
      <h1 className='header-func-title'>Vem ver como <span class="highlight">Voto Conectado é prático</span> para você, candidato!</h1>
      <p className='header-func-p'>Conheça mais o Voto Conectado clicando e assistindo o vídeo abaixo</p>
      <img className='header-image' src={bannerFunc} alt="Voto conectado" />
      <div className='header-video-container'>
        <Apresentation video={video} />
      </div>
    </header>
  );
};

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="hero">
        <HelpSection />
      </section>
    </main>
  );
};


export default Layout;
