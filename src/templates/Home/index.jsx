import Carrousel from '../../components/Carrousel';
import OrcamentoChamada from '../../components/OrcamentoChamada';
import SobreNos from '../../components/SobreNos';
import './styles.css';

function Home() {
  return (
    <div className="Home">
        <Carrousel/> 
        <SobreNos/>
        <OrcamentoChamada/>
    </div>
  );
}

export default Home;
