import './Header.scss';
import { FaComputer } from "react-icons/fa6";

export default function Header() {
    return (
        <header className='header'>
            <div className='header_icon'>
                <FaComputer />
            </div>

            <nav className="header__menu">
                <a href="#sobre">Sobre Mim</a>
                <a href="#trajetoria">Trajetória</a>
                <a href="#skills">Skills</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </nav>

        </header>
    );
}