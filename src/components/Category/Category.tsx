import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, newCategoryState } from "../../atom";
import Button from "../UI/Button";

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
const CategoryList = styled.div`
  margin: 20px 15px;
  display: flex;
  > button.selected {
    background-color: blue;
  }
  /* > button {
    border: 0;
    outline: 0;
    padding: 10px;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    :focus {
      background-color: ${(props) => props.theme.btnColor};
    } 
  }*/
`;

function Category() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [defaultCategory, setDefaultCategory] = useRecoilState(categoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);
  const [selectedCategory, setSelectedCategory] = useState(newCategory[0]);

  // useEffect(() => {
  //   if (btnRef.current !== null) btnRef.current.focus();
  // });

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDefaultCategory(event.currentTarget.value);
    console.log(event.currentTarget.value);
    console.log(defaultCategory);
    setSelectedCategory(event.currentTarget.value);
  };

  const deleteCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (window.confirm("카테고리를 지우시겠습니까?")) {
      const removedCategory = newCategory.filter(
        (oldCategory) => oldCategory !== defaultCategory
      );
      setNewCategory(removedCategory);
      setDefaultCategory(removedCategory[0]);
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
        <button onClick={deleteCategory}>x</button>
      </Title>
      <hr />
      <CategoryList>
        {newCategory.map((newlist) => (
          <Button
            className={newlist === selectedCategory ? "selected" : ""}
            key={newlist}
            onClick={onClick}
            value={newlist}
          >
            {newlist}
          </Button>
        ))}
      </CategoryList>
    </CategoryWrapper>
  );
}
export default Category;
