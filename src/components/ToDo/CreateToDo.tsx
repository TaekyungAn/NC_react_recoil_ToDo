import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, checkedState, toDoState } from "../../atom";
import SubmitForm, { IForm } from "../UI/SubmitForm";

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const checked = useRecoilValue(checkedState);
  const category = useRecoilValue(categoryState);
  const { setValue } = useForm<IForm>();
  const handleValid = ({ newStuff }: IForm) => {
    setToDos((oldToDos) => [
      { text: newStuff, id: Date.now(), category, checked },
      ...oldToDos,
    ]);
    setValue("newStuff", "");
  };

  return (
    <SubmitForm
      onSubmit={handleValid}
      required="Please write a To Do"
      placeholder="Write a to do"
    />
  );
}

export default CreateToDo;
