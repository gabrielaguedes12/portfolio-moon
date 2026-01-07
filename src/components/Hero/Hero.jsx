import './Hero.scss';
import imagem from '../../img/perfilGabi.png';

export default function Hero(){

    return(
        <>
        <section className='hero'>
            <div className='perfil'>
            <h1 className='nomePerfil'>Gabriela Guedes</h1>
            <img className='perfilGabi' src={imagem} alt="Gabriela Guedes" />
            <p className='descricaoPerfil'>Para você me conhecer melhor, é necessário saber que carrego dois olhares complementares: 
                o profundo da <strong>Fotografia</strong> e o analítico da <strong>Programação</strong>.A fotografia me ensinou a observar detalhes,
                 contextos e histórias; a programação, a estruturar ideias, resolver problemas e transformar conceitos em soluções digitais.</p>
            </div>
        </section>

        <section className='hero_imagem'>
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
