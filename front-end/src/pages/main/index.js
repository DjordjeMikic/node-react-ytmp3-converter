import { useState, useEffect } from 'react';

import axios from 'axios';
import { ios, HOST } from '../../socket';

// Styled Components
import { PageContainer, Form, Input, Btn } from '../styles';

// Components
import Download from '../../components/download';
import Converting from '../../components/converting';
import E from '../../components/e';

ios.connect();

const Main = () => {
  const [info, setInfo] = useState('');
  const [audio, setAudio] = useState(null);
  const [percent, setPercent] = useState(null);
  const [name, setName] = useState(null);
  const [e, setE] = useState(null);

  useEffect(() => {

    ios.on('song-name', a => {
        setName(a);
    })

    ios.on('converting', ({ downloaded, total }) => {


      let pc = Math.floor(downloaded / (total / 100));
      setPercent(pc);

      if(downloaded === total) {
        setPercent(100);
      }
    });
    return () => ios.disconnect();
  }, [])

  const onChange = (a) => {
    setInfo(a.target.value);
  }

  const cls = () => {
    setInfo('');
    setAudio(null);
    setPercent(null);
    setName(null);
    // ios.disconnect();
  }

  const onSubmit = async (a) => {
    a.preventDefault();
    try {
      let res = await axios({
        method: 'get',
        url: `${HOST}/api/info?url=${info}`,
        responseType: 'arraybuffer',
        headers: {
          'Content-Type': 'audio/wav/mp3'
        }
      });

      let { data } = res;

      let blob = new Blob([data], {
        type: 'audio/wav/mp3'
      });

      setAudio(URL.createObjectURL(blob));
    } catch(e) {
      // console.log(e);
      setE(e.responseType);
    }
  }

  return (
    <PageContainer className="flex column">
      <h1>Convert one song to mp3</h1>

      {percent && percent < 100 ? (
        <Converting
          percent={percent}
          cls={cls}
        />
      ) : ''}

      {percent === 100 ? (
        <Download src={audio} cls={cls} name={name} />
      ) : ''}
      {e ? <E error={e} onClick={() => setE(null)} /> : ''}

      <Form onSubmit={onSubmit} className="flex column">
        <Input
          type="text"
          placeholder="Link of song"
          value={info}
          onChange={onChange}
          required
        />

        <Btn type="submit">Submit</Btn>
      </Form>

      {audio && <>
        <audio src={audio} controls type="audio/mp3"></audio>
      </>}
    </PageContainer>
  )
}

export default Main;
