import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from './CarrinhoContext';

const Sidebar = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-400px')};
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
  const { cartItems, cartTotal, removeFromCart } = useCart();
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart');

  return (
    <Sidebar isOpen={isOpen}>
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
                  <button onClick={() => removeFromCart(item)} className='trash'> <i className="bi bi-trash3"></i> </button>
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
            <StyledLabel>Quem irá receber: <input type="text" /> </StyledLabel>

            <StyledLabel> Endereço: <input type="text" /> </StyledLabel>

            <StyledLabel> Bairro: <input type="text" /> </StyledLabel>

            <StyledLabel> CEP: <input type="text" /> </StyledLabel>

            <StyledLabel> Complemento (opcional):  <input type="text" /> </StyledLabel>
          </form>
          <button type='button' onClick={() => setStep('payment')} className='Pagamento'>Pagamento</button>
          <button className='Voltar' onClick={() => setStep('cart')}> Voltar para o carrinho </button>
        </div>
      )}

      {step === 'payment' && (
        <div className="payment-form">
          <h2>Pagamento - Valor a pagar R$ {cartTotal.toFixed(2)}</h2>
          <form>
            <StyledLabel>Nome no cartão: <input type="text" /></StyledLabel>
            <StyledLabel>Número do cartão: <input type="text" /></StyledLabel>
            <StyledLabel>CVV: <input type="text" /></StyledLabel>
            <StyledLabel>Mês de vencimento: <input type="text" /></StyledLabel>
            <StyledLabel>Ano de vencimento: <input type="text" /></StyledLabel>
          </form>
          <button onClick={() => setStep('delivery')} className="Voltar">Voltar para o endereço</button>
          <button onClick={() => setStep('confirmation')} className="Pagamento">Finalizar pagamento</button>
        </div>
      )}

      {step === 'confirmation' && (
        <div className="confirmation">
          <h2>Pedido realizado!</h2>
          <p>Estamos felizes em informar que seu pedido foi recebido e está em preparo. Em breve será entregue no endereço informado.</p>
          <p>Agradecemos por sua compra! <i className="bi bi-chat-heart"></i></p>
          <button onClick={onClose} className="fechar">Concluir</button>
        </div>
      )}
    </Sidebar>
  );
};

export default CartSidebar;
