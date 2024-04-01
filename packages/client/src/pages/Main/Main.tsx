import { Flex } from '@/Shared.style';
import { convertSong } from '@/api/convertSong';
import { convertVideo } from '@/api/convertVideo';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { ConvertingModal } from '@/components/Modal/Modals/ConvertingModal';
import { Download } from '@/components/Modal/Modals/Download';
import { Loading } from '@/components/Modal/Modals/Loading';
import { YT_URL_REGEX } from '@/constants/ytUrl';
import { SocketContext } from '@/context/SocketContext';
import { useEffectOnce } from '@/hooks/useEffectOnce';
import { useForm } from '@/hooks/useForm';
import { ConvertingSocketType, FormType } from '@/types';
import { useContext, useState } from 'react';

import { ErrorMessage, Form, StyledButton, StyledInput } from './Main.style';

export const Main = () => {
  const [audio, setAudio] = useState<string | null>(null);
  const [percent, setPercent] = useState<number>(0);
  const [name, setName] = useState('');

  const { socket } = useContext(SocketContext);

  const { values, onChange, handleSubmit, isSubmitted, resetForm, errors } =
    useForm<FormType>(
      {
        host: '',
        isVideo: false,
      },
      (val: FormType) => {
        if (!YT_URL_REGEX.test(val.host)) return { host: 'Wrong url', isVideo: false };
      },
    );

  const onSubmitCb = async (values: FormType) => {
    const apiFunc = values.isVideo ? convertVideo : convertSong;

    const res = await apiFunc(values.host);

    const blob = new Blob([res], {
      type: values.isVideo ? 'video/mp4"' : 'audio/wav/mp3',
    });

    setAudio(URL.createObjectURL(blob));
  };

  const reset = () => {
    setAudio(null);
    setPercent(0);
    setName('');
    resetForm();
  };

  const convertingSocketListener = ({ downloaded, total }: ConvertingSocketType) => {
    const pc = Math.floor(downloaded / (total / 100));
    setPercent(pc);

    if (downloaded >= total) setPercent(100);
  };

  const nameSocketListener = (data: string) => setName(data);

  useEffectOnce(() => {
    socket.on('song-name', nameSocketListener);
    socket.on('converting', convertingSocketListener);
  });

  return (
    <>
      <h1>Convert one video to mp{values.isVideo ? '4' : '3'}</h1>

      <Loading isOpen={isSubmitted && !percent} />
      <ConvertingModal isOpen={!!percent} percent={percent} onClose={reset} />
      <Download
        isOpen={percent >= 100}
        src={audio as string}
        onClose={reset}
        name={name}
        isVideo={values.isVideo}
      />

      <Form onSubmit={(e) => handleSubmit(e, onSubmitCb)}>
        <Flex spacing={1}>
          <Checkbox
            id="isVideo"
            name="isVideo"
            onChange={onChange}
            value={values.isVideo}
          />
          <label htmlFor="isVideo">
            Download {values.isVideo ? 'video-mp4' : 'audio-mp3'}
          </label>
        </Flex>

        <StyledInput
          type="text"
          placeholder="Link of song"
          name="host"
          required
          value={values.host}
          onChange={onChange}
          error={values.host && errors?.host ? 'true' : ''}
        />
        {errors?.host && values.host && <ErrorMessage>{errors.host}</ErrorMessage>}

        <StyledButton type="submit" disabled={!values.host}>
          Submit
        </StyledButton>
      </Form>
    </>
  );
};
