import styled from "styled-components";
import Weather from "./Weather";

const Box = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 20px 0 0 20px;
  border-right: solid ${(props) => props.theme.bgColor} 10px;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  padding: 10px;
`;

function LeftBar() {
  // const location = useGeolocation();
  // console.log(location);

  return (
    <Box>
      {/* Left Bar
      {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet"} */}
      <Weather />
    </Box>
  );
}
export default LeftBar;
