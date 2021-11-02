const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const { log } = console;

// Middleware
app.use(require('cors')());
app.use(express.static(path.join(__dirname, 'front-end', 'build')));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Add sockets to routes
app.set('socketio', io);

// Custom made routes
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'));
})

// Connected Sockets
io.on('connection', socket => {

  log('Connection established');

  socket.on('disconnect', a => {
    log('User has been disconnected');
  })
});

const PORT = process.env.PORT || 8000;

http.listen(PORT, () => {
  log(`Server is running on ${PORT}`);
})
