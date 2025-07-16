import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Banner } from "./styled";
import { useAppSelector } from "../../store/hooks";
import CartSidebar from "../estruturas-dentro-carrinho/CardSidebar";
import Logo from "../../assets/logo.png"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type HeaderProps = {};

// eslint-disable-next-line no-empty-pattern
export function Header({ }: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isCartOpen, setIsCartOpen] = useState(false);
    // useCart();
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