import axios from 'axios';

export const convertVideo = async (info: string) => {
  const res = await axios({
    method: 'get',
    url: `http://localhost:8000/video?url=${info}`,
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'video/mp4',
    },
  });

  return res.data;
};
