import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { dataArray } from "../../data";
import NewCard from "../NewCardItem/NewCard";
import { ListGrid, MainPageWrapper } from "./DragListStyles";

const removeFromList = (list, index) => {
  const result = Array.from(list);
  const [removed] = result.splice(index, 1);
  return [removed, result];
};

const addToList = (list, index, element) => {
  const result = Array.from(list);
  result.splice(index, 0, element);
  return result;
};

const lists = ["Todo", "Doing", "Done"];

function DragList(props) {
  const [elements, setElements] = React.useState(dataArray);
  const [searchValue, setSearchValue] = React.useState("");

  useEffect(() => {
    setElements(dataArray);
  }, []);

  useEffect(() => {
    setSearchValue(props.searchValue.toLowerCase());
  }, [props.searchValue]);

  // track any change in the lists
  useEffect(() => {
    console.log(`elements:`, elements);
  }, [elements]);

  let filteredTodo = elements["Todo"].filter((element) => {
    if (searchValue == "") {
      return element;
    } else {
      return element.content.Title.toLowerCase().includes(searchValue);
    }
  });
  let filteredDoing = elements["Doing"].filter((element) => {
    if (searchValue == "") {
      return element;
    } else {
      return element.content.Title.toLowerCase().includes(searchValue);
    }
  });
  let filteredDone = elements["Done"].filter((element) => {
    if (searchValue == "") {
      return element;
    } else {
      return element.content.Title.toLowerCase().includes(searchValue);
    }
  });

  let filteredData = {
    Todo: filteredTodo,
    Doing: filteredDoing,
    Done: filteredDone,
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  const handleAddCard = (data) => {
    //add the new data to the elemnts array
    // and send it to the server
    console.log(data);
  };

  return (
    <MainPageWrapper>
      {props.addCard && <NewCard handleAddCard={handleAddCard} />}
      <DragDropContext onDragEnd={onDragEnd}>
        <ListGrid>
          {lists.map((listKey) => (
            <DraggableElement
              elements={filteredData[listKey]}
              key={listKey}
              prefix={listKey}
            />
          ))}
        </ListGrid>
      </DragDropContext>
    </MainPageWrapper>
  );
}

export default DragList;
