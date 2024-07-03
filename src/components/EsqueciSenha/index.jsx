import FormularioEsqueciSenha from '../FormularioEsqueciSenha';
import './styles.css';
import { useState } from 'react';

export function EsqueciSenha() {
  const [click, setClick] = useState(false);

  const handlerEsqueciSenha = () => {
    setClick(true);
  };

  return (
    <div>
      <p className="paragrafo-esqueci-senha" onClick={handlerEsqueciSenha}>
        Esqueci minha senha
      </p>
      <div style={{ visibility: click ? 'visible' : 'hidden' }}>
        <FormularioEsqueciSenha />
      </div>
    </div>
  );
}

export default EsqueciSenha;
