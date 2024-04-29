import './styles.css';
import imagem from '../../utilities/images/rectangle.png';

export function SobreNos () {
    return (
        <div className='sobre-nos-container'>
            <div className='sobre-nos-img'>
                <img src={imagem} className='background-img' alt="" />
                <img src="https://th.bing.com/th/id/OIP.KPwLL2a-vw67al0B_rGMQAHaE7?rs=1&pid=ImgDetMain" 
                className='team-img'
                alt="" />
            </div>
            <div className='sobre-nos-text'>
                <h3 className='main-title-white'>Sobre nós</h3>
                <div className='container-text'>
                    <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
                    </p>
                </div>
            </div>
        </div>
    )
};

export default SobreNos;