import styled from 'styled-components';

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
  height: 100%;
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
  background-color: transparent;
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