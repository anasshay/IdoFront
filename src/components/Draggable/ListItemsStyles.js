import styled from "styled-components";

export const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #212529;
  min-height: 250px;
  margin-bottom: 20px;
  margin-top: 40px;
  padding-left: 20px;
`;

export const CardTitle = styled.h3`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;

  & h4,
  & p {
    margin: 0;
    font-weight: 100;
  }

  & h4 {
    color: grey;
  }
`;
export const LeftContent = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  flex: 1;
`;
export const RightContent = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 20px;
  flex: 4;
`;

export const Importance = styled.p`
  height: 30px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 5px 10px;
  background-color: ${(props) =>
    props.importance === "Low"
      ? "#39AC95"
      : props.importance === "Medium"
      ? "#FE913E"
      : props.importance === "High"
      ? "#DC3545"
      : "#212529"};
`;

export const EditIcon = styled.img`
  height: 25px;
  float: right;
  cursor: pointer;
`;

export const EstimateInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 10px;
`;

export const Input = styled.input`
  width: 80%;
  background-color: transparent;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 100;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1px 8px;
`;

export const ImportanceDropDown = styled.select`
  width: 20%;
  height: 30px;
  color: #fff;
  background-color: ${(props) =>
    props.selected === "Low"
      ? "#39AC95"
      : props.selected === "Medium"
      ? "#FE913E"
      : props.selected === "High"
      ? "#DC3545"
      : "#212529"};
`;