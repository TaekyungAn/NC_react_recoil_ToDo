import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  // 데이터가 유효하지 않으면 error를 나타내고, 모든 validation을 마치면 호출
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
        <input {...register("email", { required: true })} placeholder="Email" />
        <input
          {...register("firstname", { required: true })}
          placeholder="First Name"
        />
        <input
          {...register("lastname", { required: true })}
          placeholder="Last Name"
        />
        <input
          {...register("username", {
            required: true,
            minLength: {
              value: 2,
              message: "Your name is too short",
            },
          })}
          placeholder="Username"
        />
        <input
          {...register("password", { required: "password is required" })}
          placeholder="Password"
        />
        <input
          {...register("password1", { required: "password is required" })}
          placeholder="Password1"
        />

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
