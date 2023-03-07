import { useState, ReactElement } from "react";
import styled from "styled-components";
import Weather from "./Weather";
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
  justify-content: center;
  align-items: center;
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

  // 참고
  // 아이콘 객체 형태로 넣는 아이디어 : https://byul91oh.tistory.com/31

  // string literal 타입
  // : https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/

  // 된거 : https://stackoverflow.com/questions/69210695/type-element-is-not-assignable-to-type-string-ts2322
  type ObjType = {
    [index: string]: ReactElement;
    "01d": ReactElement;
    "02d": ReactElement;
    "03d": ReactElement;
    "04d": ReactElement;
    "09d": ReactElement;
    "10d": ReactElement;
    "11d": ReactElement;
    "13d": ReactElement;
    "50d": ReactElement;

    "01n": ReactElement;
    "02n": ReactElement;
    "03n": ReactElement;
    "04n": ReactElement;
    "09n": ReactElement;
    "10n": ReactElement;
    "11n": ReactElement;
    "13n": ReactElement;
    "50n": ReactElement;
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
  const name = weather.name;
  const temp = Math.round(weather.main?.temp!);
  const feels_like = Math.round(weather.main?.feels_like!);

  const icon = weather.weather?.icon;
  // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type

  return (
    <Box>
      <WeatherBox>
        <div>{weatherIcon[`${icon}`]}</div>
        <span>{weather.weather?.main}</span>
        <span>{name}</span>
        <span>temperature: {temp}℃</span>
        <span>feels like: {feels_like}℃</span>
      </WeatherBox>
      <ClockBox>{showClock}</ClockBox>
    </Box>
  );
}
export default LeftBar;
