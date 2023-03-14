import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, IToDo, newCategoryState, toDoState } from "../../atom";
import Checkbox from "../UI/CheckBox";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categories = useRecoilValue(newCategoryState);
  const defaultCategory = useRecoilValue(categoryState);
  // const [checked, setChecked] = useState(false);
  const [checkedList, setCheckedList] = useState<string[]>([]);
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
  // 체크 된것의 아이디 찾아와
  // 체크 된것들만 모아놓는 배열
  const onBoxClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setChecked((prev) => !prev);
    console.log(event.currentTarget.checked, event.currentTarget.id);
    const checked = event.currentTarget.checked;
    const item = event.currentTarget.id as string;
    if (checked) {
      setCheckedList((prev) => [...prev, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
    // else if (!checked) {
    //   setCheckedList(checkedList.filter((el) => el !== item));
    // }
    console.log("checkedList", checkedList);
  };
  return (
    <li>
      <Checkbox id={id} onChange={onBoxClick}>
        <div>
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
        </div>
      </Checkbox>
    </li>
  );
}
export default ToDo;

// https://mnmhbbb.tistory.com/474
