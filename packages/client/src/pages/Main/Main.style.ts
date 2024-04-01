import styled from 'styled-components';

export const Form = styled.form`
  height: 75%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  p {
    user-select: none;
  }
`;

export const StyledInput = styled.input<{ error: string }>`
  width: 50%;
  font-size: 1.2rem;
  padding: 9px;
  border: none;
  outline: 1px solid ${({ error, theme }) => (error ? theme.red.main : theme.lightGrey)};
  margin: 2% 0 1% 0;
  position: relative;
  transition: all 0.4s;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.orange};
    outline-offset: 2px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.red.main};
`;

export const StyledButton = styled.button`
  width: 20%;
  font-size: 1.2rem;
  padding: 9px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.red.light};
  background-color: ${({ theme }) => theme.blue.main};
  margin: 2% 0;
  transition: all 0.4s;

  &:hover:not(:disabled) {
    opacity: 0.75;
    color: orange;
    transform: scale(1.1, 1.1);
  }

  &:active:not(:disabled) {
    transform: scale(0.8, 0.8);
  }

  &:disabled {
    cursor: default;
    opacity: 0.4;
  }
`;
