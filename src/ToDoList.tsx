import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Email" />
        <input {...register("firstname")} placeholder="First Name" />
        <input {...register("lastname")} placeholder="Last Name" />
        <input {...register("username")} placeholder="Username" />
        <input {...register("password")} placeholder="Password" />
        <input {...register("password1")} placeholder="Password1" />

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
