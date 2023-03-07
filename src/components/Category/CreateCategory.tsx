import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, newCategoryState } from "../../atom";

interface IForm {
  inputCategory: string;
}

const CreateForm = styled.form`
  margin: 0px 15px;
  > input {
    width: 500px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }
  > button {
    border: 0;
    outline: 0;
    box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
      5px 5px 9px rgba(94, 104, 121, 0.3);
    background-color: white;

    width: 50px;
    height: 32px;
    border-radius: 15px;

    cursor: pointer;
  }
`;

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
    <CreateForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("inputCategory", {
          required: "Please write a Category",
        })}
        placeholder="New category"
      />
      <button>Add</button>
    </CreateForm>
  );
}

export default CreateCategory;
