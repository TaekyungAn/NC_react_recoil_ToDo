import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { openCategoryAtom } from "../../atom";
import CreateCategory from "./CreateCategory";

const MotionWrapper = styled(motion.div)`
  display: flex;
  position: relative;
`;
const CircleButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 15px;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.accentColor};
`;

function MotionCategory() {
  const [categoryOpen, setCategoryOpen] = useRecoilState(openCategoryAtom);
  const toggleOpenCategory = () => {
    setCategoryOpen((prev) => !prev);
  };

  return (
    <MotionWrapper>
      <CreateCategory />
      <CircleButton onClick={toggleOpenCategory}>+</CircleButton>
    </MotionWrapper>
  );
}
export default MotionCategory;
