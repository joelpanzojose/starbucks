import React from "react";
import './Header.css'
import logo from '../../assets/images/logo-starbucks.png';

export function Header () {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    return (
        <header className="header">
           
            <nav className="navbar">
                <img className="logo" src={logo} alt="Logo" />

                 {/* Botão Menu */}
             <button className="menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="fas fa-bars"></i>
             </button>
             {/* Botão Menu */}

                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/em-alta">Em Alta</a></li>
                    <li><a href="/sobre">Sobre nós</a></li>
                    <li><a href="/novidades">Novidades</a></li>
                </ul>

            </nav>
            
        <a href="mailto:joelpanzojose835@gmail.com" className="btn btn-default">
            Contato
        </a>
        </header>
    )
}

export default Header;