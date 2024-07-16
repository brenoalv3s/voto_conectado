import React from 'react';
import '../styles/PlansAndPrices.css';

const PlansAndPricing = () => {
  return (
    <div className="plans-and-pricing">
      <h2 className='titulo'>Cresça nas eleições <br />com o <span class="highlight">melhor investimento!</span></h2>
      <p className='subtitulo'>Faça um teste grátis enviando mensagem para 20 dos seus eleitores</p>

      <div className="pricing-table">
        <div className="pricing-card">
          <h3>Bronze</h3>
          <p>Envie mensagens pontuais para eleitores especificos</p>
          <p className='preco'>R$50/mês</p>
          <button className="btn btn-primary">Comece grátis</button>

          <ul className="features">
            
            <li>Mensagens enviadas <b>1x por semana</b></li>
            <li>Envio em Massa: Envie mensagens para <b>200 contatos</b> simultaneamente.</li>
            <li>Entrega Instantânea: Alcance seus eleitores em tempo real com mensagens instantâneas.</li>
            <li>Automação de Mensagens: Programe envios automáticos para horários específicos e eventos.</li>
            <li>Suporte Multimídia: Envie textos, imagens, vídeos, documentos e links através de uma única plataforma.</li>
            <li>Suporte ao Cliente: Equipe de suporte dedicada para ajudar com qualquer dúvida ou problema.</li>
          </ul>
        </div>

        <div className="pricing-card-popular">
          <h3>Prata</h3>
          <span className="tag-popular">Popular</span>
          <p>Envie mensagens para um grupo selecionado de eleitores</p>
          <p className='preco-popular'>R$150/mês</p>
          <button className="pricing-card-popular-btn">Comece grátis</button>

          <ul className="features">
            <li>Mensagens enviadas <b>2x por semana</b></li>
            <li>Envio em Massa: Envie mensagens para <b>600 contatos</b> simultaneamente.</li>
            <li>Entrega Instantânea: Alcance seus eleitores em tempo real com mensagens instantâneas.</li>
            <li>Automação de Mensagens: Programe envios automáticos para horários específicos e eventos.</li>
            <li>Suporte Multimídia: Envie textos, imagens, vídeos, documentos e links através de uma única plataforma.</li>
            <li>Suporte ao Cliente: Equipe de suporte dedicada para ajudar com qualquer dúvida ou problema.</li>
          </ul>
        </div>

        <div className="pricing-card pricing-card">
          <h3>Ouro</h3>
          <p>Envie mensagens para um grupo maior de eleitores</p>
          <p className='preco'>R$250/mês</p>
          <button className="btn btn-primary">Comece grátis</button>

          <ul className="features">
            
            <li>Mensagens enviadas <b>3x por semana</b></li>
            <li>Envio em Massa: Envie mensagens para <b>1000 contatos</b> simultaneamente.</li>
            <li>Entrega Instantânea: Alcance seus eleitores em tempo real com mensagens instantâneas.</li>
            <li>Automação de Mensagens: Programe envios automáticos para horários específicos e eventos.</li>
            <li>Suporte Multimídia: Envie textos, imagens, vídeos, documentos e links através de uma única plataforma.</li>
            <li>Suporte ao Cliente: Equipe de suporte dedicada para ajudar com qualquer dúvida ou problema.</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h3>Diamante</h3>
          <p>Mantenha seus eleitores diariamente informados</p>
          <p className='preco'>R$500/mês</p>
          <button className="btn btn-primary">Comece grátis</button>

          <ul className="features">
            
            <li>Mensagens enviadas <b>diariamente</b></li>
            <li>Envio em Massa: Envie <b>mensagens ilimitadas</b> de forma simultanea.</li>
            <li>Entrega Instantânea: Alcance seus eleitores em tempo real com mensagens instantâneas.</li>
            <li>Automação de Mensagens: Programe envios automáticos para horários específicos e eventos.</li>
            <li>Suporte Multimídia: Envie textos, imagens, vídeos, documentos e links através de uma única plataforma.</li>
            <li>Suporte ao Cliente: Equipe de suporte dedicada para ajudar com qualquer dúvida ou problema.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PlansAndPricing;
