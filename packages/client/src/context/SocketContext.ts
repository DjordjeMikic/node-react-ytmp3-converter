import { createContext } from 'react';
import io, { Socket } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_BE_HOST, { transports: ['websocket'] });

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const SocketContext = createContext<{ socket: Socket<any, any> }>({ socket });
