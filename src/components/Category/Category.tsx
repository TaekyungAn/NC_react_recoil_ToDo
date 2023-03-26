import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  categoryState,
  newCategoryState,
  toDoSelector,
  toDoState,
} from "../../atom";
import Button from "../UI/Button";
import MotionCategory from "./MotionCategory";

const CategoryWrapper = styled.div``;
const Title = styled.div`
  margin: 0px 15px;
  display: flex;

  > h2 {
    font-size: 2.5rem;
  }
  > button {
    border: 0;
    outline: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: 0 10px;
    color: ${(props) => props.theme.btnColor};
    cursor: pointer;
  }
`;
const ButtonList = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1201px) {
    justify-content: space-between;
    align-items: center;
  }
`;
const CategoryList = styled.div`
  margin: 20px 15px;
  display: flex;
  > button.selected {
    background-color: ${(props) => props.theme.btnColor};
  }

  overflow: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  } /* 스크롤 바 */

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.boxColor};
  } /* 스크롤 바 밑의 배경 */

  ::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
    background-clip: padding-box;
    border: 2px solid transparent;
  } /* 실질적 스크롤 바 */

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.accentColor};
    background-clip: padding-box;
    border: 2px solid transparent;
  } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */

  ::-webkit-scrollbar-thumb:active {
    background: #808080;
  } /* 실질적 스크롤 바를 클릭할 때 */

  ::-webkit-scrollbar-button {
    display: none;
  } /* 스크롤 바 상 하단 버튼 */
`;
const CircleButton = styled(motion.div)`
  height: 32px;
  width: 32px;
  background-color: ${(props) => props.theme.accentColor};
`;

function Category() {
  const [defaultCategory, setDefaultCategory] = useRecoilState(categoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);
  const [selectedCategory, setSelectedCategory] = useState(newCategory[0]);
  const toDos = useRecoilValue(toDoSelector);
  const setToDos = useSetRecoilState(toDoState);
  const removedToDos = useRecoilValue(toDoState);

  // useEffect(() => {
  //   if (btnRef.current !== null) btnRef.current.focus();
  // });

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDefaultCategory(event.currentTarget.value);
    setSelectedCategory(event.currentTarget.value);
  };

  const deleteCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm("카테고리를 지우시겠습니까?")) {
      const removedCategory = newCategory.filter(
        (oldCategory) => oldCategory !== defaultCategory
      );
      setNewCategory(removedCategory);
      setDefaultCategory(removedCategory[0]);

      // 해당 카테고리에 있는 리스트 전부 지워져야 함
      // 같은 카테고리 제외한 나머지만 filter
      setToDos((oldToDos) =>
        oldToDos.filter((toDo) => toDo.category !== defaultCategory)
      );
    }
  };

  return (
    <CategoryWrapper>
      <Title>
        <h2>
          {defaultCategory === undefined
            ? "카테고리를 생성해 주세요"
            : defaultCategory}
        </h2>
        {defaultCategory && <span>({toDos.length})</span>}
        {defaultCategory && <button onClick={deleteCategory}>x</button>}
      </Title>
      <hr />
      <ButtonList>
        <CategoryList>
          {newCategory.map((newlist) => (
            <Button
              className={
                newlist === selectedCategory || newlist === defaultCategory
                  ? "selected"
                  : ""
              }
              key={newlist}
              onClick={onClick}
              value={newlist}
            >
              {newlist}
            </Button>
          ))}
        </CategoryList>
        <MotionCategory />
      </ButtonList>
    </CategoryWrapper>
  );
}
export default Category;
