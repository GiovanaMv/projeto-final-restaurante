import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../components/CarrinhoContext";
import { useState } from "react";
import { useAppSelector } from "../store/hooks";
import CartSidebar from "./CardSidebar";
import Fundo from "../assets/fundo.png"
import Logo from "../assets/logo.png"

const Container = styled.header`
color: #E66767;
text-align: center;

button {
    background-color: transparent;
    border: none;
    color: #E66767;
    font-weight: bold;
}

.logo {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 42px;
    width: 6%;
    }

.one-page {
    position: relative;
    height: 200px;
    width: 100%;
    background-image: url(${Fundo});
    background-size: cover;
    background-position: center;
    z-index: 0;

    h2 {
    font-size: 1.9rem;
    font-family: Roboto;
    font-weight: bold;
    width: 500px;
    margin-left: 428px;
    }
}
    .third-page {
    position: relative;
    width: 100%;
    background-image: url(${Fundo});
    background-size: cover;
    background-position: center;
    z-index: 0;
    display: grid;
    grid-template-columns: 100px 1fr;

    .logo {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 518px;
    width: 8%;
    }
    }
`;

const Banner = styled.div`
    width: 100%;
    padding: 6px;
    background-image: url(${Fundo});
    background-position: center;
    z-index: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .logo {
    width: 100px;
    }
`;


type HeaderProps = {
    setCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

// eslint-disable-next-line no-empty-pattern
export function Header({ }: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    useCart();
    const cartItems = useAppSelector((state) => state.cart.items);
    const cartCount = cartItems.length;

    return (
        <Container>
            {location.pathname === '/' && (
                <>
                    <div className="one-page">
                        <img className="logo" src={Logo} alt="Logo-EFOOD" />
                        <h2>Viva experiências gastronômicas no conforto da sua casa</h2>
                    </div>
                </>
            )}

            {location.pathname === '/pedido' && (
                <>
                    <Banner>
                        <button onClick={() => navigate('/restaurantes')}> Ver restaurantes </button>
                        <img className="logo" src={Logo} alt="Logo-EFOOD" />
                        <button onClick={() => setIsCartOpen(true)}>{cartCount} produto(s) no carrinho</button><CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                    </Banner>
                </>
            )}

            {location.pathname === '/restaurantes' && (
                <div className="third-page">
                    <button onClick={() => navigate(-1)}><i className="bi bi-arrow-left-short"></i>Voltar</button>
                    <img className="logo" src={Logo} alt="Logo-EFOOD" />
                </div>
            )}

        </Container>
    )
}