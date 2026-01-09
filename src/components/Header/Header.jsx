import './Header.scss';
import { FaComputer } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='header'>
            <div className='header_icon'>
                <FaComputer />
            </div>

            <nav className={`header_menu ${menuOpen ? 'open' : ''}`}>
                <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre Mim</a>
                <a href="#trajetoria" onClick={() => setMenuOpen(false)}>Trajetória</a>
                <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                <a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a>
                <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
            </nav>

            <button
                className='header_hamburger' onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Abrir menu"
            >
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>
        </header >
    );
}