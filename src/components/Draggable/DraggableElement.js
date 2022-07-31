import { Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";
import React from "react";
import styled from "styled-components";
import Todo from "../../assets/Todo.png";
import Doing from "../../assets/Doing.png";
import Done from "../../assets/Done.png";

const TableTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  color: #fff;
  border-radius: 10px;
  height: 50px;
  width: 400px;
  background-color: #212529;
  margin-bottom: 20px;
  position: fixed;
  top: 130px;

  &::before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 400px;
    height: 25px;
    background-color: #5b5e60;
  }
`;

const TableColumnWrapper = styled.div`
  width: 400px;
  margin-top: 50px;
`;

const DraggableElement = ({ prefix, elements }) => (
  <TableColumnWrapper>
    <TableTitle>
      <img
        src={
          (prefix === "Todo" && Todo) ||
          (prefix === "Doing" && Doing) ||
          (prefix === "Done" && Done)
        }
        alt={prefix}
        style={{ width: "30px", height: "30px" }}
      />
      {prefix}
    </TableTitle>
    {elements && (
      <Droppable droppableId={`${prefix}`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {elements.map((item, index) => (
              <ListItem key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )}
  </TableColumnWrapper>
);

export default DraggableElement;
