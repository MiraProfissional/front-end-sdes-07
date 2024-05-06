import Carrousel from '../../components/Carrousel';
import Contatenos from '../../components/Contatenos';
import OrcamentoChamada from '../../components/OrcamentoChamada';
import SobreNos from '../../components/SobreNos';
import './styles.css';

function Home() {
  return (
    <div className="Home">
      <Carrousel />
      <SobreNos />
      <OrcamentoChamada />
      <Contatenos />
    </div>
  );
}

export default Home;
