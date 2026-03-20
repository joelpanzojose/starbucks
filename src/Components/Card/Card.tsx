import './Card.css';

export function Card(Props: any) {
    return (
        <div className='card'>
            <img className='card-image' src={Props.imagem} alt={Props.titulo} />

            
            <div className="trending-rate">
                <i className="fa fa-star"></i>
            </div>

            <p className='tranding-description'>{Props.nome} <span>{Props.sabor}</span></p>

        </div>
    )
}
export default Card;