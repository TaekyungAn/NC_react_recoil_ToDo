import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
const menuItems = ["home", "todolist", "games", "mypage"];

const Wrapper = styled.div`
  width: 100%;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  background-position: right center;
  text-transform: uppercase;

  background-image: ${(props) => props.theme.menuColor};
  :hover {
    background-position: left center;
  }

  .underlined-menu {
    height: 70px;
    width: 100%;
    display: grid;
    place-items: center left;
    color: rgba($color: #171717, $alpha: 0.8);
    .wrapper {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
    }
    .menu-item {
      font-size: 2rem;

      @media (min-width: 1300px) {
        font-size: 3rem;
        margin: 0 1.5rem;
        &:first-child {
          margin-left: 3rem;
        }
      }
      cursor: pointer;
      font-weight: 700;
      position: relative;
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
