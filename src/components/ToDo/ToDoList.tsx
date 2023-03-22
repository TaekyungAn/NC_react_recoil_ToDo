import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../../atom";
import Category from "../Category/Category";
import CreateCategory from "../Category/CreateCategory";
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

const ButtonList = styled.div`
  display: flex;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  console.log(toDos);
  return (
    <ToDoListWrapper>
      <div>
        <Category />
        <CreateToDo />
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </div>
    </ToDoListWrapper>
  );
}
export default ToDoList;
