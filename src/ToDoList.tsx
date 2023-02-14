import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface IFrom {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: number;
  password1: number;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFrom>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  // 데이터가 유효하지 않으면 error를 나타내고, 모든 validation을 마치면 호출
  const onValid = (data: IFrom) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "password are not the same" },
        { shouldFocus: true }
      );
    }
    // 백엔드 통신이 안된다고 가정했을때
    // setError("extraError", { message: "Server is offline" });
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
          {...register("firstname", {
            required: "First Name is required",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noNick: (value) =>
                value.includes("nick") ? "no nick allowed" : true,
            },
          })}
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
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 5,
              message: "Your password is too short",
            },
          })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", { required: "password is required" })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
