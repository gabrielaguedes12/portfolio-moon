import './Hero.scss';
import imagem from '../../img/perfilGabi.png';

export default function Hero() {

    return (
        <>
            <section className='hero'>
                <div className='perfil'>
                    <h1 className='nomePerfil'>Desenvolvedora Full-Stack</h1> 
                    <h1 className='nomePerfil'>Gabriela Guedes</h1>

                    <img className='perfilGabi' src={imagem} alt="Gabriela Guedes" />

                    <p className='descricaoPerfil'>Para você me conhecer melhor, é necessário saber que carrego dois olhares complementares:
                        o profundo da <strong>Fotografia</strong> e o analítico da <strong>Programação</strong>. A fotografia me ensinou a observar detalhes,
                        contextos e histórias; a programação, a estruturar ideias, resolver problemas e transformar conceitos em soluções digitais.
                    </p>
                </div>

            
            <section className='hero_button'>
                <div>
                    <button>Currículo</button>
                    <button>GitHub</button>
                </div>
            </section>
            </section>
        </>
    );
}
