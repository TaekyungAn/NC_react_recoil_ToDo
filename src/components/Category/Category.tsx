import React from "react";
import { useRecoilState } from "recoil";
import { categoryState } from "../../atom";

function Category() {
  const [myCategory, setMyCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setMyCategory(event.currentTarget.value as any);
  };
  return (
    <select value={myCategory} onInput={onInput}>
      <option value="TO_DO">To Do</option>
      <option value="DOING">Doing</option>
      <option value="DONE">Done</option>
    </select>
  );
}
export default Category;
