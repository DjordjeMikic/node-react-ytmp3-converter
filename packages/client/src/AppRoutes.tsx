import { RouteObject, useRoutes } from 'react-router-dom';

import { PAGES } from './constants/PAGES';
import { SocketProvider } from './context/SocketProvider';
import { About } from './pages/About/About';
import { Main } from './pages/Main/Main';

const routes: RouteObject[] = [
  {
    path: PAGES.MAIN,
    element: (
      <SocketProvider>
        <Main />
      </SocketProvider>
    ),
  },
  {
    path: PAGES.ABOUT,
    element: <About />,
  },
];

export const AppRoutes = () => {
  const appRoutes = useRoutes(routes);

  return appRoutes;
};
