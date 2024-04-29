import './styles.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { register } from 'swiper/element/bundle'
import imageRetroEscavadeira from '../../utilities/images/retro-escavadeira.jpg'



function Carrousel() {

    const imagesCarrousel = [
        {id: 1, src: "https://en.lbxco.com/wp-content/uploads/2022/04/Link-Belt-355-X4S-Introduced.jpg", alt: "link-belt-excavator"},
        {id: 2, src: "https://www.baumaschinen-mueller.de/sites/default/files/2020-07/Wacker_Neuson_ET18_472h_04.JPG", alt: "wacker-neuson"},
        {id: 3, src: imageRetroEscavadeira, alt: "retro-escavadeira"},
    ];

    useEffect(() => {
        register()
    },[])

    return (
        <div className='container-carrousel'>
            <div className='slide-title'>
                <h2 className='main-title-black'>Trakmaq, sua solução!</h2>
                <p>Procurado peças raras para sua máquina? Confira agora mesmo nossos produtos</p>
                <Link to="/produtos"><button className='btn'>Conferir</button></Link>
            </div>
            <div className='slide-animation'>
            <Swiper
                slidesPerView={1}
                pagination={true}
                autoplay={{ delay: 4000 }}
                loop={true}
                >
                    {imagesCarrousel.map((image) => (
                        <SwiperSlide key={image.id}>
                            <img src={image.src} alt={image.alt} className='images-carrousel' />
                        </SwiperSlide>
                    ))}
            </Swiper>
            </div>
        </div>
    );
}

export default Carrousel;