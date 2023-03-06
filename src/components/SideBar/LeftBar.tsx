import { useState } from "react";
import styled from "styled-components";
import Weather, { weatherType } from "./Weather";
import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiRain,
  WiNightClear,
  WiNightAltCloudy,
  WiDayRain,
  WiNightAltLightning,
  WiNightAltRain,
  WiSnow,
  WiNightFog,
  WiDayFog,
  WiDayLightning,
} from "react-icons/wi";

const Box = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 20px 0 0 20px;
  border-right: solid ${(props) => props.theme.bgColor} 10px;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  padding: 10px;
`;

const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  > img,
  div {
    width: 200px;
    font-size: 200px;
  }
`;
const ClockBox = styled.div``;

function LeftBar() {
  const [showClock, setShowClock] = useState("");
  const weather = Weather();

  // string literal 타입
  type ObjType = {
    [index: Element]: Element;
    "01d": Element;
    "02d": Element;
    "03d": Element;
    "04d": Element;
    "09d": Element;
    "10d": Element;
    "11d": Element;
    "13d": Element;
    "50d": Element;

    "01n": Element;
    "02n": Element;
    "03n": Element;
    "04n": Element;
    "09n": Element;
    "10n": Element;
    "11n": Element;
    "13n": Element;
    "50n": Element;
  };
  const weatherIcon: ObjType = {
    "01d": <WiDaySunny />,
    "02d": <WiDayCloudy />,
    "03d": <WiCloud />,
    "04d": <WiCloudy />,
    "09d": <WiRain />,
    "10d": <WiDayRain />,
    "11d": <WiDayLightning />,
    "13d": <WiSnow />,
    "50d": <WiDayFog />,

    "01n": <WiNightClear />,
    "02n": <WiNightAltCloudy />,
    "03n": <WiCloud />,
    "04n": <WiCloudy />,
    "09n": <WiRain />,
    "10n": <WiNightAltRain />,
    "11n": <WiNightAltLightning />,
    "13n": <WiSnow />,
    "50n": <WiNightFog />,
  };

  // setInterval(() => {
  //   setShowClock(new Date().toLocaleTimeString("en-US"));
  // }, 1000);

  // How to solve: Type 'undefined' is not assignable to type 'number'
  // https://bobbyhadz.com/blog/typescript-type-undefined-is-not-assignable-to-type
  const temp = Math.round(weather.main?.temp!);
  const feels_like = Math.round(weather.main?.feels_like!);

  const icon = weather.weather?.icon as string;
  console.log(weatherIcon[`${icon}`]);
  console.log(weatherIcon["01d"]);

  return (
    <Box>
      <WeatherBox>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="weathericon"
        />
        {/* <div>{weatherIcon[icon]}</div> */}
        <span>{weather.weather?.main}</span>
        <span>temperature: {temp}℃</span>
        <span>feels like: {feels_like}℃</span>
      </WeatherBox>
      <ClockBox>{showClock}</ClockBox>
    </Box>
  );
}
export default LeftBar;
