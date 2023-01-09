import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  // vlaue와 변경함수 둘 다 갖으려면 아래 useRecoilState사용
  // const [toDos, setToDos] = useRecoilState(toDoState);
  // 따로 사용 시 아래처럼 사용
  const toDos = useRecoilValue(toDoState);
  // const modFn = useRecoilState(toDoState);
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
