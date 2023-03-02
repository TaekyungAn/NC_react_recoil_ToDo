import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { lightTheme } from "../../theme";

const StyledButton = styled.button`
  background-color: white;
  border: 0;
  outline: 0;
  padding: 10px;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;
  :focus {
    background-color: ${(props) => props.theme.btnColor};
  }
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  mode?: "category" | "list";
  value?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const buttonOptions = {
  category: {
    bgColor: `${lightTheme.bgColor}`,
    textColor: `${lightTheme.textColor}`,
  },
  list: {
    bgColor: `${lightTheme.bgColor}`,
    textColor: `${lightTheme.textColor}`,
  },
};

const Button = ({ onClick, children, value, ...props }: Props) => {
  return (
    <StyledButton onClick={onClick} value={value} {...props}>
      {children}
    </StyledButton>
  );
};
export default Button;
