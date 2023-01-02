import React, { useState } from "react";

function ToDoList() {
  const [toDo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    //**es6문법 */
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(toDo);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} placeholder="Write a to do" value={toDo} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
