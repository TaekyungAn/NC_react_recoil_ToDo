import styled from "styled-components";
import Toggle from "../UI/Toggle";
import UnderlinedMenu from "./UnderlinedMenu";

const Box = styled.div`
  width: 70%;
  height: 150px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.barColor};
  padding: 10px 0;
  color: ${(props) => props.theme.textColor};
`;

function BottomBar() {
  return (
    <Box>
      <UnderlinedMenu />
      <Toggle />
    </Box>
  );
}
export default BottomBar;
