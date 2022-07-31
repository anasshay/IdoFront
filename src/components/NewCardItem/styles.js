import styled from "styled-components";
import { importance } from "../../config/config";

export const NewCardItem = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
  color: #fff;
  border-radius: 10px;
  height: fit-content;
  min-width: 380px;
  background-color: #212529;
  margin-top: 25px;
  z-index: 100;
  padding: 20px;
`;

export const NewCardHeader = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const SubmitButton = styled.img`
  width: 30px;
  height: 30px;
  float: right;
`;

export const NewCardMiniTitle = styled.h3`
  margin: 0;
  padding: 0;
`;
export const NewCardContent = styled.div`
  display: flex;
  flex-direction: column;

  color: #fff;
`;
export const NewCardTitle = styled.input`
  background-color: transparent;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 100;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1px 8px;
  width: 80%;
`;
export const NewCardCategory = styled.input`
  background-color: transparent;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 100;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1px 8px;
  width: 80%;
`;
export const NewCardDueDate = styled.input`
  background-color: transparent;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 100;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 1px 8px;
  width: 80%;
`;
export const NewCardEstimate = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const NewCardEstimateUnit = styled.input`
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
export const NewCardEstimateText = styled.input`
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

export const NewCardImportance = styled.select`
  width: 20%;
  height: 30px;
  color: #fff;
  background-color: ${(props) =>
    props.selected === importance.LOW.name
      ? "#39AC95"
      : props.selected === importance.MEDIUM.name
      ? "#FE913E"
      : props.selected === importance.HIGH.name
      ? "#DC3545"
      : "#212529"};
`;
