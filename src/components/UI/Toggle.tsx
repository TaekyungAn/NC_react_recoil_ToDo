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
  .container {
    height: 40px;
    width: 100px;
    background-image: radial-gradient(
      circle farthest-corner at 10% 20%,
      rgba(253, 203, 50, 1) 0%,
      rgba(244, 56, 98, 1) 100.2%
    );
    border-radius: 25px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 5px;
    cursor: pointer;
    transition: all 0.3s;
  }
  .handle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: grid;
    align-items: center;
    justify-items: center;
    background-color: #fff;
    overflow: hidden;
  }
  .icon {
    color: #f88748;
  }
  &[isDarkmode="true"] {
    background-color: #52527a;
    .container {
      background-image: linear-gradient(
        109.8deg,
        rgba(62, 5, 116, 1) -5.2%,
        rgba(41, 14, 151, 1) -5.2%,
        rgba(216, 68, 148, 1) 103.3%
      );
    }

    .icon {
      color: #501a96;
    }
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

  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleClicked = () => {
    setIsDark((prev) => !prev);
    setIsDarkMode((prev) => !prev);
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
    <ToggleBox>
      <div
        className="container"
        data-darkmode={isDarkMode}
        onClick={toggleClicked}
        style={{ justifyContent: isDarkMode ? "flex-end" : "flex-start" }}
      >
        <motion.div layout className="handle">
          <AnimatePresence initial={false}>
            <motion.i
              className={`icon far fa-${isDarkMode ? "moon" : "sun"}`}
              key={isDarkMode ? "moon" : "sun"}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>
        </motion.div>
      </div>
    </ToggleBox>
  );
};
export default Toggle;
