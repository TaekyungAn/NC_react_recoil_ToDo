import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     //**es6문법 */
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(toDo);
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} placeholder="Write a to do" value={toDo} />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* 자바스크립트에서 validation(required)하면 html에서 해주는 것보다 보안이 잘 됨 */}
        <input {...register("Email", { required: true })} placeholder="Email" />
        <input
          {...register("FirstName", { required: true })}
          placeholder="FirstName"
        />
        <input
          {...register("LastName", { required: true })}
          placeholder="LastName"
        />
        <input
          {...register("username", { required: true, minLength: 10 })}
          placeholder="Username"
        />
        <input
          {...register("Password", { required: true, minLength: 5 })}
          placeholder="Password"
        />
        <input
          {...register("Password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
