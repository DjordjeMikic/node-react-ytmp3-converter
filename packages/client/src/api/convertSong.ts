import axios from 'axios';

export const convertSong = async (info: string) => {
  const res = await axios({
    method: 'get',
    url: `http://localhost:8000/audio?url=${info}`,
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'audio/wav/mp3',
    },
  });

  return res.data;
};
