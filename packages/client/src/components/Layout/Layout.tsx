import React, { PropsWithChildren } from 'react';

import { Nav } from '../Nav/Nav';
import { LayoutContainer, LayoutContent } from './Layout.style';

export const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <LayoutContainer>
    <Nav />
    <LayoutContent>{children}</LayoutContent>
  </LayoutContainer>
);
