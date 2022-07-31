import React, { useEffect } from "react";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { data } from "../../data";
import NewCard from "../NewCardItem/NewCard";
import { ListGrid, MainPageWrapper } from "./DragListStyles";
import axios from "axios";
import { fetchLink } from "../../config/config";

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
  const [elements, setElements] = React.useState();
  const [data, setData] = React.useState();
  const [searchValue, setSearchValue] = React.useState("");

  // fetch data from server
  useEffect(async () => {
    const response = await axios.get(`${fetchLink}/api/users/1`);
    response.data[0].cards &&
      response.data[0].cards.map((item) => {
        switch (item.stateId) {
          case 1:
            item.prefix = "Todo";
            break;
          case 2:
            item.prefix = "Doing";
            break;
          case 3:
            item.prefix = "Done";
            break;
        }
        switch (item.importanceId) {
          case 1:
            item.importance = "Low";
            break;
          case 2:
            item.importance = "Medium";
            break;
          case 3:
            item.importance = "High";
            break;
        }
      });
    setData(response.data[0].cards);
  }, []);

  useEffect(() => {
    if (data) {
      let newElements = {
        Todo: [],
        Doing: [],
        Done: [],
      };
      data &&
        data.map((item) => {
          newElements[item.prefix].push(item);
        });
      setElements(newElements);
    }
  }, [data]);

  // update search value
  useEffect(() => {
    setSearchValue(props.searchValue.toLowerCase());
  }, [props.searchValue]);

  // track any change in the lists
  useEffect(() => {
    if (elements) {
      Object.keys(elements).forEach((key) => {
        elements[key].map((item) => {
          // check the changed item is in the list
          if (item.prefix !== key) {
            item.prefix = key;
            handlePrefixChange(item);
          }
        });
      });
    }
  }, [elements]);

  let filteredTodo = [];
  let filteredDoing = [];
  let filteredDone = [];

  if (elements) {
    filteredTodo = elements["Todo"].filter((element) => {
      if (searchValue == "") {
        return element;
      } else {
        return element.title.toLowerCase().includes(searchValue);
      }
    });
    filteredDoing = elements["Doing"].filter((element) => {
      if (searchValue == "") {
        return element;
      } else {
        return element.title.toLowerCase().includes(searchValue);
      }
    });
    filteredDone = elements["Done"].filter((element) => {
      if (searchValue == "") {
        return element;
      } else {
        return element.title.toLowerCase().includes(searchValue);
      }
    });
  }

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
    // add the new data to the elemnts array
    // and send it to the server
    console.log(data);
  };

  const handlePrefixChange = async (item) => {
    item.prefix === "Todo" && (item.stateId = 1);
    item.prefix === "Doing" && (item.stateId = 2);
    item.prefix === "Done" && (item.stateId = 3);

    // update the item in the server
    // and update the item in the elements array
    let dataToUpdate = new FormData();
    dataToUpdate.append("id", parseInt(item.id));
    dataToUpdate.append("title", item.title);
    dataToUpdate.append("category", item.category);
    dataToUpdate.append("dueDate", item.dueDate);
    dataToUpdate.append("estimate", item.estimate);
    dataToUpdate.append("estimateUnit", item.estimateUnit);
    dataToUpdate.append("stateId", item.stateId);
    dataToUpdate.append("importanceId", item.importanceId);
    dataToUpdate.append("userId", item.userId);

    // send axios request with form data with try catch
    try {
      const response = await axios.put(
        `${fetchLink}/api/cards/` + item.id,
        dataToUpdate
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainPageWrapper>
      {props.addCard && <NewCard handleAddCard={handleAddCard} />}
      {elements !== {} && (
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
      )}
    </MainPageWrapper>
  );
}

export default DragList;
