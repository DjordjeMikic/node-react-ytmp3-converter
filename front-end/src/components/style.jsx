import styled from 'styled-components';

export const X = styled.h1`
  height: 44px;
  width: 44px;
  text-transform: uppercase;
  border-radius: 50%;
  cursor: pointer;
  color: #fafafa;
  background-color: #fa5271;
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1,1.1);
  }

  &:active {
    transform: scale(0.87,0.87);
  }
`;
