// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import styled from 'styled-components';
import GlobalStyle from "./styles/GlobalStyle";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Cardapio } from "./pages/Cardapio";
import { CartProvider } from './components/CarrinhoContext';
// import CartSidebar from './components/CardSidebar';
import { RestaurantesPage } from './pages/RestaurantePage';

// const Carrinho = styled.button`
// background-color: transparent;
// border: none;
// color: rgb(214, 40, 40);
// font-weight: bold;
// top: 33px;
// right: 120px;
// padding: 3px;
// position: absolute;
// `;


function App() {
  // const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <GlobalStyle />

      {/* <Carrinho onClick={() => setIsCartOpen(true)} >Ver Carrinho<i className="bi bi-cart ms-1"></i></Carrinho>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} /> */}

      {/* rotas */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pedido' element={<Cardapio />} />
        <Route path='/restaurantes' element={<RestaurantesPage />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;