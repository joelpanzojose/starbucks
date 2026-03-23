
import './Cardproduto.css';

export function CardProduto(props: any) {
    return (
        <div className="cardproduto">

            <div className="card-boxes">
                <div className="card-part-image">
                    <img className='image' src={props.imagem} alt={props.nome} />
                </div>

                <div className="card-part-info">
                    <div className="title-product-div">
                        <h3 className="cardproduto-name">{props.nome} <span>{props.sabor} </span></h3>
                        <div className="desc-e-pedir">
                            <p className="cardproduto-description">{props.descricao}</p>
                            <div className="pedir">
                                <i className="fas fa-shopping-cart"></i>
                                <p className="pedir-text">Pedir</p>
                            </div>
                        </div>
                    </div>

                    <div className="preco-e-ponto">
                        <p className="cardproduto-price">{props.preco}</p>
                        <i className="fas fa-star"></i>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default CardProduto;