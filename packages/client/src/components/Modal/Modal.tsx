import React, { PropsWithChildren } from 'react';

import { ModalContainer, ModalContent, X } from './Modal.style';

interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  noClose?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, noClose }) => {
  if (!isOpen) return null;

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'modal') onClose();
  };

  return (
    <ModalContainer id="modal" onClick={closeModal}>
      {!noClose ? (
        <ModalContent>
          {children}
          <X onClick={onClose}>&times;</X>
        </ModalContent>
      ) : (
        children
      )}
    </ModalContainer>
  );
};
