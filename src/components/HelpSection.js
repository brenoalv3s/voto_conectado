import React from 'react';
import Mail from '../images/mail.png'
import Notice from '../images/caution.png'
import Friends from '../images/friends.png'
import video from '../images/video_voto_conectado_tutorial.mp4'
import Apresentation from './ApresentationVideo.js'
import '../styles/HelpSection.css';

const HelpSection = () => {
    return (
        <div className="help-section">
            <h1 className='title'>Veja como o Voto Conectado te ajuda</h1><br />
            <div className="cards-container">
                <div className="card">
                    <div className="card-icon">
                        <img src={Mail} alt="Icon 1" />
                    </div>
                    <h3>Praticidade para enviar mensagens em massa</h3>
                    <p>
                        Através do Voto Conectado é possível é possível enviar mensagem em lote com apenas alguns cliques. Dessa forma, os seus eleitores poderão ser atualizados sobre a sua campanha, além do que, com o Voto Conectado, você evita estar encaminhando a cada 5 mensagens pelo WhatsApp.
                    </p>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={Notice} alt="Icon 2" />
                    </div>
                    <h3>Atualização da campanha em tempo real</h3>
                    <p>
                        Com o Voto Conectado, você pode acompanhar a evolução de sua campanha eleitoral em tempo real, garantindo que todos os seus eleitores sejam informados. Nossa plataforma oferece ferramentas avançadas para compartilhamento contínuo, permitindo que você mantenha a informação sobre sua campanha nas mãos dos seus eleitores.
                    </p>
                </div>
                <div className="card">
                    <div className="card-icon">
                        <img src={Friends} alt="Icon 3" />
                    </div>
                    <h3>Mais Próximo dos Seus Eleitores com o Voto Conectado</h3>
                    <p>
                        Na era digital, a proximidade com os eleitores nunca foi tão essencial para o sucesso de uma campanha eleitoral. Com uma população cada vez mais conectada, é fundamental utilizar as ferramentas certas para alcançar e engajar seus eleitores de maneira eficaz. O Voto Conectado é a solução ideal para estabelecer essa conexão, aproveitando o poder do WhatsApp, a plataforma de comunicação mais popular do Brasil.
                    </p>
                </div>
            </div>
            <div className="extra-info">
                <h2>E muito mais:</h2>
                <h3>Veja como a ferramenta Voto Conectado funciona</h3>
                <p>
                    Com o Voto Conectado, é possível enviar qualquer tipo de mensagem via WhatsApp para seus eleitores. Dessa forma, as informações de sua campanha chegam de forma rápida e prática. Envie mensagens contendo imagens, vídeos, documentos e até mesmo áudios, tudo isso para manter você conectado aos seus eleitores.
                </p>
                <div className='video-container'>
                    <Apresentation video={video} />
                </div>
            </div>
        </div>
    );
};

export default HelpSection;
