import { useState, useEffect } from 'react';
import { X } from '../style';
import {
  Blur,
  ConverterContainer as DownloadContainer
} from '../converting/style';
import { BtnLink, Btn } from './style';

const Download = ({ src, cls, name }) => {
  let [download, setDownload] = useState(null);
  useEffect(() => {
    setDownload(`${name}.mp3`);
  }, [name])

  return (
    <Blur>
      <DownloadContainer className="flex column">
        <h1>Download</h1>
        <h2>{name}</h2>
        <Btn>
          <BtnLink className="flex"
            href={src}
            download={download}>
            Download
          </BtnLink>
        </Btn>
        <X className="flex" onClick={cls}>&times;</X>
      </DownloadContainer>
    </Blur>
  )
}

export default Download;
