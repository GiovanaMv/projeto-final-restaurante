import React from 'react';
import { ModalBackground, ModalContent } from './styled';

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