import { useForm } from "react-hook-form";
interface IFrom {
  toDo: string;
}
function ToDoList() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFrom>();
  const onSubmit = (data: IFrom) => {
    console.log("add to do ", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Please write to do" })}
          placeholder="Write a to do"
        />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
