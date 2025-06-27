import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../components/CarrinhoContext";
import { useState } from "react";
import CartSidebar from "./CardSidebar";

const Container = styled.header`
background-color:rgb(254, 207, 176);
padding: 16px;
color: #cf0909;
text-align: center;

h1 {
    border: 3px solid  #cf0909;
    display: flex; 
    border-radius: 12px;
    width: 140px;
    padding: 6px;
    background-color: white;
    font-family: "Lora", serif;
    font-size: 2rem;
    }    

.one-page {
    display: grid;
    grid-template-columns: 200px 750px 300px;

.logo {
    display: block; 
    text-align: start;
    margin-left: 32px;
}
h2 {
    margin-top: 17px;
    font-size: 1.3rem;
    margin-left: 150px;
    }

.restaurante {
    border: none;
    background-color: transparent;
    color: #cf0909;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 162px;  
    margin-bottom: 2px;    
    
    &:hover {
    color:rgb(80, 1, 1);
    }
}      
}
.second-page {
    display: grid;
    grid-template-columns: 120px 700px 180px;

    .logo {
    margin-left: 450px;
    }

    .restaurante, .back {
    background-color: transparent;
    border: none;
    color: #cf0909;
    letter-spacing: 1px;
    font-weight: bold;
    
    &:hover {
    color:rgb(180, 0, 0);
    }
}
}
.third-page {
    display: grid;
    grid-template-columns: 100px 1000px;

    .logo {
    margin: 0 480px;
    }
    .back {
    background-color: transparent;
    border: none;
    color: #cf0909;
    letter-spacing: 1px;
    font-weight: bold;

    &:hover {
    color:rgb(180, 0, 0);
    }
}
`;
const Carrinho = styled.button`
background-color: transparent;
border: none;
color: rgb(214, 40, 40);
font-weight: bold;
top: 35px;
right: 120px;
position: absolute;
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

    return (
        <Container>
            {location.pathname === '/' && (
                <>
                <div className="one-page">
                    <div className="logo"> <h1>Efood<i className="bi bi-fork-knife ms-2"></i></h1> </div>
                    <h2>Viva a experiência gastronômica no conforto da sua casa!</h2>
                    <button className="restaurante" onClick={() => navigate('./restaurantes')}> Ver restaurantes </button>
                </div>
                </>
            )}

            {location.pathname === '/pedido' && (
                <div className="second-page">
                    <button className="back" onClick={() => navigate(-1)}><i className="bi bi-arrow-left-short"></i>Voltar</button>
                    <div className="logo"> <h1>Efood<i className="bi bi-fork-knife ms-2"></i></h1> </div>
                    <button className="restaurante" onClick={() => navigate('/restaurantes')}> Ver restaurantes </button>
                    <Carrinho onClick={() => setIsCartOpen(true)}>Ver Carrinho<i className="bi bi-cart ms-1"></i></Carrinho><CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
                </div>
            )}

            {location.pathname === '/restaurantes' && (
                <div className="third-page">
                <button className="back" onClick={() => navigate(-1)}><i className="bi bi-arrow-left-short"></i>Voltar</button>
                <div className="logo"> <h1>Efood<i className="bi bi-fork-knife ms-2"></i></h1> </div>
                </div>
            )}
            
        </Container>
    )
}