import styled from "styled-components";

const Box = styled.div`
  width: 70%;
  height: 150px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.boxColor};
  padding: 10px;
  color: ${(props) => props.theme.textColor};
`;

function BottomBar() {
  return <Box>Bottom Bar</Box>;
}
export default BottomBar;
