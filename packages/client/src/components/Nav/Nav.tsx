import { PAGES } from '@/constants/PAGES';
import { useLocation } from 'react-router-dom';

import { LinksContainer, NavContainer, StyledLink } from './Nav.style';

export const Nav = () => {
  const { pathname } = useLocation();

  return (
    <NavContainer>
      <h1>Youtube to audio/video Converter</h1>
      <LinksContainer className="flex">
        <StyledLink to={PAGES.MAIN} active={pathname === '/' ? 'true' : ''}>
          Home
        </StyledLink>
        <StyledLink to={PAGES.ABOUT} active={pathname === '/about' ? 'true' : ''}>
          About
        </StyledLink>
      </LinksContainer>
    </NavContainer>
  );
};
