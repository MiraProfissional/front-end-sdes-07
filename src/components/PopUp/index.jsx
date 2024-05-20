import P from 'prop-types';
import './styles.css';
import { CiCircleRemove } from 'react-icons/ci';

export function PopUp(props) {
  const handleButtonFecharOrcamento = () => {
    props.setTrigger(false);
    document.body.style.overflow = 'auto';
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="btn-popup" onClick={handleButtonFecharOrcamento}>
          <CiCircleRemove size={30} />
        </button>
        <h3 className="main-title-black">{props.titulo}</h3>
        <div className="popup-content">{props.children}</div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default PopUp;

PopUp.propTypes = {
  trigger: P.bool.isRequired,
  titulo: P.string,
  setTrigger: P.node.isRequired,
  children: P.node,
};
