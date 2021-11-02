import styled from 'styled-components';

export const EContainer = styled.div`
  width: 50%;
  justify-content: flex-start !important;
  font-size: 1.4rem;
  padding: 19px;
  text-overflow: ellipse;
  border: 1px solid #1a6339;
  border-radius: 16px;
  color: #1a6339;
  background-color: #70ffac;
  margin: 2% 0;
  position: relative;

  span {
    font-size: 1.75rem;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);

    &:hover {
      transform: translateY(-50%) scale(1.1,1.1);
    }

  }
`;
