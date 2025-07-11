import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Modal } from '../components/Modal';
import { Header } from '../components/Header';

const Locais = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 24px;
  margin-left: 204px;
  margin-top: 24px;
  margin-bottom: 24px;

  .saiba-mais {
  border: 3px solid #E66767;
  color: #E66767;
  text-align: center;
  padding: 12px;

  img{
  width: 200px;
  height: 150px;
  object-fit: cover;
  margin-top: 12px;
  }

  h3{
  font-size: 1.3rem;
  font-weight: bold;
  }

  button {
  background-color: #E66767;
  border: none;
  color: white;
  font-size: 14px;
  padding: 3px;
  }

  p {
  margin-top: 12px;
  }
  }
`;

const Visualizar = styled.div`
color: #E66767;
text-align: center;
`;

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