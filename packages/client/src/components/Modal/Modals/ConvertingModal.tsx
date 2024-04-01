import { BaseModalProps } from '@/types';
import React from 'react';

import { Modal } from '../Modal';
import { Progress } from '../Modal.style';

interface ConvertingModalProps extends BaseModalProps {
  percent: number;
}

export const ConvertingModal: React.FC<ConvertingModalProps> = ({
  isOpen,
  percent,
  onClose,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <h1>Converting</h1>
    <Progress width={percent}>{percent}%</Progress>
  </Modal>
);
