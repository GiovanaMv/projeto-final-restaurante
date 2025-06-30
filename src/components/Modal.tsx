import styled from 'styled-components';
import React from 'react';

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

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}><i className="bi bi-x-lg"></i></button>
        {children}
      </ModalContent>
    </ModalBackground>
  );
}
