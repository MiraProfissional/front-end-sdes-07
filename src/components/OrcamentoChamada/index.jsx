import './styles.css';
import image from '../../utilities/images/jcb.jpg';
import { Parallax } from 'react-parallax';
import PopUp from '../PopUp';
import FormularioOrcamento from '../FormularioOrcamento';
import { useState } from 'react';

export function OrcamentoChamada() {
  const [buttonPopUp, setButtonPopUp] = useState(false);

  const handleButtonOrcamento = () => {
    setButtonPopUp(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={image}
      bgImageAlt="trator-jcb"
      strength={-400}
      style={{
        height: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      bgImageStyle={{
        opacity: 0.3,
        objectFit: 'cover', // Para garantir que a imagem cubra todo o espaço disponível
      }}
    >
      <div className="orcamento-chamada">
        <h3 className="main-title-black">Orçamento</h3>
        <p>
          Não está achando a peça que precisa em nenhum lugar? Nós podemos te
          ajudar!
        </p>
        <button className="btn" onClick={handleButtonOrcamento}>
          Fazer orçamento!
        </button>
      </div>
      <PopUp
        trigger={buttonPopUp}
        titulo={`Orçamento`}
        setTrigger={setButtonPopUp}
      >
        <FormularioOrcamento />
      </PopUp>
    </Parallax>
  );
}

export default OrcamentoChamada;
