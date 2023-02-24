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
  };
  return (
    <CategoryWrapper>
      <div>{defaultCategory}</div>
      <div>
        {newCategory.map((newlist) => (
          <div>
            <button onClick={onClick} value={newlist}>
              {newlist}
            </button>
            <button onClick={deleteCategory}>X</button>
          </div>
        ))}
      </div>
    </CategoryWrapper>
  );
}
export default Category;
