import React, { useState } from "react";
import styled from "styled-components";
import { IToDo } from "../../atom";
import Checkbox from "../UI/CheckBox";

const ToDoWrapper = styled.li``;

function ToDo({ text }: IToDo) {
  const [todo, setTodo] = useState(false);

  return (
    <ToDoWrapper>
      <Checkbox checked={todo} onChange={setTodo}>
        {text}
      </Checkbox>
    </ToDoWrapper>
  );
}
export default ToDo;
