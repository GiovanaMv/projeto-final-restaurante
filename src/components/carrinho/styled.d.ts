import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 500px;

  button {
  border: none;
  background-color: transparent;
  display: flex;
  margin-left: auto;
  color: #E66767;
  font-size: 1.2rem;
  }
`;