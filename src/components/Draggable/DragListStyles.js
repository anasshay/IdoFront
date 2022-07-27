import styled from "styled-components";

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

export const ListGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
`;