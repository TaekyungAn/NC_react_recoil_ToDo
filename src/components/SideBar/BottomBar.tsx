import styled from "styled-components";
import Toggle from "../UI/Toggle";

const Box = styled.div`
  width: 70%;
  height: 150px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  background-color: ${(props) => props.theme.boxColor};
  padding: 10px;
  color: ${(props) => props.theme.textColor};
`;

function BottomBar() {
  return (
    <Box>
      <Toggle />
    </Box>
  );
}
export default BottomBar;
