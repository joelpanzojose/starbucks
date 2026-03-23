import Card from '../Card/Card';
import card1 from "../../assets/images/trending/card1.png"
import card2 from "../../assets/images/trending/card2.png"
import card3 from "../../assets/images/trending/card3.png"
import './Trending.css';
export function Trending() {
    return (
        <div className='container-trending'>
            <h2 className='trending-title title'>Em Alta</h2>

            <div className="trending-cards">
                <Card
                    imagem={card1}
                    nome="Café Latte"
                    sabor="Café"
                />
                <Card
                    imagem={card2}
                    nome="Mocha"
                    sabor="Pistache"
                />
                <Card
                    imagem={card3}
                    nome="Gelado"
                    sabor="Morango"
                />
            </div>
            
        </div>
    )
}
export default Trending;