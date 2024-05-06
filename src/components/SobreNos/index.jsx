import './styles.css';
import imagem from '../../utilities/images/rectangle.png';

export function SobreNos() {
  return (
    <div className="sobre-nos-container">
      <div className="sobre-nos-img">
        <img src={imagem} className="background-img" alt="yellow-background" />
        <img
          src="https://th.bing.com/th/id/OIP.KPwLL2a-vw67al0B_rGMQAHaE7?rs=1&amp;pid=ImgDetMain"
          className="team-img"
          alt="team-trakamaq"
        />
      </div>
      <div className="sobre-nos-text">
        <h3 className="main-title-white">Sobre n&oacute;s</h3>
        <div className="container-text">
          <p>
            &lsquo;Sed ut perspiciatis unde omnis iste natus error it voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
            &rsquo;Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
            quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
            minima veniam
          </p>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
