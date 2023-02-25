import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../../atom";

interface IForm {
  toDo: string;
}

const CreateForm = styled.form`
  margin: 0px 15px;
  > button {
    border: 0;
    outline: 0;
    /* box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec0 40%,
      -10px -10px 10px 0 #aeaec0 25%, 10px 10px 10px 0 #ffffff; */
    box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
      5px 5px 9px rgba(94, 104, 121, 0.3);
    background-color: white;
  }
`;

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <CreateForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </CreateForm>
  );
}

export default CreateToDo;
