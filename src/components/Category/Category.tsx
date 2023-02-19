import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, newCatState } from "../../atom";

function Category() {
  const newCategories = useRecoilValue(newCatState);
  const [myCategory, setMyCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setMyCategory(event.currentTarget.value as any);
  };
  return (
    <select value={myCategory} onInput={onInput}>
      <option value={Categories.TO_DO}>To Do</option>
      <option value={Categories.DOING}>Doing</option>
      <option value={Categories.DONE}>Done</option>
      {newCategories.map((newcategories) => (
        <option value={newcategories + ""}>{newcategories + ""}</option>
      ))}{" "}
    </select>
  );
}
export default Category;
