import io from 'socket.io-client';

export const HOST = '';

export const ios = io(
  HOST,
  { transports: ['websocket', 'polling', 'flashsocket'] }
);
