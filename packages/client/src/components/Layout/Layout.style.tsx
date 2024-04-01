import styled from 'styled-components';

export const LayoutContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const LayoutContent = styled.div`
  height: calc(100vh - 71px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start !important;
  flex-direction: column;
  padding: 20px;
`;
