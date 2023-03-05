import { useState } from "react";
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

const WeatherBox = styled.div``;

function LeftBar() {
  const [showClock, setShowClock] = useState("");
  const weather = Weather();
  // console.log(location);
  const getClock = () => {
    const datee = new Date().toLocaleTimeString();
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const clock = `${hours}:${minutes}:${seconds}`;
    setShowClock(clock);
  };
  setInterval(getClock, 1000);
  return (
    <Box>
      <WeatherBox>
        <img
          src={`http://openweathermap.org/img/w/${weather.weather?.icon}.png`}
          alt="weather icon"
        />
        <span>{weather.weather?.main}</span>
        <span>{weather.main?.temp}</span>
        <span>{weather.main?.feels_like}</span>
      </WeatherBox>

      {showClock}
    </Box>
  );
}
export default LeftBar;
