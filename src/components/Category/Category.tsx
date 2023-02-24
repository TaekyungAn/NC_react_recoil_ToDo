import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState, newCategoryState } from "../../atom";

const CategoryWrapper = styled.div``;

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
    setDefaultCategory(newCategory[1]);
  };

  const currentState = defaultCategory;
  return (
    <CategoryWrapper>
      <div>
        {defaultCategory === undefined
          ? "카테고리를 생성해 주세요"
          : defaultCategory}
      </div>
      <button onClick={deleteCategory}>X</button>
      <div>
        {newCategory.map((newlist) => (
          <div key={newlist}>
            <button onClick={onClick} value={newlist}>
              {newlist}
            </button>
          </div>
        ))}
      </div>
    </CategoryWrapper>
  );
}
export default Category;
