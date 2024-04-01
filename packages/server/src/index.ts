import cors from 'cors';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

import { getMp3, getVideo } from './controllers';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(cors());

app.set('socketio', io);
app.get('/', (req, res) => {
  res.status(200).json('Hello World');
});

app.get('/audio', getMp3);
app.get('/video', getVideo);

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
