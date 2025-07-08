import { Routes, Route } from 'react-router-dom';
import GlobalStyle from "./styles/GlobalStyle";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Cardapio } from "./pages/Cardapio";
import { CartProvider } from './context/CarrinhoContext';
import { RestaurantesPage } from './pages/RestaurantePage';



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