import styled from 'styled-components';

export const Blur = styled.div`
  height: calc(100vh - 71px);
  width: 100%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const ConverterContainer = styled.div`
  height: 44%;
  width: 44%;
  border: 2px solid #e3e3e3;
  border-radius: 16px;
  background-color: #fafafa;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
`;

export const Pc = styled.h1`
  font-size: 2rem;
  padding: 9px 26px;
  border-radius: 16px;
  color: #fafafa;
  background-color: #0d2a94;
  margin-top: 4%;
`;
