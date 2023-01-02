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
type IForm = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password1: string;
};
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({ defaultValues: { email: "@naver.com" } });
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* 자바스크립트에서 validation(required)하면 html에서 해주는 것보다 보안이 잘 됨 */}
        <input
          {...register("email", {
            required: "email is reqired",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", { required: "Write here" })}
          placeholder="firstName"
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "Write here" })}
          placeholder="lastName"
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", { required: "Write here", minLength: 10 })}
          placeholder="username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "Write here",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
