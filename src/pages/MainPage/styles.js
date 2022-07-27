import styled from "styled-components";

export const Main = styled.div`
  background-color: ${(props) => props.backgroundColor};
  height: 100vh;
  overflow: auto;
`;
export const MainPageWrapper = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: row !important;
  gap: 50px;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 30px;
  width: 100%;
  overflow-y: auto;
`;
