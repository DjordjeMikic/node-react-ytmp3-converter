import io from 'socket.io-client';

// Set this
export const HOST = '';

export const ios = io(
  HOST,
  { transports: ['websocket', 'polling', 'flashsocket'] }
);
