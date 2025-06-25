import styled from "styled-components";
import { useCart } from "../components/CarrinhoContext";

const Sidebar = styled.aside`
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100%;
    background-color: rgb(214, 40, 40);
    color: white;
    padding: 24px;
    z-index: 100;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 24px;
        font-size: 1.8rem;
    }

    .cart-item {
        display: flex;
        align-items: center;
        margin-bottom: 16px;

        img {
            width: 64px;
            height: 64px;
            object-fit: cover;
            border-radius: 8px;
            margin-right: 12px;
        }

        .info {
            flex: 1;

            h4 {
                margin: 0;
                font-size: 1.2rem;
            }

            p {
                margin: 4px 0 0 0;
            }
            button {
                background-color: transparent;
                border: none;
                color: white;
                margin-left: 6px;
            }
        }
    }

    .total {
        margin-top: auto;
        font-size: 1.4rem;
        font-weight: bold;
    }

    .buttons {
        margin-top: 16px;

        button {
            width: 100%;
            padding: 12px;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            cursor: pointer;
            font-size: 1rem;
        }

        .finalizar {
            background-color: white;
            color: rgb(214, 40, 40);
            margin-bottom: 12px;

            &:hover {
                background-color: #f8f8f8;
            }
        }

        .fechar {
            background-color: transparent;
            color: white;
            border: 2px solid white;

            &:hover {
                background-color: rgba(255, 255, 255, 0.1);
            }
        }
    }
`;

type CartProps = {
    onClose: () => void;
};

export function Cart({ onClose }: CartProps) {
    const { cartItems, cartTotal, removeFromCart } = useCart();

    return (
        <Sidebar>
            <h2>Produtos no Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div className="info">
                                <h4>{item.name}</h4>
                                <p>R$ {item.price.toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item)}><i className="bi bi-trash3"></i></button>
                            </div>
                        </div>
                    ))}
                    <div className="total">Total: R$ {cartTotal.toFixed(2)}</div>
                    <div className="buttons">
                        <button className="finalizar">Continuar entrega</button>
                        <button className="fechar" onClick={onClose}>Fechar</button>
                    </div>
                </>
            )}
        </Sidebar>
    );
}
