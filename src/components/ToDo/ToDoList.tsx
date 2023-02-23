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
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  console.log(toDos);
  return (
    <ToDoListWrapper>
      <div>
        <h1>To Dos</h1>
        <hr />
        <Category />
        <CreateCategory />
        <CreateToDo />
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </div>
    </ToDoListWrapper>
  );
}

export default ToDoList;
