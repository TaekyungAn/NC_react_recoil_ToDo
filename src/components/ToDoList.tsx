import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue } from "recoil";

interface IFrom {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: "To_Do" | "DOING" | "DONE";
}

const toDoState = atom<IToDo[]>({
  key: "toDo",

  default: [],
});

function ToDoList() {
  // vlaue와 변경함수 둘 다 갖으려면 아래 useRecoilState사용
  const [toDos, setToDos] = useRecoilState(toDoState);
  // 따로 사용 시 아래처럼 사용
  // const value = useRecoilValue(toDoState);
  // const modFn = useRecoilState(toDoState);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFrom>();

  const onSubmit = ({ toDo }: IFrom) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "To_Do" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Please write to do" })}
          placeholder="Write a to do"
        />
        <span>{errors.toDo?.message}</span>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
