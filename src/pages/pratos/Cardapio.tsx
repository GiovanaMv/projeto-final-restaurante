import { useState } from "react";
import { Banner, Section, Card, Overlay, Modal } from "./styled";
import PizzaIndividual from '../../assets/prato3-pizza.png';
import { Header } from "../../components/header/Header";
import { Cart } from "../../components/Cart";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice'; 
import { v4 as uuidv4 } from 'uuid';



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