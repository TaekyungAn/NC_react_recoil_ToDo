import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../atom";
import { BiSun, BiMoon } from "react-icons/bi";

const ToggleBox = styled(motion.div)``;

const Container = styled.div`
  height: 40px;
  width: 80px;
  border-radius: 25px;

  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5px;
  cursor: pointer;
  transition: all 0.3s;
  &.lightmode {
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(253, 203, 50, 1) 0%,
      rgba(244, 56, 98, 1) 100.2%
    );
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    > div {
      color: #f88748;
    }
  }
  &.nightmode {
    background-image: linear-gradient(
      109.8deg,
      rgba(62, 5, 116, 1) -5.2%,
      rgba(41, 14, 151, 1) -5.2%,
      rgba(216, 68, 148, 1) 103.3%
    );
    box-shadow: rgb(80, 74, 81) 3px 3px 6px 0px inset,
      rgba(248, 241, 252, 0.7) -3px -3px 6px 1px inset;
    > div {
      color: #501a96;
    }
  }
`;
const Handle = styled(motion.div)`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #fff;
  overflow: hidden;
`;

const IconWrapper = styled(motion.div)`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Toggle = () => {
  const setIsDark = useSetRecoilState(isDarkAtom);

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleClicked = () => {
    setIsDark((prev) => !prev);
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ToggleBox>
      <Container
        className={isDarkMode ? "lightmode" : "nightmode"}
        onClick={toggleClicked}
        style={{ justifyContent: isDarkMode ? "flex-end" : "flex-start" }}
      >
        <Handle layout>
          <AnimatePresence initial={false}>
            <IconWrapper
              key={isDarkMode ? "moon" : "sun"}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? <BiSun /> : <BiMoon />}
            </IconWrapper>
          </AnimatePresence>
        </Handle>
      </Container>
    </ToggleBox>
  );
};
export default Toggle;
