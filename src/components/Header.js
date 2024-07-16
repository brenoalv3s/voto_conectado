import React from 'react';
import { Link } from 'react-scroll';
import '../styles/Header.css';

// imagens
import logo from '../images/voto_conectado-logo.png';

const Header = () => {
    return (
        <header className="header">
            <Link to="#" smooth={true} duration={500} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div classe="logo-container">
                    <img className="logo-img" src={logo} alt="Voto conectado" />
                    <span className='logo'>voto conectado</span>
                </div>
            </Link>
            <nav className='menu'>
                <Link to="funcionalidade" smooth={true} duration={500}>Funcionalidades</Link>
                <Link to="precos" smooth={true} duration={500}>Planos e preços</Link>
                {/* <Link to="contato" smooth={true} duration={500}>Fale conosco</Link> */}
                <Link to="precos" className="experiment" smooth={true} duration={500}>experimente grátis</Link>
            </nav>
        </header>
    );
};

export default Header;
