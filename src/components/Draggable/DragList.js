import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableElement from "./DraggableElement";
import { data } from "../../data";
import NewCard from "../NewCardItem/NewCard";
import { ListGrid, MainPageWrapper } from "./DragListStyles";
import axios from "axios";
import { fetchLink } from "../../config/config";
import { importance } from "../../config/config";

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
          case importance.LOW.id:
            item.importance = importance.LOW.name;
            break;
          case importance.MEDIUM.id:
            item.importance = importance.MEDIUM.name;
            break;
          case importance.HIGH.id:
            item.importance = importance.HIGH.name;
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

  const handleAddCard = async (data) => {
    // add the new data to the elemnts array
    // and send it to the server
    data.userId = 1;
    data.stateId = 1;
    data.importance == importance.LOW.name &&
      (data.importanceId = importance.LOW.id);
    data.importance == importance.MEDIUM.name &&
      (data.importanceId = importance.MEDIUM.id);
    data.importance == importance.HIGH.name &&
      (data.importanceId = importance.HIGH.id);

    // append datat to a new formdata object
    const formData = new FormData();
    // map through the data object
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    // send the formdata to the server
    const response = await axios.post(`${fetchLink}/api/cards`, formData);
    console.log(response);
    let newItem = response.data;
    newItem.importanceId == importance.LOW.id &&
      (newItem.importance = importance.LOW.name);
    newItem.importanceId == importance.MEDIUM.id &&
      (newItem.importance = importance.MEDIUM.name);
    newItem.importanceId == importance.HIGH.id &&
      (newItem.importance = importance.HIGH.name);

    // update the elements array
    setElements((prevState) => {
      let newElements = { ...prevState };
      newElements["Todo"].push(response.data);
      return newElements;
    });
    props.closeAddCard(false);
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

  const handleCardUpdate = (item) => {
    // map through filteredData and find the item
    Object.keys(filteredData).forEach((key) => {
      filteredData[key].map((element) => {
        if (element.id === item.id) {
          element.title = item.title;
          element.category = item.category;
          element.dueDate = item.dueDate;
          element.estimate = item.estimate;
          element.estimateUnit = item.estimateUnit;
          element.importanceId = item.importanceId;
          element.importance = item.importance;
          element.state = item.state;
          element.stateId = item.stateId;
          element.userId = item.userId;
        }
      });
    });
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
                updateCard={handleCardUpdate}
              />
            ))}
          </ListGrid>
        </DragDropContext>
      )}
    </MainPageWrapper>
  );
}

export default DragList;
