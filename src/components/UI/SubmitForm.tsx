import { useForm } from "react-hook-form";
import styled from "styled-components";
import { IForm } from "../Category/CreateCategory";

interface ISubmitForm {
  placeholder: string;
  required: string;
  registervalue?: string;
  onSubmit: (string: IForm) => void;
}

const CreateForm = styled.form`
  margin: 0px 15px;
  > input {
    width: 80%;
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

function SubmitForm({ onSubmit, placeholder, required }: ISubmitForm) {
  const { register, handleSubmit } = useForm<IForm>();

  return (
    <CreateForm onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("inputCategory", {
          required: `${required}`,
        })}
        placeholder={placeholder}
      />
      <button>Add</button>
    </CreateForm>
  );
}

export default SubmitForm;
