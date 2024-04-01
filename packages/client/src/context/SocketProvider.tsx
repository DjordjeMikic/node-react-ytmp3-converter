import { PropsWithChildren } from 'react';

import { socket, SocketContext } from './SocketContext';

export const SocketProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
);
