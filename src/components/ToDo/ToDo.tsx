import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, newCategoryState, toDoState } from "../../atom";

function ToDo({ text, category, id }: IToDo) {
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

  return (
    <li>
      {text}
      {Object.values(categories).map(
        (availableCategory) =>
          availableCategory !== defaultCategory && (
            <button
              disabled={availableCategory === category}
              key={availableCategory}
              onClick={onClick}
              name={availableCategory}
            >
              {availableCategory}
            </button>
          )
      )}
      <button onClick={deleteTodo}>delete</button>
    </li>
  );
}
export default ToDo;
