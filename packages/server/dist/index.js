"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const controllers_1 = require("./controllers");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer);
app.use((0, cors_1.default)());
app.set('socketio', io);
app.get('/', (req, res) => {
    res.status(200).json('Hello World');
});
app.get('/audio', controllers_1.getMp3);
app.get('/video', controllers_1.getVideo);
io.on('connection', (socket) => {
    console.log('Connection established');
    socket.on('disconnect', () => {
        console.log('User has been disconnected');
    });
});
const PORT = process.env.PORT || 8000;
httpServer.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
