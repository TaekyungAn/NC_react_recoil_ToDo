import { useForm } from "react-hook-form";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

type IForm = {
  add: string;
  NewCategory: string;
};

function ToDoList() {
  // const selectorOutput = useRecoilValue(toDoSelector);
  // 위 selectorOutput의 안에 있는 배열 꺼내는 방법 => 순서대로 이름 지정
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const [data, setData] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(toDos);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();

  const onValid = ({ add }: IForm) => {
    if (!add) {
      return;
    }
    setData((prev) => {
      return { ...prev, [add]: [] };
    });
    setValue("add", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        <option>{}</option>
      </select>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("NewCategory", {
            minLength: { value: 2, message: "Please write more than 1 letter" },
          })}
          placeholder="Add new category"
        />
        <span>{errors.NewCategory?.message}</span>
        <button>Add</button>
      </form>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
