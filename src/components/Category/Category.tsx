import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, newCategoryState } from "../../atom";

const CategoryWrapper = styled.div``;
const Title = styled.div`
  margin: 0px 15px;
  display: flex;

  > h2 {
    font-size: 2.5rem;
  }
  > div {
  }
`;
const CategoryList = styled.div`
  margin: 0px 15px;
  display: flex;
  > button {
    border: 0;
    outline: 0;
    padding: 10px;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
  }
`;

function Category() {
  const [defaultCategory, setDefaultCategory] = useRecoilState(categoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDefaultCategory(event.currentTarget.value as any);
  };

  const deleteCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const removedCategory = newCategory.filter(
      (oldCategory) => oldCategory !== defaultCategory
    );
    setNewCategory(removedCategory);
    setDefaultCategory(removedCategory[0]);
    console.log(removedCategory);
  };

  const currentState = defaultCategory;
  return (
    <CategoryWrapper>
      <Title>
        <h2>
          {defaultCategory === undefined
            ? "카테고리를 생성해 주세요"
            : defaultCategory}
        </h2>
        <button onClick={deleteCategory}>X</button>
      </Title>
      <hr />
      <CategoryList>
        {newCategory.map((newlist) => (
          <button key={newlist} onClick={onClick} value={newlist}>
            {newlist}
          </button>
        ))}
      </CategoryList>
    </CategoryWrapper>
  );
}
export default Category;
