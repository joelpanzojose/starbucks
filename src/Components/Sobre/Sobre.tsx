import './Sobre.css';
import aboutUs from "../../assets/images/about/about-us.png"


export function Sobre() {
    return (

        <div className="about">

            <div className='container-sobre'>

                <h2 className='title title-about'>Sobre nós</h2>
                <div className="about-content">
                    <img className='about-image' src={aboutUs} alt="Sobre a empresa" />

                    <div className="about-info">
                        <h3>Nossa <span> história</span></h3>
                        <p>Desde o início, nossa paixão pelo café nos inspira a oferecer experiências únicas em casa xicara. Com <span>grãos selecionados</span> e preparo artesanal, buscamos uni qualidade, sabor e acolhimento em um só lugar. Aqui, cada detalhe é pensado para transformar o seu momento de café em algo especial.</p>
                    </div>
                    <div className="about-info">
                        <h3>Nosso <span> propósito</span></h3>
                        <p>Desde o início, nossa paixão pelo café nos inspira a oferecer experiências únicas em casa xicara. Com <span>grãos selecionados</span> e preparo artesanal, buscamos uni qualidade, sabor e acolhimento em um só lugar. Aqui, cada detalhe é pensado para transformar o seu momento de café em algo especial.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Sobre;