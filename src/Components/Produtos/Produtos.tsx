import './Produtos.css';
import card1 from "../../assets/images/products/1.png"
import card2 from "../../assets/images/products/2.png"
import card3 from "../../assets/images/products/3.png"

import { CardProduto } from './CardProduto/cardproduto';


export function Produtos() {
    return (
        <section id="produtos" className="produtos">
            <h2 className="title title-products">Novidades</h2>

            <div className="container-produtos">

                <div className="produto-card p1">
                    <CardProduto
                        imagem={card1}
                        nome="Gelado de "
                        sabor="Chocolate"
                        descricao="Delicioso gelado de chocolate com leite e calda de chocolate."
                        preco="Kz 1.500,00"
                    />
                </div>
                <div className="produto-card p1">
                    <CardProduto
                        imagem={card2}
                        nome="Gelado de "
                        sabor="Chocolate"
                        descricao="Delicioso gelado de chocolate com leite e calda de chocolate."
                        preco="Kz 1.500,00"
                    />
                </div>
                <div className="produto-card p1">
                    <CardProduto
                        imagem={card3}
                        nome="Gelado de "
                        sabor="Chocolate"
                        descricao="Delicioso gelado de chocolate com leite e calda de chocolate."
                        preco="Kz 1.500,00"
                    />
                </div>

            </div>



        </section>
    )
}

export default Produtos;