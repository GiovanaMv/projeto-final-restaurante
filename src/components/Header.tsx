import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../components/CarrinhoContext";

const Container = styled.header`
    background-color:rgb(254, 207, 176);
    padding: 16px;
    color: #cf0909;
    text-align: center;

    .logo {
    display: flex; 
    justify-content: center;

    h1 {
    display: flex; 
    border: 3px solid  #cf0909;
    border-radius: 12px;
    width: 140px;
    padding: 6px;
    margin: 3px;
    background-color: white;
    font-family: "Lora", serif;
    font-size: 2rem;
    }
}
    h2 {
    margin-top: 12px;
    font-size: 1.5rem;
    }

    .second-page {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    button {
    background-color: transparent;
    border: none;
    color: #cf0909;
    letter-spacing: 1px;
    font-weight: bold;
    }
}`;

    type HeaderProps = {
        setCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    }

// eslint-disable-next-line no-empty-pattern
export function Header({ }: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    useCart();
    
    return (
        <Container>
            {location.pathname === '/' && (
            <>
            <div className="logo">
                <h1>Efood<i className="bi bi-fork-knife ms-2"></i></h1>
            </div>
            <h2>Viva a experiência gastronômica no conforto da sua casa!</h2>
            </>
            )}
            {location.pathname === '/pedido' && (
            <div className="second-page">
            <button className="back" onClick={() => navigate(-1)}><i className="bi bi-arrow-left-short"></i>Voltar</button>
            <div className="logo">
                <h1>Efood<i className="bi bi-fork-knife ms-2"></i></h1>
            </div>
            </div>
            )}
        </Container>
    )
}