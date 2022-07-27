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

const NewCard = (props) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (
      !data.Title ||
      !data.Category ||
      !data.DueDate ||
      !data.Estimate ||
      !data.Importance ||
      !data.EstimateUnit
    ) {
      alert("Please fill all fields");
    } else {
      setData({ Importance: "Low" });
      props.handleAddCard(data);
    }
  };

  const [data, setData] = React.useState({ Importance: "Low" });

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
          name="Title"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <NewCardMiniTitle>Category:</NewCardMiniTitle>
        <NewCardCategory
          name="Category"
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <NewCardMiniTitle>Due Date:</NewCardMiniTitle>{" "}
        <NewCardDueDate
          name="DueDate"
          type="date"
          onChange={(e) => {
            handleChange(e);
          }}
        />{" "}
        <br />
        <NewCardMiniTitle>Estimate:</NewCardMiniTitle>{" "}
        <NewCardEstimate>
          Title:
          <NewCardEstimateText
            name="Estimate"
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          Unit:
          <NewCardEstimateUnit
            name="EstimateUnit"
            type="number"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </NewCardEstimate>
        <NewCardMiniTitle>Importance:</NewCardMiniTitle>{" "}
        <NewCardImportance
          name="Importance"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </NewCardImportance>
      </NewCardContent>
    </NewCardItem>
  );
};

export default NewCard;
