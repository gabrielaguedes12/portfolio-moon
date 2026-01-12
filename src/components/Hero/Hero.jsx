import './Hero.scss';
import imagem from '../../img/perfil gabi.png';

export default function Hero() {
  const GitHub = () => {
    window.open('https://github.com/gabrielaguedes12', '_blank');
  };

  return (
    <section className="hero">
      {/* div para o perfil geral*/}
      <div className="hero_profile">
        <div className="hero_text">

          {/*frases de perfil*/}
          <h1 className="name_profile">Desenvolvedora Full-Stack</h1>
          <h1 className="name_profile">Gabriela Guedes</h1>

          {/*div botão*/}
          <div className="hero_button">
            <button>
              <a
                href="/curriculo/Gabriela_Guedes_Curriculo.pdf"
                download="Gabriela_Guedes_Curriculo"
              >
                Currículo
              </a>
            </button>
            <button onClick={GitHub}>GitHub</button>
          </div>
        </div>
      </div>

      {/* div da direita, imagem e descrição */}
      <div className="hero_image">
        <div className="image_profile">
          <img className="profile_gabi" src={imagem} alt="Gabriela Guedes" />
        </div>

        <div className="description_text">
          <p className="description_profile">
            Para você me conhecer melhor, é necessário saber que carrego dois
            olhares complementares: o profundo da <strong>Fotografia</strong> e o
            analítico da <strong>Programação</strong>. A fotografia me ensinou a
            observar detalhes, contextos e histórias; a programação, a estruturar
            ideias, resolver problemas e transformar conceitos em soluções
            digitais.
          </p>
        </div>
      </div>
    </section>
  );
}
