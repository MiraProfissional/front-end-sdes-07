import { Link } from 'react-router-dom'
import imagem from '../../images/logo-claro-trakmaq.png'
import './styles.css'
import { CiHome, CiUser, CiShop, CiPhone, CiShoppingBasket } from "react-icons/ci";


function Navbar() {
    return (
        <nav className='navbar'>
            <div className='div-img'>
            <Link to="/">
                <img src={imagem} alt="logo-trakmaq" /> 
            </Link> 
            </div>
                
            <ul className='lista-nav'>
                <li>
                    <Link to="/"><CiHome/> Home</Link>
                </li>
                <li>
                    <Link to="/"><CiShop/> Sobre Nós</Link>
                </li>
                <li>
                    <Link to="/"><CiPhone/> Contato</Link>
                </li>
                <li>
                    <Link to="/produtos"><CiShoppingBasket/> Produtos</Link>
                </li>
                <li>
                    <Link to="/login"><CiUser/> Login</Link>
                </li>
            </ul>
    
        </nav>
    )
}

export default Navbar;