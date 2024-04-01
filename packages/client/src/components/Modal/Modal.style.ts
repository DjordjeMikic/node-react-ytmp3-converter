import { Flex } from '@/Shared.style';
import styled, { css, keyframes } from 'styled-components';

export const ModalContainer = styled(Flex)`
  height: 100vh;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.modalBg};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999999;
`;

export const ModalContent = styled(Flex)`
  height: 44%;
  width: 44%;
  justify-content: space-evenly;
  flex-direction: column;
  text-transform: uppercase;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.lightGrey};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.red.light};
  z-index: 4;
`;

export const Progress = styled(Flex)<{ width: number }>`
  width: ${({ width }) => width && `${width}%`};
  font-size: 1.75rem;
  align-self: flex-start;
  color: ${({ theme }) => theme.red.light};
  background-color: ${({ theme }) => theme.bgBlue};
`;

export const X = styled(Flex)`
  height: 44px;
  width: 44px;
  font-size: 2rem;
  text-transform: uppercase;
  border-radius: 50%;
  cursor: pointer;
  color: ${({ theme }) => theme.red.light};
  background-color: ${({ theme }) => theme.red.main};
  position: absolute;
  top: 20px;
  right: 20px;
  transition: all 0.4s;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  &:active {
    transform: scale(0.87, 0.87);
  }
`;

export const Btn = styled.p`
  font-size: 1.75rem;
  padding: 0;
  border-radius: 16px;
  color: ${({ theme }) => theme.red.light};
  background-color: ${({ theme }) => theme.bgBlue};
  margin-top: 4%;
`;

export const BtnLink = styled.a`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 6px 26px;
  border-radius: 16px;
  color: ${({ theme }) => theme.red.light};
  position: relative;
  transition: all 0.4s;

  &:hover {
    opacity: 0.75;
  }

  &:active {
    transform: scaleX(1.1);
  }
`;

const LoadingAnimation = keyframes`
  to { transform: scale(1.25,1.25) }
`;

export const CircleLoading = styled.div<{ anim: string }>`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.light};
  box-shadow: 0 0 2px 2px ${({ theme }) => theme.light};

  ${({ anim }) =>
    anim &&
    css`
      animation: ${LoadingAnimation} 0.5s ease-in-out backwards;
    `}
`;
