let ytdl = require('ytdl-core');
// let fs = require('fs');
// const url = 'https://www.youtube.com/watch?v=xKzzZEiyfug';

const getInfo = async (req, res) => {
  let url = req.query.url;
  let info = await ytdl.getInfo(url);
  let format = ytdl.filterFormats(info.formats, 'audioonly');
  let audioTracker = { downloaded: 0, total: Infinity }
  const audio = ytdl(url, { quality: 'highestaudio' })
    .on('progress', (_, downloaded, total) => {
      audioTracker = { downloaded, total };

      console.log(downloaded);
    });

  audio.pipe(res);
  // res.status(200).json(req.query.url);
}

module.exports = {
  getInfo
}
