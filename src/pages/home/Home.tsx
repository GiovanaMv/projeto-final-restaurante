import { Link } from "react-router-dom";
import PratoMacarrao from '../../assets/prato1-macarrao.png';
import PratoSushi from '../../assets/parto2-sushi.png';
import PizzaIndividual from '../../assets/prato3-pizza.png';
import { Header } from "../../components/header/Header";
import { Section, Card } from "./styled";

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