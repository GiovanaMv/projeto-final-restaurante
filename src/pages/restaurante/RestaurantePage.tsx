import { useEffect, useState } from 'react';
import { Locais, Visualizar } from './styled';
import axios from 'axios';
import { Modal } from '../../components/carrinho/Modal';
import { Header } from '../../components/header/Header';

type Restaurante = {
  id: number;
  titulo: string;
  capa: string;
  tipo: string;
  destacado: boolean;
};

export function RestaurantesPage() {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [, setCartOpen] = useState(false);
  const [restauranteSelecionado, setRestauranteSelecionado] = useState<Restaurante | null>(null);

  useEffect(() => {
    axios
      .get('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => setRestaurantes(res.data))
      .catch((err) => console.error('Erro ao buscar restaurantes',err));
  }, []);

  const abrirModal = (r: Restaurante) => {
    setRestauranteSelecionado(r);
    setModalOpen(true);
  };

  return (
    <>
    <Header setCartOpen={setCartOpen} />
    <Locais>
    {restaurantes.map((r) => (
      <div key={r.id} className='saiba-mais'>
        <h3>{r.titulo}</h3>
        <img src={r.capa} alt={r.titulo} width={300} />
        <p>{r.tipo}</p>
        <button onClick={() => abrirModal(r)}>ver mais</button>
      </div>
    ))}  
    </Locais> 

    <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
      {restauranteSelecionado && (
        <>
          <Visualizar>
            <h2>{restauranteSelecionado.titulo}</h2>
            <img src={restauranteSelecionado.capa} alt={restauranteSelecionado.titulo} width="100%" />
            <p>{restauranteSelecionado.tipo}</p>
          </Visualizar>
        </>
      )}
    </Modal>
  </>
);
}