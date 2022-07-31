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
import { importance } from "../../config/config";

const ListItem = ({ item, index }) => {
  const [editMode, setEditMode] = React.useState(false);
  const [selecteValue, setSelecteValue] = React.useState("");
  // add state for edit mode
  const [data, setData] = React.useState({});

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleEditMode = (id) => {
    if (editMode) {
      // exexute when disabling edit mode
      console.log();
      // dataArray["Doing"].filter((item) => item.id === id)[0]
      // dataArray["Todo"].filter((item) => item.id === id)[0]
      // dataArray["Done"].filter((item) => item.id === id)[0]
    }
    setEditMode(!editMode);
    setData({ ...data, id });
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
                onClick={() => handleEditMode(item.id)}
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
                    name="Title"
                    type="text"
                    defaultValue={item.category}
                    onChange={(e) => handleChange(e)}
                  />
                  <Input
                    name="DueDate"
                    type="date"
                    defaultValue={newDate.toLocaleDateString()}
                    onChange={(e) => handleChange(e)}
                  />
                  <EstimateInput>
                    <Input
                      name="Estimate"
                      type="number"
                      defaultValue={item.estimate}
                      onChange={(e) => handleChange(e)}
                    />
                    <Input
                      name="EstimateUnit"
                      type="text"
                      defaultValue={item.estimateUnit}
                      onChange={(e) => handleChange(e)}
                    />
                  </EstimateInput>
                  <ImportanceDropDown
                    name="Importance"
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
