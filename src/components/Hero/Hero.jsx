import './Hero.scss';
import imagem from '../../img/perfilGabi.JPG';

export default function Hero(){

    return(
        <>
        <section className='hero'>
            <div className='perfil'>
            <h1>Gabriela Guedes</h1>
            <img className='perfilGabi' src={imagem} alt="Gabriela Guedes" />
            <p>Descrição sobre mim</p>
            </div>
        </section>

        <section className='hero2'>
        <div className='imgMaior'>
            <img className='imgProgramacao' src="https://images.pexels.com/photos/16592498/pexels-photo-16592498.jpeg" alt="Programação" />
        </div>

        <button>Currículo</button>
        <button>GitHub</button>

        <div className='imgMenor'>
            <img className='imgFotografia' src="https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg" alt="Fotografia" />
        </div>
        </section>
        </>
    );
}
