import { MdOutlinePlayArrow, MdOutlineVideoCameraBack } from 'react-icons/md';
import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.label`
  height: 44px;
  width: 88px;
  border-radius: 21px;
  padding: 6px;
  background-color: ${({ theme }) => theme.bgBlue};
  cursor: pointer;
  position: relative;
`;

export const CheckboxInner = styled.div<{ video: string }>`
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: aliceblue;
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  transition: all 0.4s;

  ${({ video }) =>
    video &&
    css`
      left: 100%;
      transform: translate(calc(-100% - 3px), -50%);
    `}
`;

const styledIcon = css`
  height: 25px;
  width: 25px;
  z-index: 99999;
`;

export const StyledMusic = styled(MdOutlinePlayArrow)`
  ${styledIcon}
`;

export const StyledVideo = styled(MdOutlineVideoCameraBack)`
  ${styledIcon}
`;
