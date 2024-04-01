import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { Flex } from '@/Shared.style';

export const NavContainer = styled(Flex)`
  height: 71px;
  width: 100%;
  justify-content: space-between !important;
  padding: 0 26px;
  color: ${({ theme }) => theme.red.light};
  background-color: ${({ theme }) => theme.bgBlue};
  position: relative;

  h1 {
    font-size: 1em;
  }

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const LinksContainer = styled(Flex)`
  height: 100%;
  flex: 0 0 29%;
  justify-content: space-evenly !important;
  padding: 0 9px;
`;

export const StyledLink = styled(Link)<{ active: string }>`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0 9px;
  color: ${({ theme }) => theme.red.light};
  position: relative;
  transition: all 0.4s;

  &:hover {
    color: ${({ theme }) => theme.red.main};
  }

  ${({ active }) =>
    active &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.red.main};
    `}
`;
