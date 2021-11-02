import styled from 'styled-components';
import { Pc } from '../converting/style';

export const Btn = styled(Pc)`
  padding: 0 !important;
`;

export const BtnLink = styled.a`
  height: 100%;
  width: 100%;
  text-decoration: none;
  padding: 6px 26px;
  border-radius: 16px;
  color: #fafafa;
  position: relative;
  transition: all 0.4s;
  
  &:hover {
    background-color: #00d9ff;
  }
  
  &:active {
    transform: scaleX(1.1);
  }
`;
