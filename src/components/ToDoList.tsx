import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, toDoSelector, toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // vlaue와 변경함수 둘 다 갖으려면 아래 useRecoilState사용
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // 따로 사용 시 아래처럼 사용
  // const toDos = useRecoilValue(toDoState);
  // const modFn = useRecoilState(toDoState);

  // const selectorOutput = useRecoilValue(toDoSelector);
  // 위 selectorOutput의 안에 있는 배열 꺼내는 방법 => 순서대로 이름 지정
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value);
  };
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
