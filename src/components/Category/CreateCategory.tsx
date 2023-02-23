import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState } from "../../atom";

interface IForm {
  newCategory: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCurrentCategory = useSetRecoilState(categoryState);
  const handleValid = ({ newCategory }: IForm) => {
    if (newCategory.length > 0) {
      setCurrentCategory(newCategory as any);
      // setNewCategory((prev) => {
      //   return [...prev, newCategory] as any;
      // });
      setValue("newCategory", "");
    } else {
      alert("1글자 이상 입력하세요");
    }
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("newCategory", {
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
