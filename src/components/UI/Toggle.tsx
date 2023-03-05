import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../../atom";

const ToggleBox = styled(motion.div)`
  position: relative;
  background-color: white;
  width: 80px;
  height: 40px;
  border-radius: 40px;

  > button {
    width: 50%;
    height: 100%;
    border-radius: 50%;
    border: 0;
  }
`;
const ToggleNight = styled(motion.button)`
  position: absolute;
  left: 0;
`;
const ToggleDay = styled(motion.button)`
  position: absolute;
  right: 0;
`;

const Toggle = () => {
  const setIsDark = useSetRecoilState(isDarkAtom);

  const [darkMode, setDarkMode] = useState(true);
  const toggleClicked = () => {
    setIsDark((prev) => !prev);
    setDarkMode((prev) => !prev);
  };
  const toggleVariant: Variants = {
    Daymode: {
      backgroundColor: "pink",
      transition: {
        type: "tween",
        duration: 3,
      },
    },
    Nightmode: {
      backgroundColor: "gray",
      transition: { type: "tween" },
    },
  };
  return (
    <ToggleBox onClick={toggleClicked}>
      <AnimatePresence initial={false}>
        <motion.i
          className={`icon far fa-${darkMode ? "moon" : "sun"}`}
          key={darkMode ? "moon" : "sun"}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </AnimatePresence>
    </ToggleBox>
  );
};
export default Toggle;
