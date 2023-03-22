import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { motion } from "framer-motion";
import { openCategoryAtom } from "../../atom";

export interface IForm {
  newStuff: string;
}
export interface ISubmitForm {
  animate?: {
    scaleX?: number;
  };
  transition?: {};
  placeholder: string;
  required: string;
  onSubmit: (string: IForm) => void;
}

const CreateForm = styled.form`
  margin: 0px 15px;
  > input {
    width: 100%;
    min-width: 100px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    margin-bottom: 5px;
    margin-right: 5px;
  }
`;

function SubmitForm({ onSubmit, placeholder, required, animate }: ISubmitForm) {
  const openCategory = useRecoilValue(openCategoryAtom);

  const { register, handleSubmit, setValue } = useForm<IForm>();
  // 아래처럼 입력하면 경고: Too many re-renders. React limits the number of renders to prevent an infinite loop.
  // setValue("newStuff", "");
  useEffect(() => {
    setValue("newStuff", "");
  }, [onSubmit, setValue]);
  return (
    <CreateForm onSubmit={handleSubmit(onSubmit)}>
      <motion.input
        animate={{ scaleX: openCategory ? 0 : 1 }}
        transition={{ type: "linear" }}
        {...register("newStuff", {
          required: `${required}`,
        })}
        placeholder={placeholder}
      />
    </CreateForm>
  );
}

export default SubmitForm;
