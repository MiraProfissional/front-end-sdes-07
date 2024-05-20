import P from 'prop-types';
import './styles.css';
import { CiCircleRemove } from 'react-icons/ci';

export function SideBar(props) {
  const handleButtonFecharLogin = () => {
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="sidebar">
      <div className="sidebar-inner">
        <button className="btn-sidebar" onClick={handleButtonFecharLogin}>
          <CiCircleRemove size={30} />
        </button>
        <h3 className="main-title-black">{props.titulo}</h3>
        <div className="sidebar-content">{props.children}</div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default SideBar;

SideBar.propTypes = {
  trigger: P.bool.isRequired,
  titulo: P.string,
  setTrigger: P.node.isRequired,
  children: P.node,
};
