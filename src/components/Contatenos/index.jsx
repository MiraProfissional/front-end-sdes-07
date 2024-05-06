import {
  CiPhone,
  CiLocationOn,
  CiMail,
  CiMobile4,
  CiClock2,
} from 'react-icons/ci';
import './styles.css';

export function Contatenos() {
  return (
    <div className="container-contatenos">
      <h3 className="main-title-black">Contate-nos</h3>
      <div className="container-informacoes">
        <div className="informacoes-contato">
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
              <CiLocationOn /> Rua Araguaia, 70 - Vila São Bento, São José dos
              Campos - São Paulo
            </li>
            <li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6251951766358!2d-45.8787412!3d-23.220325999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4aee5c000207%3A0xfd4d793e2010dc9e!2sR.%20Araguaia%2C%2070%20-%20Vila%20Sao%20Bento%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012231-380!5e0!3m2!1spt-BR!2sbr!4v1714580367181!5m2!1spt-BR!2sbr"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da localização da Trakmaq"
              ></iframe>
            </li>
            <li>
              <CiClock2 /> Segunda à Sexta-Feira das 8:30h as 17:30h / Sábado
              das 8:30h às 12h
            </li>
          </ul>
        </div>
        <div className="border"></div>
        <div className="formulario-contato">
          <form action="">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome aqui"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu email aqui"
            />

            <label htmlFor="assunto">Assunto</label>
            <input
              type="text"
              id="assunto"
              name="assunto"
              placeholder="Digite o assunto aqui"
            />

            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              placeholder="Digite sua mensagem aqui"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contatenos;
