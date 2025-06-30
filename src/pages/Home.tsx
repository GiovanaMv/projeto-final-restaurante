import styled from "styled-components";
import { Link } from "react-router-dom";
import PratoMacarrao from '../assets/prato1-macarrao.png';
import PratoSushi from '../assets/parto2-sushi.png';
import PizzaIndividual from '../assets/prato3-pizza.png';
import { Header } from "../components/Header";

const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 420px);
    gap: 32px;
    justify-content: center; 
    margin: 18px auto; 
`;

const Card = styled.div`
    position: relative;
    border: 2px solid #E66767;
    border-radius: 3px;
    color: #E66767;

    img {
        width: 100%;
        height: 217px;
        border-radius-top: 3px;
    }
    .label {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color:  #E66767;
        color: white;
        padding: 4px 8px;
        border-radius: 3px;
        font-size: 0.9rem;
        letter-spacing: 1px;
    }
    p {
        width: 390px;
        text-align: justify;
        margin-left: 12px;
        margin-bottom: 0px;
    }
    button {
        background-color:#E66767;
        border: none;
        border-radius: 3px;
        color:  white;
        padding: 3px;
        margin: 12px;
        
    }
    div {
        display: flex;
        margin-left: 12px;
        margin-top: 12px;
        gap: 240px; 
    h3 {
        font-size: 1.2rem;    
        font-weight: bold;
    }
}
`;


export function Home() {
    return (
       <>
        <Header />
        <Section>
            <Card>
                <div className="label">Destaque da semana</div>
                <img src={PratoSushi} alt="Prato de Sushi" />
                <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                <img src={PizzaIndividual} alt="Pizza Individuais" />
                <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                <img src={PratoMacarrao} alt="Prato de Sushi" />
                <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
            </Card>
            <Card>
                <div className="label">Italiana</div>
                <img src={PratoSushi} alt="Prato de Sushi" />
                <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                <img src={PizzaIndividual} alt="Pizza Individuais" />
                <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
            </Card>

            <Card>
                <div className="label">Italiana</div>
                <img src={PratoMacarrao} alt="Prato de Sushi" />
                <div>
                    <h3>Hioki Sushi</h3>
                    <span>4.9<i className="bi bi-star-fill ms-2 text-warning"></i></span>
                </div>
                <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!</p>
                <Link to="pedido"><button>Saiba mais</button></Link>
            </Card>
        </Section>
       </>
    )
}
