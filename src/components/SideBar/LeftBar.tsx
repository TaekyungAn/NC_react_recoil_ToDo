import { useState, ReactElement, useMemo, useEffect } from "react";
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
import useMediaQuery from "../../hooks/useMediaQuery";
import React from "react";

const Box = styled.div`
  width: 300px;
  height: 100%;
  border-radius: 20px 0 0 20px;
  border-right: solid ${(props) => props.theme.bgColor} 10px;
  background-color: ${(props) => props.theme.boxColor};
  color: ${(props) => props.theme.textColor};
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const WeatherBox = styled.div`
  > div:first-child {
    font-size: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ShortBox = styled.div``;
const LongBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > span {
    margin-bottom: 10px;
  }
`;

const ClockBox = styled.div`
  font-size: 32px;
`;

function LeftBar() {
  const [showClock, setShowClock] = useState("");
  const weather = Weather();
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

  // setInverval이 leftBar전체를 리렌더링 시키지 않도록 리팩토링하기.
  const getClock = useMemo(() => {
    setInterval(() => {
      setShowClock(new Date().toLocaleTimeString("en-US"));
    }, 1000);
  }, []);

  // How to solve: Type 'undefined' is not assignable to type 'number'
  // https://bobbyhadz.com/blog/typescript-type-undefined-is-not-assignable-to-type
  const name = weather.name;
  const main = weather.weather?.main;
  const temp = Math.round(weather.main?.temp!);
  const feels_like = Math.round(weather.main?.feels_like!);

  const icon = weather.weather?.icon;
  // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type

  // useMediaQuery: https://usehooks-ts.com/react-hook/use-media-query
  const isMoreInfo = useMediaQuery("(min-width:1500px)");

  return (
    <Box>
      <WeatherBox>
        <div>{weatherIcon[`${icon}`]}</div>
        {isMoreInfo ? (
          <LongBox>
            <span>{main}</span>
            <span>{name}</span>
            <span>temperature : {temp}℃</span>
            <span>feels like : {feels_like}℃</span>
          </LongBox>
        ) : (
          <ShortBox>
            <span>
              {name}, {temp}℃
            </span>
          </ShortBox>
        )}
      </WeatherBox>
      <ClockBox>{showClock}</ClockBox>
    </Box>
  );
}
export default React.memo(LeftBar);
