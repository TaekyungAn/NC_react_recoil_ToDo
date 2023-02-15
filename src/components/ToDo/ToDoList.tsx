import React from "react";
import { useRecoilValue } from "recoil";
import { toDoSelector } from "../../atom";
import Category from "../Category/Category";
import CreateCategory from "../Category/CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  console.log(toDos);
  return (
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
  );
}

export default ToDoList;
