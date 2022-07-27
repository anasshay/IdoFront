import React from "react";
import DragList from "../../components/Draggable/DragList";
import Layout from "../../components/Layout/Layout";
import { colors } from "../../config/styles";
import { Main, MainPageWrapper } from "./styles";

function MainPage() {
  const [addCard, setAddCard] = React.useState(false);
  const [searchValue, setsearchValue] = React.useState("");
  const handleAddClick = () => {
    setAddCard(!addCard);
  };

  const handleSearch = (value) => {
    setsearchValue(value);
  };

  return (
    <Main backgroundColor={colors.backgroundColors.mainPageBackgroundColor}>
      <Layout handleAddClick={handleAddClick} handleSearch={handleSearch} />
      <MainPageWrapper>
        <DragList addCard={addCard} searchValue={searchValue}/>
      </MainPageWrapper>
    </Main>
  );
}

export default MainPage;
