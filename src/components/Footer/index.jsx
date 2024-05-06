import { Link } from 'react-router-dom';
import logoTrakmaq from '../../utilities/images/logo-claro-trakmaq.png';
import {
  CiHome,
  CiUser,
  CiShop,
  CiPhone,
  CiShoppingBasket,
  CiLocationOn,
  CiMail,
  CiMobile4,
  CiClock2,
  CiInstagram,
  CiFacebook,
} from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa';
import './styles.css';

export function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="container-footer-conteudo">
          <div className="div-img">
            <Link to="/">
              <img src={logoTrakmaq} alt="logo-trakmaq" />
            </Link>
          </div>
          <div>
            <h4 className="main-title-white">Páginas</h4>
            <ul>
              <li>
                <Link to="/">
                  <CiHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiShop /> Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiPhone /> Contato
                </Link>
              </li>
              <li>
                <Link to="/produtos">
                  <CiShoppingBasket /> Produtos
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <CiUser /> Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="div-contato-footer">
            <h4 className="main-title-white">Contato</h4>
            <ul>
              <li>
                <CiPhone /> (12) 3942-3300
              </li>
              <li>
                <CiMobile4 /> (12) 99783-3901
              </li>
              <li>
                <CiMail /> vendas@traqmak.com.br
              </li>
              <li>
                <CiLocationOn /> Rua Araguaia, 70 - Vila São Bento São José dos
                Campos - São Paulo
              </li>
              <li>
                <CiClock2 /> Segunda à Sexta-Feira das 8:30h as 17:30h Sábado
                das 8:30h às 12h
              </li>
            </ul>
          </div>
          <div>
            <h4 className="main-title-white">Redes Sociais</h4>
            <ul>
              <li>
                <a
                  href="https://pt-br.facebook.com/trakmaq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiFacebook /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/trakmaq/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CiInstagram /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=5512997833901"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> Whatsapp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sepador-copyright"></div>
        <div className="copyright">
          <p>
            &copy;{' '}
            <a href="https://www.linkedin.com/in/jvitor-gmira/">
              Joao Vitor Mira
            </a>{' '}
            e <a href="https://github.com/NixonMSilva">Nixon Silva</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
