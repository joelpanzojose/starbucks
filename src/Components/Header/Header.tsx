import React from "react";
import './Header.css'
import logo from '../../assets/images/logo-starbucks.png';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <header className="header">

            <nav className="navbar">
                <img className="logo" src={logo} alt="Logo" />

                {/* Botão Menu */}
                <button className="btn btn-mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fas fa-bars"></i>
                </button>
                {/* Botão Menu */}

                <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#em-alta">Em Alta</a></li>
                    <li><a href="#sobre">Sobre nós</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                </ul>


                <a href="mailto:joelpanzojose835@gmail.com" className="btn btn-default btn-desktop-contatar">
                    Contato
                </a>
            </nav>


        </header>
    )
}

export default Header;