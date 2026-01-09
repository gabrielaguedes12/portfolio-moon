import './Hero.scss';
import imagem from '../../img/perfil gabi.png';

export default function Hero() {
  const GitHub = () => {
    window.open('https://github.com/gabrielaguedes12', '_blank');
  };

  return (
    <section className="hero">

      <div className="hero_perfil">
        <div className="perfilTexto">
          <h1 className="nomePerfil">Desenvolvedora Full-Stack</h1>
          <h1 className="nomePerfil destaque">Gabriela Guedes</h1>

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

      <div className="hero_imagem">
        <div className="perfilImagem">
          <img className="perfilGabi" src={imagem} alt="Gabriela Guedes" />
        </div>

        <div className="descricaoTexto">
          <p className="descricaoPerfil">
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
