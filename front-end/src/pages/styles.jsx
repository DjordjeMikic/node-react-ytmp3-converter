import styled from 'styled-components';

export const PageContainer = styled.div`
  height: calc(100vh - 71px);
  width: 100%;
  justify-content: flex-start !important;
  padding: 16px;
  position: relative;
`;

export const Form = styled.form`
  height: 75%;
  width: 100%;
  justify-content: flex-start !important;
  position: relative;
`;

export const Input = styled.input`
  width: 50%;
  font-size: 1.2rem;
  padding: 9px;
  border: none;
  outline: 1px solid #e3e3e3;
  margin: 2% 0;
  position: relative;
  transition: all 0.4s;

  &:focus {
    outline: 1px solid orange;
    outline-offset: 2px;
  }
`;

export const Btn = styled.button`
  width: 28%;
  font-size: 1.2rem;
  padding: 9px 0;
  border: none;
  border-radius: 6px;
  color: #fafafa;
  background-color: #0d2a94;
  margin: 2% 0;
  transition: all 0.4s;

  &:hover {
    opacity: 0.75;
    color: orange;
    transform: scale(1.1,1.1);
  }

  &:active {
    transform: scale(0.8,0.8);
  }
`;
