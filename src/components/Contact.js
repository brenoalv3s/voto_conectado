import React from 'react';
import Phone from '../images/phone.png'
import Email from '../images/email.png'
import Info from '../images/question.png'
import Suport from '../images/headphones.png'
import { Link } from 'react-scroll';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Entre em contato</h2>
      <div className="contact-section">
        <div className="contact-box">
          <h3>É cliente Voto Conectado</h3>
          <p>e está precisando de ajuda?</p>
          <div className="contact-item">
            <div className="contact-icon">
              <img src={Info} alt="Central de ajuda" />
            </div>
            <div className="contact-text">
              <h4>Central de ajuda</h4>
              <p>Veja nossos manuais, dicas e tutoriais para te ajudar</p>
            </div>
          </div>
              <Link className="contact-button" to="funcionalidade" smooth={true} duration={500}>Consultar manuais</Link>
          <div className="contact-item">
            <div className="contact-icon">
              <img src={Suport} alt="Suporte" />
            </div>
            <div className="contact-text">
              <h4>Suporte</h4>
              <p>+55 (41) 9247-9270<br />Horário de suporte das 8:20 às 17:45</p>
            </div>
          </div>
        </div>
        <div className="contact-box">
          <h3>Ainda não é cliente</h3>
          <p>Fale com nossa equipe comercial</p>
          <div className="contact-item">
            <div className="contact-icon">
              <img src={Phone} alt="Telefone" />
            </div>
            <div className="contact-text">
              <h4>Telefone</h4>
              <p>+55 (41) 9247-9270<br />Horário comercial das 8:20 às 17:15</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <img src={Email} alt="Email" />
            </div>
            <div className="contact-text">
              <h4>Email</h4>
              <p>comercial@votoconectado.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
