import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, newCategoryState, openCategoryAtom } from "../../atom";
import SubmitForm, { IForm } from "../UI/SubmitForm";

function CreateCategory() {
  const { setValue } = useForm<IForm>();
  const setCurrentCategory = useSetRecoilState(categoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);
  const openCategory = useRecoilValue(openCategoryAtom);

  const handleValid = ({ newStuff }: IForm) => {
    if (newStuff && newStuff.length > 0) {
      if (newCategory.includes(newStuff)) {
        alert("같은 카테고리가 존재합니다.");
        setValue("newStuff", "");
        return;
      }
      setNewCategory([...newCategory, newStuff]);
      setCurrentCategory(newStuff);
    } else {
      alert("1글자 이상 입력하세요");
    }
  };
  return (
    <SubmitForm
      onSubmit={handleValid}
      required="Please write a Category"
      placeholder="New category"
    />
  );
}

export default CreateCategory;
