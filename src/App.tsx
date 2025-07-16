import { Routes, Route } from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import { Home } from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";
import { Cardapio } from "./pages/pratos/Cardapio";
import { CartProvider } from './context/CarrinhoContext';
import { RestaurantesPage } from './pages/restaurante/RestaurantePage';



function App() {

  return (
    <CartProvider>
      <GlobalStyle />
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