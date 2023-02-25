import { useForm } from "react-hook-form";
import { useRecoilState, useSetRecoilState } from "recoil";
import { categoryState, newCategoryState } from "../../atom";

interface IForm {
  inputCategory: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCurrentCategory = useSetRecoilState(categoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);

  // const handleValid = ({ newCategory }: IForm) => {
  //   if (newCategory.length > 0) {
  //     setCurrentCategory(newCategory as any);
  //     setNewCategory((prev) => {
  //       if (newCategory.includes(newCategory)) {
  //         alert("같은 카테고리가 존재합니다");
  //         return;
  //       } else {
  //         return [...prev, newCategory] as any;
  //       }
  //     });
  //     setValue("newCategory", "");
  //   } else {
  //     alert("1글자 이상 입력하세요");
  //   }
  // };
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
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("inputCategory", {
          minLength: {
            value: 1,
            message: "more than a letter",
          },
        })}
        placeholder="New category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
