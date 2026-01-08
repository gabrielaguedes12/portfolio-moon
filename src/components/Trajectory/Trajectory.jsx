import './Trajectory.scss';

export default function Trajectory() {
    return (
        <section className='Trajectory'>
            <h1 className='titulo'>Trajetória</h1>
            <div className='academico'>
                <h1 className='titulo_card'>Acâdemico</h1>
                <p className='descricao_card'>descrição sobre ambiente academico</p>
                <div className='cardAcademico'>
                    <div className='ensinoMedio'>
                        <h3 className='titulo_escolar'>Ensino Médio Técnico</h3>
                        <p>No Colégio Pedro II em Administração</p>
                    </div>
                    <div className='faculdadeInfnet'>
                        <h3 className='titulo_escolar'>Faculdade de Análise e Desenvolvimento de Sistemas</h3>
                        <p>Comecei minha trajetória acâdemica com o metódo do <strong>Instituto Infnet</strong>, com teoria e prática constante</p>
                    </div>
                    <div className='faculdadeUnisuam'>
                        <h3 className='titulo_escolar'>Faculdade de Sistemas de Informação</h3>
                        <p>Entrei na Faculdade de bacharelado com conteúdo sólido.</p>
                    </div>
                </div>
            </div>

            <div className='trabalho'>
                <h1 className='titulo_card'>Profissional</h1>
                <p className='descricao_card'>descrição sobre ambiente profissional</p>
                <div className='cardProfissional'>
                    <div className='emgepron'>
                        <h3 className='titulo_profissional'>Jovem Aprendiz na equipe de TI</h3>
                        <p>Pude conhecer diversas areas dentro da TI, como Governança, Redes, Desenvolvimento e Suporte</p>
                    </div>
                    <div className='ntlTecnologia'>
                        <h3 className='titulo_profissional'>Jovem Aprendiz em Desenvolvimento</h3>
                        <p>Tive oportunidade de colocar em prática meus conhecimentos de HTML, Javascript, PHP e SQLServer</p>
                    </div>
                    <div className='cieds'>
                        <h3 className='titulo_profissional'>Estágiaria de Avaliação e Monitoramento de Dados</h3>
                        <p>Monitoramento e análise de dados em projetos sociais</p>
                    </div>

                </div>
            </div>
        </section>
    )
}