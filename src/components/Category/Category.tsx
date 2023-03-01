import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, newCategoryState } from "../../atom";

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

  > button {
    border: 0;
    outline: 0;
    padding: 10px;
    border-radius: 5px;
    margin-right: 5px;
    cursor: pointer;
    :focus {
      background-color: ${(props) => props.theme.btnColor};
    }
  }
`;

function Category() {
  const [defaultCategory, setDefaultCategory] = useRecoilState(categoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setDefaultCategory(event.currentTarget.value);
    console.log(event.currentTarget.value);
    console.log(defaultCategory);

    if (defaultCategory === event.currentTarget.value) {
      console.log("true");
    }
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
          <button
            className={newlist}
            key={newlist}
            onClick={onClick}
            value={newlist}
          >
            {newlist}
          </button>
        ))}
      </CategoryList>
    </CategoryWrapper>
  );
}
export default Category;
