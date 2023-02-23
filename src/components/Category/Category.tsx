import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../atom";

const Menus = styled.div`
  display: flex;
`;

const Menu = styled.div`
  margin-right: 10px;
  background-color: black;
  cursor: pointer;
`;

function Category() {
  const [myCategory, setMyCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setMyCategory(event.currentTarget.value as any);
  };

  const deleteCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return <></>;
}
export default Category;
