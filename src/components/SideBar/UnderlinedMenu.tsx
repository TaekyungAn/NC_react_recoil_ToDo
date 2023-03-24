import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
const menuItems = ["home", "todolist", "games", "mypage"];

const Wrapper = styled.div`
  .underlined-menu {
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center left;
    color: rgba($color: #171717, $alpha: 0.8);
    background: #ffd11a;
    .wrapper {
      display: flex;
      justify-content: space-evenly;
    }
    .menu-item {
      margin: 0 1.5rem;
      font-size: 3rem;
      font-weight: 700;
      cursor: pointer;
      position: relative;
      &:first-child {
        margin-left: 3rem;
      }
    }
    .underline {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 4px;
      border-radius: 15px;
      background: white;
      opacity: 0.85;
    }
  }
`;

interface IProps {
  text: string;
  selected: boolean;
  onClick: () => void;
}
const MenuItem = ({ text, selected, onClick }: IProps) => (
  <motion.div
    className="menu-item"
    onClick={onClick}
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    {text}
    {selected && <motion.div className="underline" layoutId="underline" />}
  </motion.div>
);

const UnderlinedMenu = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Wrapper>
      <div className="underlined-menu">
        <div className="wrapper">
          {menuItems.map((el, i) => (
            <Link to={"/" + el}>
              <MenuItem
                text={el}
                key={i}
                selected={selected === i}
                onClick={() => setSelected(i)}
              />
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default UnderlinedMenu;
