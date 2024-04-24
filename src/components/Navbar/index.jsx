import { Link } from 'react-router-dom'
import imagem from '../../images/logo-claro-trakmaq.png'
import './styles.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <Link to="/">
                    <img src={imagem} alt="logo-trakmaq" /> 
                </Link>
                <ul className='lista-nav'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>
                        <Link to="/produtos">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;