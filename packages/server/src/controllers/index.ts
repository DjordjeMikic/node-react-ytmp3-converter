import ytdl from 'ytdl-core';

export const getMp3 = async (req, res) => {
  try {
    const url = req.query.url;
    const info = await ytdl.getInfo(url);
    const io = req.app.settings.socketio;

    if (info?.videoDetails?.title) io.emit('song-name', info.videoDetails.title);

    console.log(info.videoDetails.title);
    const audio = ytdl(url, { quality: 'highestaudio' }).on(
      'progress',
      (_, downloaded, total) => {
        io.emit('converting', { downloaded, total });
      },
    );

    audio.pipe(res);
  } catch (e) {
    res.status(500).json('Server error');
  }
};

export const getVideo = async (req, res) => {
  try {
    const url = req.query.url;
    const info = await ytdl.getInfo(url);
    const io = req.app.settings.socketio;

    if (info?.videoDetails?.title) io.emit('song-name', info.videoDetails.title);

    console.log(info.videoDetails.title);
    const video = ytdl(url).on('progress', (_, downloaded, total) => {
      io.emit('converting', { downloaded, total });
    });

    video.pipe(res);
  } catch (e) {
    res.status(500).json('Server error');
  }
};
