import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState, newCatState } from "../../atom";

interface IForm {
  newCategory: string;
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setCurrentCategory = useSetRecoilState(categoryState);
  const setNewCategory = useSetRecoilState(newCatState);
  const handleValid = ({ newCategory }: IForm) => {
    setCurrentCategory(newCategory as any);
    setNewCategory((prev) => {
      return [...prev, newCategory] as any;
    });
    setValue("newCategory", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("newCategory")} placeholder="New category" />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
