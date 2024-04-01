import { BaseModalProps } from '@/types';
import React, { useEffect, useState } from 'react';

import { Modal } from '../Modal';
import { Btn, BtnLink } from '../Modal.style';

interface DownloadProps extends BaseModalProps {
  src: string;
  name: string;
  isVideo: boolean;
}

export const Download: React.FC<DownloadProps> = ({
  isOpen,
  src,
  onClose,
  name,
  isVideo,
}) => {
  const [download, setDownload] = useState<string>('');

  useEffect(() => {
    setDownload(`${name}.${isVideo ? 'mp4' : 'mp3'}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1>Download</h1>
      <h4>{name}</h4>
      <Btn>
        <BtnLink href={src} download={download}>
          Download
        </BtnLink>
      </Btn>
    </Modal>
  );
};
