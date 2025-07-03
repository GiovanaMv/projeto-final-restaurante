import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store/store';
import { clearCart, removeFromCart } from '../store/cartSlice';

const Sidebar = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? '0' : '-400px')};
  height: 100%;
  background-color: #E66767;
  color: #fff;
  padding: 8px;
  width: 360px;
  transition: right 0.3s ease;
  overflow-y: auto;
  z-index: 1;

.fechar {
  border: none;
  margin-top: 0px;
  margin-left: 318px;
  width: 32px;
  background-color: transparent;
  color:#FFEBD9;
}
h2 {
  font-size: 16px;
  text-align: start;
}
label {
  margin: 0px;
  padding-top: 2px;
  font-size: 14px;
  text-align: start;

  input {
  height: 32px;
  }
}
p {
  font-size: 14px;
  color: #FFEBD9;
}
.valor {
  display: flex;
  gap: 192px;
}  
button {
  font-size: 14px;
  width: 344px;
  display: block; 
  background-color: #FFEBD9;
  margin-top: 18px;
  cursor: pointer;
}
`;

const Into = styled.div`
  img{ 
  width: 100%;
  heigth: 100%;
  }
  .valor {
  margin-top: 42px;
  gap: 212px;
  font-weight: 700;
  }
  .Continuar {
  margin-top: 0px;
  background-color: #FFEBD9;
  } 
  ul {
  padding-left: 0px;

  li {
  display: grid;
  grid-template-columns: 130px 128px 50px;
  background-color: #FFEBD9;
  color: #E66767;
  padding: 6px;
  width: 344px;
  height: 100px;
  margin-top: 12px;
  text-align: start;
  
  .infos {
  margin-left: 6px;

  .nome {
  display: block;
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: 900;
  }
  span {
  font-size: 14px;
  }
}
  .trash {
  background-color: 'transparent';
  border: none;
  color: #E66767;
  margin-top: 62px; 
  width: 32px;
  margin-left: 42px;
  }
}
`;
const StyledLabel = styled.label`
  display: block;
  margin-bottom: 12px;
  font-size: 1rem;
  margin-top: 12px;

  .cep-number {
    display: flex;
  }

  input {
    display: block;
    padding: 2px;
    margin-top: 4px;
    border: none;
    width: 344px;
    background-color: #FFEBD9;
  }
`;
const Delivery = styled.div`
  text-align: start;

  .Voltar, .Pagamento {
  display: block;
  width: 344px;
  background-color: #FFEBD9;
  }
  .Pagamento {
  margin-bottom: 12px;
  margin-top: 28px;
  }

  form {
    .cep-number {
    display: grid;
    grid-template-columns: 160px 160px;
    gap: 26px;

    input {
      width: 155px;
    }
  }
} 
}
`;
const Payment = styled.div`
  .number-cvv {
  display: grid;
  grid-template-columns: 230px 87px;
  gap: 24px;

  .number-cart {
    width: 230px;
  }
  .cvv-cart {
    width: 87px;
  }
}
  .mes-ano {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  .mes, .ano {
    width: 155px;
  }
}  
  .buttons {
  button {
  background-color: #FFEBD9;
  }
  }
