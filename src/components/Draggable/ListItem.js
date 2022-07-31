import { Draggable } from "react-beautiful-dnd";
import React from "react";
import editIcon from "../../assets/edit.png";
import {
  CardContent,
  CardTitle,
  EditIcon,
  EstimateInput,
  Importance,
  ImportanceDropDown,
  Input,
  LeftContent,
  RightContent,
  TableContent,
} from "./ListItemsStyles";
import { fetchLink, importance } from "../../config/config";
import axios from "axios";

const ListItem = ({ item, index, updateCard }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [selecteValue, setSelecteValue] = React.useState("");
  // add state for edit mode
  const [data, setData] = React.useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleEditMode = async (item) => {
    if (editMode) {
      // exexute when disabling edit mode

      // create new formdata and set the initial value to item
      const dataToEdit = new FormData();
      data.title
        ? dataToEdit.set("title", data.title)
        : dataToEdit.set("title", item.title);
      data.category
        ? dataToEdit.set("category", data.category)
        : dataToEdit.set("category", item.category);
      data.dueDate
        ? dataToEdit.set("dueDate", data.dueDate)
        : dataToEdit.set("dueDate", item.dueDate);
      data.estimate
        ? dataToEdit.set("estimate", data.estimate)
        : dataToEdit.set("estimate", item.estimate);
      data.estimateUnit
        ? dataToEdit.set("estimateUnit", data.estimateUnit)
        : dataToEdit.set("estimateUnit", item.estimateUnit);

      if (data.importance) {
        switch (data.importance) {
          case importance.LOW.name:
            dataToEdit.set("importanceId", 1);
            break;
          case importance.MEDIUM.name:
            dataToEdit.set("importanceId", 2);
            break;
          case importance.HIGH.name:
            dataToEdit.set("importanceId", 3);
            break;
        }
      } else {
        dataToEdit.set("importanceId", item.importanceId);
      }

      dataToEdit.set("id", item.id);
      dataToEdit.set("stateId", item.stateId);
      dataToEdit.set("userId", item.userId);

      // send the data to the server
      // send edit request with try catch
      try {
        const response = await axios.put(
          `${fetchLink}/api/cards/` + item.id,
          dataToEdit
        );
        if (response.data.cardModel) {
          var obj = response.data.cardModel;
          obj.importanceId == 1 && (obj.importance = importance.LOW.name);
          obj.importanceId == 2 && (obj.importance = importance.MEDIUM.name);
          obj.importanceId == 3 && (obj.importance = importance.HIGH.name);
          obj.stateId == 1 && (obj.prefix = "Todo");
          obj.stateId == 2 && (obj.prefix = "Doing");
          obj.stateId == 3 && (obj.prefix = "Done");
          updateCard(obj);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setEditMode(!editMode);
    setData({ ...data, id: item.id });
  };

  const newDate = new Date(item.dueDate);

  return (
    <Draggable draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => {
        return (
          <TableContent
            ref={provided.innerRef}
            snapshot={snapshot}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardTitle>
              {item.title}
              <EditIcon
                src={editIcon}
                alt="Edit card"
                onClick={() => handleEditMode(item)}
              />
            </CardTitle>
            <CardContent>
              <LeftContent>
                <h4>Category</h4>
                <h4>Due Date</h4>
                <h4>Estimate</h4>
                <h4>Importance</h4>
              </LeftContent>
              {!editMode && (
                <RightContent>
                  <p>{item.category}</p>
                  <p>{newDate.toLocaleDateString()}</p>
                  <p>
                    {item.estimate} {item.estimateUnit}
                  </p>
                  <Importance importance={item.importance}>
                    {item.importance}
                  </Importance>
                </RightContent>
              )}
              {/* render in edit mode */}
              {editMode && (
                <RightContent>
                  <Input
                    name="category"
                    type="text"
                    defaultValue={item.category}
                    onChange={(e) => handleChange(e)}
                  />
                  <Input
                    name="dueDate"
                    type="date"
                    defaultValue={newDate.toLocaleDateString()}
                    onChange={(e) => handleChange(e)}
                  />
                  <EstimateInput>
                    <Input
                      name="estimate"
                      type="number"
                      defaultValue={item.estimate}
                      onChange={(e) => handleChange(e)}
                    />
                    <Input
                      name="estimateUnit"
                      type="text"
                      defaultValue={item.estimateUnit}
                      onChange={(e) => handleChange(e)}
                    />
                  </EstimateInput>
                  <ImportanceDropDown
                    name="importance"
                    importance={item.importance}
                    defaultValue={item.importance}
                    selected={selecteValue || item.importance}
                    onChange={(e) => {
                      setSelecteValue(e.target.value);
                      handleChange(e);
                    }}
                  >
                    <option
                      value={importance.LOW.name}
                      style={{ backgroundColor: "#39AC95" }}
                    >
                      {importance.LOW.name}
                    </option>
                    <option
                      value={importance.MEDIUM.name}
                      style={{ backgroundColor: "#FE913E" }}
                    >
                      {importance.MEDIUM.name}
                    </option>
                    <option
                      value={importance.HIGH.name}
                      style={{ backgroundColor: "#DC3545" }}
                    >
                      {importance.HIGH.name}
                    </option>
                  </ImportanceDropDown>
                </RightContent>
              )}
            </CardContent>
          </TableContent>
        );
      }}
    </Draggable>
  );
};

export default ListItem;
