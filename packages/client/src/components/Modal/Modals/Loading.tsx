import { Flex } from '@/Shared.style';
import React, { useEffect, useRef, useState } from 'react';

import { Modal } from '../Modal';
import { CircleLoading } from '../Modal.style';

interface LoadingProps {
  isOpen: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ isOpen }) => {
  const [itemAnimated, setItemAnimated] = useState(0);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setItemAnimated((prevState) => (prevState <= 2 ? ++prevState : 0));
    }, 400);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => {}} noClose>
      <Flex spacing={2}>
        {Array.from(Array(3))
          .fill('_')
          .map((_, index: number) => (
            <CircleLoading anim={itemAnimated === index ? 'true' : ''} key={index} />
          ))}
      </Flex>
    </Modal>
  );
};
