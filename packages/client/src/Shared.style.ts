import styled from 'styled-components';

export const Flex = styled.div<{ spacing?: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ spacing }) => spacing && `${spacing}em`};
`;
