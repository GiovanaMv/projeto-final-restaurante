import styled from "styled-components";
import { Link } from "react-router-dom";
import PratoMacarrao from '../assets/prato1-macarrao.png';
import PratoSushi from '../assets/parto2-sushi.png';
import PizzaIndividual from '../assets/prato3-pizza.png';
import { Header } from "../components/Header";

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 52px;
    margin-bottom: 52px;
    margin-left: 120px;
    justify-content: center; 
    gap: 32px;
`;
const Card = styled.div`
    position: relative;
    border-radius: 3px;
    color: #E66767;
    max-width:472px;
    height: 400px;
        
    img {
        width: 472px;
        height: 217px;
        background-size: cover;
        background-position: center;
        object-fit: cover;
    }
    .layout {
    display: block;
    margin-left: 0px;
    margin-top: 0px;
    height: 176px;
    border: 1px solid #E66767;
    border-top: none;
    background-color: #FFFFFF;
    }
    .label {
        position: absolute;
        right: 10px;
        background-color:  #E66767;
        color: white;
        padding: 4px 8px;
        font-size: 12px;
        letter-spacing: 1px;
        margin-top: 12px;
    }
    p {
        width: 420px;
        text-align: start;
        margin-left: 6px;
        margin-bottom: 0px;
        font-size: 14px;
        line-height: 22px;
    }
    button {
        background-color:#E66767;
        border: none;
        color:  #FFEBD9;
        padding: 3px;
        font-family: Roboto;
        margin-left: 6px;
        margin-top: 8px;
    }
    div {
        display: flex;
        margin-left: 6px;
        gap: 318px; 
    h3 {
        font-size: 18px;    
        font-weight: 700;
        margin-top: 12px;
    }
    span {
    margin-top: 12px;
    }
}
.destaques {
    position: absolute;
    right: 10px;
    display: flex;
    color: white;
    font-size: 12px;
    letter-spacing: 1px;
    margin-top: 12px;
    gap: 12px;

    .destaque, .first {
    background-color:  #E66767;
    padding: 4px 8px;
    }
}
`;

export function Home() {
    return (
       <>
        <Header />
        <Section>
            <Card>
                <div className="destaques">
                    <div className="destaque">Destaque da semana</div>
                    <div className="first">Japonesa</div>
                </div>
                    <img src={PratoSushi} alt="Prato de Sushi" />
                <div className="layout">
                    <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
                </div>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                    <img src={PizzaIndividual} alt="Pizza Individuais" />
                <div className="layout">
                    <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
                </div>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                    <img src={PratoMacarrao} alt="Prato de Sushi" />
                <div className="layout">
                    <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
                </div>
            </Card>
            <Card>
                <div className="label">Italiana</div>
                    <img src={PratoSushi} alt="Prato de Sushi" />
                <div className="layout">
                    <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
                </div>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                    <img src={PizzaIndividual} alt="Pizza Individuais" />
                <div className="layout">
                    <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
                </div>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                    <img src={PratoMacarrao} alt="Prato de Sushi" />
                <div className="layout">
                    <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
                </div>
            </Card>
        </Section>
       </>
    )
}