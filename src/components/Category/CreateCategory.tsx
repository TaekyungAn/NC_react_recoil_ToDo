import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, newCategoryState } from "../../atom";
import SubmitForm from "../UI/SubmitForm";

export interface IForm {
  inputCategory: string;
}
function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCurrentCategory = useSetRecoilState(categoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);

  const handleValid = ({ inputCategory }: IForm) => {
    if (inputCategory && inputCategory.length > 0) {
      if (newCategory.includes(inputCategory)) {
        alert("같은 카테고리가 존재합니다.");
        setValue("inputCategory", "");
        return;
      }
      setNewCategory([...newCategory, inputCategory]);
      setCurrentCategory(inputCategory);
      setValue("inputCategory", "");
    } else {
      alert("1글자 이상 입력하세요");
    }
  };
  return (
    <SubmitForm
      onSubmit={handleValid}
      // registervalue="inputCategory"
      required="Please write a Category"
      placeholder="New category"
    />
  );
}

export default CreateCategory;
