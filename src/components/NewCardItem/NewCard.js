import React from "react";
import {
  NewCardCategory,
  NewCardContent,
  NewCardDueDate,
  NewCardEstimate,
  NewCardEstimateText,
  NewCardEstimateUnit,
  NewCardHeader,
  NewCardImportance,
  NewCardItem,
  NewCardMiniTitle,
  NewCardTitle,
  SubmitButton,
} from "./styles";
import plusButton from "../../assets/plus.png";
import { importance } from "../../config/config";

const NewCard = (props) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !data.title ||
      !data.category ||
      !data.dueDate ||
      !data.estimate ||
      !data.importance ||
      !data.estimateUnit
    ) {
      alert("Please fill all fields");
    } else {
      props.handleAddCard(data);
      setData({ Importance: importance.LOW.name });
    }
  };

  const [data, setData] = React.useState({ importance: importance.LOW.name });

  return (
    <NewCardItem>
      <NewCardHeader>
        <h3>Add new Card</h3>
        <SubmitButton
          src={plusButton}
          onClick={() => handleSubmit()}
        ></SubmitButton>
      </NewCardHeader>
      <NewCardContent>
        <NewCardMiniTitle>Title:</NewCardMiniTitle>{" "}
        <NewCardTitle
          name="title"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <NewCardMiniTitle>Category:</NewCardMiniTitle>
        <NewCardCategory
          name="category"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <NewCardMiniTitle>Due Date:</NewCardMiniTitle>{" "}
        <NewCardDueDate
          name="dueDate"
          type="date"
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <NewCardMiniTitle>Estimate:</NewCardMiniTitle>{" "}
        <NewCardEstimate>
          Count:
          <NewCardEstimateText
            name="estimate"
            type="number"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          Unit:
          <NewCardEstimateUnit
            name="estimateUnit"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </NewCardEstimate>
        <NewCardMiniTitle>Importance:</NewCardMiniTitle>{" "}
        <NewCardImportance
          name="importance"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>{importance.LOW.name}</option>
          <option>{importance.MEDIUM.name}</option>
          <option>{importance.HIGH.name}</option>
        </NewCardImportance>
      </NewCardContent>
    </NewCardItem>
  );
};

export default NewCard;
