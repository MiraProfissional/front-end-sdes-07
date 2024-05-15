import P from 'prop-types';
import './styles.css';

export function PopUp(props) {
  const handleButtonFecharOrcamento = () => {
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="btn" onClick={handleButtonFecharOrcamento}>
          Fechar
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default PopUp;

PopUp.propTypes = {
  trigger: P.bool.isRequired,
  setTrigger: P.node.isRequired,
  children: P.node,
};