`;
const Confirmation = styled.div`
 text-align: start;    
  
    .text {
      margin-top: 24px;
      width: 344px;
      p {
        margin-top: 28px;
      }
    }
    .concluir {
    margin-top: 0px;
    padding-top: 0px;
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
  const cartTotal = useSelector((state: RootState) => state.cart.items.reduce((total, item) => total + item.price, 0));

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
    number: '',
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
        <Into>
          <button onClick={onClose} className='fechar'><i className="bi bi-x-lg"></i></button>
          {cartItems.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li className='compra-info' key={index}>
                  <img className='image' src={item.image} alt={item.name} />
                  <div className='infos'>
                    <span className='nome'> {item.name} </span>
                    <span>R$ {item.price.toFixed(2)} </span>
                  </div>
                  <button className='trash' onClick={() => dispatch(removeFromCart(item.id))} > <i className="bi bi-trash3"></i> </button>
                </li>
              ))}
            </ul>
          )}
          <div className='valor'>
            <p>Valor total </p>
            <p>R$ {cartTotal.toFixed(2)}</p>
          </div>
          <button className='Continuar' onClick={() => setStep('delivery')}>Continuar com a entrega</button>
        </Into>
      )}

      {step === 'delivery' && (
        <Delivery> 
          <button onClick={onClose} className='fechar'><i className="bi bi-x-lg"></i></button>
          <h2>Entrega</h2>
          <form>
            <StyledLabel>Quem irá receber <input type="text" value={deliveryInfo.receiver} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, receiver: e.target.value })} /> </StyledLabel>

            <StyledLabel> Endereço <input type="text" value={deliveryInfo.address} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })} /> </StyledLabel>

            <StyledLabel> Bairro <input type="text" value={deliveryInfo.neighborhood} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, neighborhood: e.target.value })} /> </StyledLabel>

            <div className='cep-number'>
              <StyledLabel> CEP <input type="number" value={deliveryInfo.cep} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, cep: e.target.value })} /> </StyledLabel>

              <StyledLabel> Número <input type="number" value={deliveryInfo.number} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, number: e.target.value })} /> </StyledLabel>
            </div>

            <StyledLabel> Complemento (opcional) <input type="text" value={deliveryInfo.complement} onChange={(e) => setDeliveryInfo({ ...deliveryInfo, complement: e.target.value })} /> </StyledLabel>
          </form>
            <button className='Pagamento' type='button' onClick={() => setStep('payment')} >Continuar com o pagamento</button>
            <button className='Voltar' onClick={() => setStep('cart')}> Voltar para o carrinho</button>
        </Delivery>
      )}

      {step === 'payment' && (
        <Payment>
          <button onClick={onClose} className='fechar'><i className="bi bi-x-lg"></i></button>
          <h2>Pagamento - Valor a pagar R$ {cartTotal.toFixed(2)}</h2>
          <form>
            <StyledLabel> Nome no cartão:  <input type="text" value={paymentInfo.cardName} onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })} /> </StyledLabel>

            <div className="number-cvv">
              <StyledLabel> Número do cartão:  <input className='number-cart' type="text" value={paymentInfo.cardNumber} onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })} /> </StyledLabel>
              <StyledLabel> CVV:  <input className='cvv-cart' type="text" value={paymentInfo.cvv} onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })} /> </StyledLabel>
            </div>

            <div className="mes-ano">
              <StyledLabel> Mês de vencimento:  <input className='mes' type="text" value={paymentInfo.expirationMonth} onChange={(e) => setPaymentInfo({ ...paymentInfo, expirationMonth: e.target.value })} /> </StyledLabel>
              <StyledLabel>Ano de vencimento:  <input className='ano' type="text" value={paymentInfo.expirationYear} onChange={(e) => setPaymentInfo({ ...paymentInfo, expirationYear: e.target.value })} /> </StyledLabel>
            </div>
          </form>

         <div className="buttons">
          <button type='button' onClick={handleCheckout} className="finalizar">Finalizar pagamento</button>
          <button onClick={() => setStep('delivery')} className="Voltar">Voltar para edição de endereço</button>
         </div>
        </Payment>
      )}

      {step === 'confirmation' && confirmationData && (
        <Confirmation>
          <h2>Pedido realizado - {confirmationData?.orderId}</h2>
          <p>Endereço: {confirmationData?.delivery?.address?.description}</p>
          <p>Bairro: {confirmationData?.delivery?.address?.neighborhood}</p>
          <p>CEP: {confirmationData?.delivery?.address?.zipCode}</p>
          <p>Entregue para: {confirmationData?.delivery?.receiver}</p>
          <p>Valor total: R$ {cartTotal.toFixed(2)}</p>
          <div className='text'>
            <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
            <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
            <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
            <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
          </div>
          <button onClick={onClose} className="concluir">Concluir</button>
        </Confirmation>
      )}
    </Sidebar>
  );
};

export default CartSidebar;
