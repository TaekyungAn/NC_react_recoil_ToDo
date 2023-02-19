import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Categories, IToDo, newCatState, toDoState } from "../../atom";

function ToDo({ text, category, id }: IToDo) {
  const newCategories = useRecoilValue(newCatState);
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("i wanna go to", event.currentTarget.name);
    const {
      // 눌리는 버튼 나타내기
      currentTarget: { name },
    } = event;

    // atom의 value값을 바꿀 수 있게 해주는 함수
    setToDos((oldToDos) => {
      // 작성된 todo리스트 중에서 클릭되는 것 인덱스 값 불러오기
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      // 기존 카테고리(객체)
      const oldToDo = oldToDos[targetIndex];
      // 바뀐 카테고리(객체)
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const categories = [...Object.keys(Categories), ...newCategories];
  return (
    <li>
      {text}
      {categories.map(
        (key: any, index: number) =>
          category !== key && (
            <button key={`button-${index}`} name={key} onClick={onClick}>
              {" "}
              {key}
            </button>
          )
      )}
    </li>
  );
}
export default ToDo;

// 참고
// https://github.com/ohsoomansour/CodeChallenge2/blob/main/src/components/ToDo.tsx
