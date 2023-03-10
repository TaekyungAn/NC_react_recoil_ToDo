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

const SortingCategory = styled.div``;
const ToDos = styled.ul``;

function ToDoList({ text, category, id, checked }: IToDo) {
  const toDos = useRecoilValue(toDoSelector);
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(newCategoryState);
  const defaultCategory = useRecoilValue(categoryState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("i wanna go to", event.currentTarget.name);
    const {
      // 눌리는 버튼이름 나타내기
      currentTarget: { name },
    } = event;
    console.log(name);

    // 버튼을 누르면, ture값인 todo들의 카테고리를 클릭된 버튼으로 바꾼다.

    // atom의 value값을 바꿀 수 있게 해주는 함수***
    setToDos((oldToDos) => {
      // 작성된 todo리스트 중에서 클릭되는 것 인덱스 값 불러오기
      // => 작성된 todo리스트 중에서 todo가 true 인덱스 값 불러오기
      // 1. ture가 된 todo를 배열에 담는다.
      // 2. 배열에 담긴 각 todo들의 category를
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const checkedIndex = oldToDos.findIndex((toDo) => toDo.checked === true);
      console.log("checkedIndex", checkedIndex);

      // 바뀐 카테고리(객체)
      const newToDo = { text, id, category: name as any, checked };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
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
        <SortingCategory>
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
        </SortingCategory>
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
