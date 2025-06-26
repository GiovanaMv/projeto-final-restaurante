import { useState } from "react";
import styled from "styled-components";
import PizzaIndividual from '../assets/prato3-pizza.png';
import { Header } from "../components/Header";
import { Cart } from "../components/Cart";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice'; 
import { v4 as uuidv4 } from 'uuid';
const Banner = styled.div`
    position: relative;
    height: 280px;
    width: 100%;
    background-image: url(${PizzaIndividual});
    background-size: cover;
    background-position: center;

    &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);  // 50% opacidade
    z-index: 0;
    }
    .primeiro-texto {
    position: relative;
    z-index: 1;
    color: silver;
    font-size: 1.7rem;
    margin-left: 24px;
    padding-top: 24px;
    }
    .segundo-texto {
    position: relative;
    z-index: 1;
    color: white;
    margin-top: 10%;
    margin-left: 24px;
    }
`;
const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3,350px);
    margin-left: 112px;
    margin-bottom: 32px;
    margin-top: 32px;
    gap: 32px;
`;
const Card = styled.div`
    width: 350px;
    text-align: center;
    background-color:rgb(214, 40, 40);
    color: white;
    padding: 6px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.05);
    }
    
    img {
        width:  100%;
    }
    h3 {
        margin-top: 3px;
    }
    p {
        margin: 0 auto; 
        width: 280px;
        text-align: justify;
    }
    
    button {
        background-color: white;
        border: none;
        border-radius: 3px;
        color: #cf0909;
        font-weight: bold;
        padding: 6px;
        margin-top: 12px;
    }
`;
const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1024px;
    padding: 24px;
    background-color: rgb(214, 40, 40);
    color: white;
    border-radius: 8px;
    display : grid;
    grid-template-columns: 500px 480px;
    
    img{
    width: 100%;
    margin-top: 16px;
    }
    p {
    width: 450px;
    text-align: justify;
    }
    div {
    margin-left: 24px;
    }
    button {
    color: white;
    background-color: transparent;
    border: none;
    margin-left: 424px;
    }
    .add-carrinho {
    margin-left: 0px;
    border: solid 2px white;
    padding: 12px;
    border-radius: 20px;

    &:hover {
    background-color:  rgb(196, 28, 28);
    }
    }

`;
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
`;

export function Cardapio() {
    const [cartOpen, setCartOpen] = useState(false);
    const [IsModalOpen, SetIsModalOpen] = useState(false);

    const openModal = () => SetIsModalOpen(true);
    const closeModal = () => SetIsModalOpen(false);

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addToCart({
            id: uuidv4(),
            name: "Pizza Margherita",
            price: 60.90,
            image: PizzaIndividual
        }));
    }

    return (
        <>
        <Header setCartOpen={setCartOpen} />
        <Banner>
            <h2 className="primeiro-texto">
                Italiana
            </h2>
            <h2 className="segundo-texto">
                La Dolce Vita Trattoria
            </h2>
        </Banner>
            <Section>
                <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>informações</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>informações</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>informações</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>informações</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>informações</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button>informações</button>
            </Card>
            </Section>
            {IsModalOpen && (
                <>
                    <Overlay onClick={closeModal} />
                    <Modal>
                        <img src={PizzaIndividual} alt="Pizza de Margherita" />
                        <div>
                            <button onClick={closeModal}><i className="bi bi-x-lg fechar"></i></button>
                            <h3>Pizza Margherita</h3>
                            <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                                <hr></hr> Serve: de 2 a 3 pessoas</p>
                            <button onClick={handleAdd} className="add-carrinho">Adicionar ao carrinho  - R$ 60,90</button>
                        </div>
                    </Modal>
                </>
            )}
            {cartOpen && (
                <Cart onClose={() => setCartOpen(false)} />
            )}
        </>
    );
}