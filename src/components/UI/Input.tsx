import { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const StyledInput = styled.input`
  width: 80%;
  height: 32px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: rgb(233, 233, 233);
  margin-bottom: 5px;
`;

function Input({ placeholder }: IInput) {
  return <StyledInput type="text" placeholder={placeholder} />;
}

export default Input;
