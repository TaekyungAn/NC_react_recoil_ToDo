import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: number;
  password1: number;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFrom>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // 데이터가 유효하지 않으면 error를 나타내고, 모든 validation을 마치면 호출
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
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstname", { required: "First Name is required" })}
          placeholder="First Name"
        />
        <span>{errors?.firstname?.message}</span>

        <input
          {...register("lastname", { required: "Last Name is required" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastname?.message}</span>

        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 2,
              message: "Your name is too short",
            },
          })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>

        <input
          {...register("password", { required: "password is required" })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", { required: "password is required" })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
