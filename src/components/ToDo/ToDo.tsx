import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { checkedState, IToDo } from "../../atom";
import Checkbox from "../UI/CheckBox";

const ToDoWrapper = styled.li``;

function ToDo({ text, id }: IToDo) {
  const [checked, setChecked] = useRecoilState(checkedState);
  const [todo, setTodo] = useState(false);
  // setChecked(todo);
  // console.log("checked", checked);

  return (
    <ToDoWrapper>
      <Checkbox id={id} checked={todo} onChange={setTodo}>
        {text}
      </Checkbox>
    </ToDoWrapper>
  );
}
export default ToDo;
