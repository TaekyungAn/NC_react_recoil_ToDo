import { useState, ReactElement, useMemo } from "react";
import styled from "styled-components";
import React from "react";
import Weather from "./Weather";
import SideMenu from "./UnderlinedMenu";
import UnderlinedMenu from "./UnderlinedMenu";

const Box = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 20px 0 0 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  margin-right: 10px;
  /* background-color: ${(props) => props.theme.boxColor}; */
  background-color: ${(props) => props.theme.barColor};

  color: ${(props) => props.theme.accentColor};

  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ClockBox = styled.div`
  @media (max-width: 1200px) {
    font-size: 150%;
  }
  font-size: 32px;
`;

function LeftBar() {
  const [showClock, setShowClock] = useState("");
  // +) setInverval이 leftBar전체를 리렌더링 시키지 않도록 리팩토링하기.
  const getClock = useMemo(() => {
    setInterval(() => {
      setShowClock(new Date().toLocaleTimeString("en-US"));
    }, 1000);
  }, []);

  return (
    <Box>
      <Weather />
      <ClockBox>{showClock}</ClockBox>
    </Box>
  );
}
export default React.memo(LeftBar);
