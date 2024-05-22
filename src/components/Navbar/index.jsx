import { Link } from 'react-router-dom';
import logoTrakmaq from '../../utilities/images/logo-claro-trakmaq.png';
import './styles.css';
import {
  CiHome,
  CiUser,
  CiShop,
  CiPhone,
  CiShoppingBasket,
} from 'react-icons/ci';
import { useState } from 'react';
import SideBar from '../SideBar';
import Login from '../Login';

function Navbar() {
  const [buttonSidebar, setButtonSidebar] = useState(false);

  const handleButtonLogin = () => {
    setButtonSidebar(true);
  };

  return (
    <nav className="navbar">
      <div className="div-img">
        <Link to="/">
          <img src={logoTrakmaq} alt="logo-trakmaq" />
        </Link>
      </div>

      <ul className="lista-nav">
        <li className="itens-lista-navbar" data-cy="navbar-link-home">
          <Link to="/">
            <CiHome /> Home
          </Link>
        </li>
        <li className="itens-lista-navbar" data-cy="navbar-link-sobre-nos">
          <Link to="/">
            <CiShop /> Sobre Nós
          </Link>
        </li>
        <li className="itens-lista-navbar" data-cy="navbar-link-contato">
          <Link to="/">
            <CiPhone /> Contato
          </Link>
        </li>
        <li className="itens-lista-navbar" data-cy="navbar-link-produtos">
          <Link to="/produtos">
            <CiShoppingBasket /> Produtos
          </Link>
        </li>
        <li className="itens-lista-navbar" data-cy="navbar-link-login">
          <button className="btn-nav-login" onClick={handleButtonLogin}>
            <CiUser /> Login
          </button>
          <SideBar
            trigger={buttonSidebar}
            titulo={`Login`}
            setTrigger={setButtonSidebar}
          >
            <Login />
          </SideBar>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
