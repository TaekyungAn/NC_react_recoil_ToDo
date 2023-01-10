import { useRecoilValue } from "recoil";
import { toDoSelector, toDoState } from "./atoms";
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
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDo.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
