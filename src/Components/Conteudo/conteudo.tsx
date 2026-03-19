import './conteudo.css';
import detail from '../../assets/images/detail.png';

export function Conteudo() {
    return (
        <div className='container'>
            <section id='home' className='section-home'>
                <img className='image-home' src={detail} alt="starbucks " />

                <h1 className='home-title'> Mais que café, uma <span>experiência.</span></h1>

                <p className='home-description'>
                    Descubra cafés icônicos, sabores únicos e a energia perfeita para cada parte do seu dia.
                </p>

                <div className="home-actions">

                    <a href="#" className='btn  btn-default'>Conhecer</a>

                    <a href="#" className='btn btn-outilined'>Contatar</a>
                </div>
            </section>
        </div>
    )
}

export default Conteudo;