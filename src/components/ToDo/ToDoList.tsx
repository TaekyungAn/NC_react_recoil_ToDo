import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../../atom";
import Category from "../Category/Category";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
const ToDoListWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    height: 85%;
    width: 85%;
  }
`;

const ToDoWrapper = styled.ul`
  margin: 0 15px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  console.log(toDos);
  return (
    <ToDoListWrapper>
      <div>
        <Category />
        <CreateToDo />
        <ToDoWrapper>
          {toDos.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ToDoWrapper>
      </div>
    </ToDoListWrapper>
  );
}
export default ToDoList;
