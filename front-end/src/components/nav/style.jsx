import styled from 'styled-components';

export const NavContainer = styled.nav`
  height: 71px;
  width: 100%;
  justify-content: space-between !important;
  padding: 0 26px;
  color: #fafafa;
  background-color: #0d2a94;
  position: relative;
`;

export const LinksContainer = styled.div`
  height: 100%;
  flex: 0 0 29%;
  justify-content: space-evenly !important;
  padding: 0 9px;
  
  a {
    height: 100%;
    font-size: 1.4rem;
    text-decoration: none;
    padding: 0 9px;
    color: #fafafa;
    position: relative;
    transition: all 0.4s;
    
    &:hover {
      color: #fa5271;
    }
    
  }
`;
