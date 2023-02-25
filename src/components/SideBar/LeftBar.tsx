import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 20px 0 0 20px;
  border-right: solid gray 10px;
  background-color: white;
  color: black;
  padding: 10px;
`;

function LeftBar() {
  return <Box>Left Bar</Box>;
}
export default LeftBar;
