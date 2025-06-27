import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store'; 
import { clearCart, removeFromCart } from '../store/cartSlice'; 

const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? '0' : '-400px')};
  width: 400px;
  height: 100%;
  background-color: rgb(214, 40, 40);
  color: #fff;
  padding: 20px;
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 1;
  
  button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    padding: 4px;
    border-radius: 4px;
    margin: 8px;
  }
  .fechar, .Continuar, .Pagamento, .Voltar {
    &:hover {
    background-color: white;
    color: rgb(214, 40, 40);
    }
  }
  img{ 
  width: 40%;
  border-radius: 12px;
  margin-top: 8px;
  }
  ul {
  padding-left: 0px;

  li {
  display: flex;
  alignItems: center;
  marginBottom: 10px;

  span {
  margin-left: 12px;
  margin-top: 12px;
  }
  .trash {
    background: 'transparent';
    border: none;
    color: 'white';
    margin-left: 48px;
    margin-top: 62px;
  }
  }
`;
const StyledLabel = styled.label`
  display: grid;
  margin-bottom: 12px;
  font-size: 1rem;
  margin-top: 12px;

  input {
    display: block;
    padding: 2px;
    margin-top: 4px;
    border-radius: 4px;
    border: none;
  }
`;

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart');

  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartTotal = useSelector((state: RootState) =>  state.cart.items.reduce((total, item) => total + item.price, 0) );

const handleCheckout = async () => {
  const orderPayload = {
    products: cartItems.map((item) => ({
    id: item.id,
    price: item.price
  })),
    delivery: {
      receiver: deliveryInfo.receiver,
      address: {
        description: deliveryInfo.address,
        city: "São Paulo",
        zipCode: deliveryInfo.cep,
        number: "123",
        neighborhood: deliveryInfo.neighborhood,
        complement: deliveryInfo.complement
      }
    },
    payment: {
      card: {
        name: paymentInfo.cardName,
        number: paymentInfo.cardNumber,
        code: Number(paymentInfo.cvv),
        expires: {
          month: Number(paymentInfo.expirationMonth),
          year: Number(paymentInfo.expirationYear)
        }
      }
    }
  };

  try {
    const response = await fetch('https://fake-api-tau.vercel.app/api/efood/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderPayload),
    });

    const data = await response.json();
    setConfirmationData(data);
    setStep('confirmation');
    dispatch(clearCart());
    
  } catch (error) {
    console.error('Erro ao enviar pedido:', error);
    alert('Erro ao concluir o pedido.');
  }
};


const [deliveryInfo, setDeliveryInfo] = useState({
  receiver: '',
  address: '',
  neighborhood: '',
  cep: '',
  complement: '',
});

const [paymentInfo, setPaymentInfo] = useState({
  cardName: '',
  cardNumber: '',
  cvv: '',
  expirationMonth: '',
  expirationYear: '',
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const [confirmationData, setConfirmationData] = useState<any>(null); // dados vindos da API

useEffect(() => {
  if (confirmationData) {
    console.log('Dados de confirmação:', confirmationData);
  }
}, [confirmationData]);
    

  return (
    <Sidebar $isOpen={isOpen}>
      {step === 'cart' && (
        <div className="cart-content">
          <h2>Seu Carrinho</h2>
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.name} />
                  <span> {item.name} <br></br> R$ {item.price.toFixed(2)} </span>
                  <button onClick={() => dispatch(removeFromCart(item.id))} className='trash'> <i className="bi bi-trash3"></i> </button>
                </li>
              ))}
            </ul>
          )}
          <p>Total: R$ {cartTotal.toFixed(2)}</p>
          <button onClick={() => setStep('delivery')} className='Continuar'>Continuar com a entrega</button>
          <button onClick={onClose} className='fechar'>Fechar carrinho</button>
        </div>
      )}

{step === 'delivery' && (
  <div className="delivery-form">
    <h2>Entrega</h2>
    <form>
    <StyledLabel>Quem irá receber:  <input type="text" value={deliveryInfo.receiver} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, receiver: e.target.value })} /> </StyledLabel>

    <StyledLabel> Endereço:  <input type="text"  value={deliveryInfo.address} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })} /> </StyledLabel>

    <StyledLabel> Bairro:  <input type="text" value={deliveryInfo.neighborhood} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, neighborhood: e.target.value }) } /> </StyledLabel>

    <StyledLabel> CEP:  <input type="text" value={deliveryInfo.cep} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, cep: e.target.value }) } /> </StyledLabel>

    <StyledLabel> Complemento (opcional):  <input type="text" value={deliveryInfo.complement} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, complement: e.target.value }) } /> </StyledLabel>
    </form>
    
    <button type='button' onClick={() => setStep('payment')} className='Pagamento'>Pagamento</button>
    <button className='Voltar' onClick={() => setStep('cart')}> Voltar para o carrinho </button>
  </div>
)}

{step === 'payment' && (
  <div className="payment-form">
    <h2>Pagamento - Valor a pagar R$ {cartTotal.toFixed(2)}</h2>
    <form>
      <StyledLabel> Nome no cartão:  <input type="text" value={paymentInfo.cardName} onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })} /> </StyledLabel>
            
      <StyledLabel> Número do cartão:  <input type="text" value={paymentInfo.cardNumber} onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })} /> </StyledLabel>
            
      <StyledLabel> CVV:  <input type="text" value={paymentInfo.cvv} onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })} /> </StyledLabel>
            
      <StyledLabel> Mês de vencimento:  <input type="text" value={paymentInfo.expirationMonth} onChange={(e) => setPaymentInfo({ ...paymentInfo, expirationMonth: e.target.value })} /> </StyledLabel>
  
      <StyledLabel>Ano de vencimento:  <input type="text" value={paymentInfo.expirationYear} onChange={(e) => setPaymentInfo({ ...paymentInfo, expirationYear: e.target.value })} /> </StyledLabel>
    </form>
    
    <button onClick={() => setStep('delivery')} className="Voltar">Voltar para o endereço</button>
    <button onClick={handleCheckout} className="Pagamento">Finalizar pagamento</button>
  </div>
)}

{step === 'confirmation' && confirmationData && (
  <div className="confirmation">
    <h2>Pedido #{confirmationData?.orderId} realizado!</h2>
    <p>Endereço: {confirmationData?.delivery?.address?.description}</p>
    <p>Bairro: {confirmationData?.delivery?.address?.neighborhood}</p>
    <p>CEP: {confirmationData?.delivery?.address?.zipCode}</p>
    <p>Entregue para: {confirmationData?.delivery?.receiver}</p>
    <p>Valor total: R$ {cartTotal.toFixed(2)}</p>
    <p>Agradecemos por sua compra! <i className="bi bi-chat-heart"></i></p>
    <button onClick={onClose} className="fechar">Concluir</button>
  </div>
)}
</Sidebar>
);
};

export default CartSidebar;
