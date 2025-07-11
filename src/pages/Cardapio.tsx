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
    h2 {
    position: relative;
    z-index: 1;
    margin-left: 124px;
    font-size: 32px;
    }
    .primeiro-texto {
    color: silver;
    padding-top: 24px;
    font-weight: 100;
    }
    .segundo-texto {
    color: white;
    margin-top: 142px;
    font-weight: 900;
    }
`;
const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(3,350px);
    margin-left: 124px;
    margin-bottom: 82px;
    margin-top: 52px;
    gap: 24px;
`;
const Card = styled.div`
    width: 320px;
    height: 338px;
    text-align: center;
    background-color:#E66767;
    color: white;
    padding: 6px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
    transform: scale(1.05);
    }
    
    img {
        width:  304px;
        height: 167px;
        object-fit: cover;
    }
    h3 {
        margin-top: 3px;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: 1px;
        text-align: start;
    }
    p {
        margin: 0 auto; 
        width: 304px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: start;
    }
    
    button {
        background-color: #FFEBD9;
        border: none;
        width: 304px;
        color: #E66767;
        font-weight: bold;
        margin-top: 12px;
    }
`;
const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 980px;
    height: 324px;
    background-color: #E66767;
    padding: 18px;
    color: white;
    display : grid;
    grid-template-columns: 272px 656px;
    font-size: 14px;
    z-index: 9999;
    
    img{
    width: 280px;
    height:280px;
    object-fit: cover;
    border-radius: 2px;
    }

    h3 {
    font-size: 18px;
    }

    p {
    width: 656px;
    text-align: start;
    }

    div {
    margin-left: 24px;
    }

    .infos {
    margin-left: 0px;

    span {
    display: block;
    margin-bottom: 18px;
    }
}
    button {
    color: white;
    background-color: transparent;
    border: none;
    margin-left: 624px;
    }

    .add-carrinho {
    background-color: white;
    border-radius: 2px;
    color: #E66767;
    font-weight: bold;
    margin-left: 0px;
    padding: 3px;
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
                <button onClick={handleAdd} >Adicionar ao carrinho</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button onClick={handleAdd} >Adicionar ao carrinho</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button onClick={handleAdd} >Adicionar ao carrinho</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button onClick={handleAdd} >Adicionar ao carrinho</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button onClick={handleAdd} >Adicionar ao carrinho</button>
            </Card>
            <Card onClick={openModal}>
                <img src={PizzaIndividual} alt="Pizza individual" />
                <h3>Pizza marguerita</h3>
                <p>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</p>
                <button onClick={handleAdd} >Adicionar ao carrinho</button>
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
                            <p>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</p>
                            <div className="infos">
                                <br /> <span>Serve: de 2 a 3 pessoas</span>
                                <button onClick={handleAdd} className="add-carrinho">Adicionar ao carrinho  - R$ 60,90</button>
                            </div>
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