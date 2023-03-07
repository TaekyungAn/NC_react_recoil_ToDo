import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  categoryState,
  IToDo,
  newCategoryState,
  toDoSelector,
  toDoState,
} from "../../atom";
import Category from "../Category/Category";
import CreateCategory from "../Category/CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const ToDoListWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    height: 85%;
    width: 85%;
  }
`;

const MoveCategory = styled.div``;
const ToDos = styled.ul``;

function ToDoList({ text, category, id }: IToDo) {
  const toDos = useRecoilValue(toDoSelector);
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(newCategoryState);
  const defaultCategory = useRecoilValue(categoryState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("i wanna go to", event.currentTarget.name);
    const {
      // 눌리는 버튼 나타내기
      currentTarget: { name },
    } = event;

    // atom의 value값을 바꿀 수 있게 해주는 함수***
    setToDos((oldToDos) => {
      // 작성된 todo리스트 중에서 클릭되는 것 인덱스 값 불러오기
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // 바뀐 카테고리(객체)
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
    console.log(event);
  };

  const deleteTodo = () => {
    if (window.confirm(`${defaultCategory}목록에서 제거하시겠습니까?`)) {
      setToDos((oldToDos) => {
        const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
        return [
          ...oldToDos.slice(0, targetIndex),
          ...oldToDos.slice(targetIndex + 1),
        ];
      });
    }
  };
  console.log(toDos);
  return (
    <ToDoListWrapper>
      <div>
        <Category />
        <CreateCategory />
        <CreateToDo />
        <MoveCategory>
          {Object.values(categories).map(
            (existCategory) =>
              existCategory !== defaultCategory && (
                <button
                  disabled={existCategory === category}
                  key={existCategory}
                  onClick={onClick}
                  name={existCategory}
                >
                  {existCategory}
                </button>
              )
          )}
          <button onClick={deleteTodo}>delete</button>
        </MoveCategory>
        <ToDos>
          {toDos.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </ToDos>
      </div>
    </ToDoListWrapper>
  );
}

export default ToDoList;
