"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideo = exports.getMp3 = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const getMp3 = async (req, res) => {
    try {
        const url = req.query.url;
        const info = await ytdl_core_1.default.getInfo(url);
        const io = req.app.settings.socketio;
        if (info?.videoDetails?.title)
            io.emit('song-name', info.videoDetails.title);
        console.log(info.videoDetails.title);
        const audio = (0, ytdl_core_1.default)(url, { quality: 'highestaudio' }).on('progress', (_, downloaded, total) => {
            io.emit('converting', { downloaded, total });
        });
        audio.pipe(res);
    }
    catch (e) {
        res.status(500).json('Server error');
    }
};
exports.getMp3 = getMp3;
const getVideo = async (req, res) => {
    try {
        const url = req.query.url;
        const info = await ytdl_core_1.default.getInfo(url);
        const io = req.app.settings.socketio;
        if (info?.videoDetails?.title)
            io.emit('song-name', info.videoDetails.title);
        console.log(info.videoDetails.title);
        const video = (0, ytdl_core_1.default)(url).on('progress', (_, downloaded, total) => {
            io.emit('converting', { downloaded, total });
        });
        video.pipe(res);
    }
    catch (e) {
        res.status(500).json('Server error');
    }
};
exports.getVideo = getVideo;
