const ytdl = require('ytdl-core');

const getInfo = async (req, res) => {
  try {
    const url = req.query.url;
    const info = await ytdl.getInfo(url);
    let format = ytdl.filterFormats(info.formats, 'audioonly');
    let audioTracker = { downloaded: 0, total: Infinity };
    let io = req.app.settings.socketio;

    if(info?.videoDetails?.title) {
      io.emit('song-name', info.videoDetails.title);
    }

    console.log(info.videoDetails.title);
    const audio = ytdl(url, { quality: 'highestaudio' })
      .on('progress', (_, downloaded, total) => {
        // audioTracker = { downloaded, total };
        io.emit('converting', { downloaded, total });
      })

    audio.pipe(res);
  } catch(e) {
    res.status(400).json(e);
  }
}

module.exports = {
  getInfo
}
