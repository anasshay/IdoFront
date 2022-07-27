import styled from "styled-components";

export const TableColumnWrapper = styled.div`
  width: 400px;
  margin-top: 50px;
`;

export const TableTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  color: #fff;
  border-radius: 10px;
  height: 50px;
  width: 400px;
  background-color: ${(props) => props.backgroundColor};
  margin-bottom: 20px;
  position: fixed;
  top: 130px;

  &::before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 400px;
    height: 25px;
    background-color: #5b5e60;
  }
`;

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  min-height: 250px;
  margin-bottom: 20px;
  margin-top: 40px;
  padding-left: 20px;
`;

export const CardTitle = styled.h3`
  color: #fff;
`;
export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;

  & h4, & p {
    margin: 0;
    font-weight: 100;
  }

  & h4 {
    color: grey;
  }
  
`;

export const TitleImage = styled.img`
  height: 80%;
`;
export const Title = styled.h2``;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  flex: 1;
`;
export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  flex: 4;
`;
