import { useState, useEffect } from "react";
import axios from "axios";
import useMediaQuery from "../../hooks/useMediaQuery";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";
import { FontAwesome } from "../../assets/weatherIcon";

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lon: number };
  error?: { code: number; message: string };
}

export interface weatherType {
  weather?: {
    id?: number;
    main?: string;
    description?: string;
    icon?: string;
  };
  main?: {
    temp?: number;
    feels_like?: number;
    temp_min?: number;
    temp_max?: number;
    pressure?: number;
    humidity?: number;
  };
  id?: number;
  name?: string;
}

const WeatherBox = styled.div`
  > div {
    height: 230px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const WeatherIcon = styled(motion.div)`
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const boxVariants: Variants = {
  start: { opacity: 0, scale: 0.5 },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 2.0,
      bounce: 0.5,
    },
  },
};
const Weather = () => {
  const API_KEY = "dd090a3775cd82a4ec793394d167fe19";
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lon: 0 },
  });
  const [currentWeather, setCurrentWeather] = useState<weatherType>({
    weather: {
      main: "",
      icon: "",
    },
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
    },
    name: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates?.lat}&lon=${location.coordinates?.lon}&appid=${API_KEY}&units=metric`;

  // 성공에 대한 로직
  const onSuccess = (location: {
    coords: { latitude: number; longitude: number };
  }) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      },
    });
  };

  // 에러에 대한 로직
  const onError = (error: { code: number; message: string }) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  const getWeather = async () => {
    const res = await axios(url);
    const main = res.data.main;
    const info = {
      weather: res.data.weather[0].main,
      icon: res.data.weather[0].icon,
      temp: main.temp,
      feels_like: main.feels_like,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      name: res.data.name,
    };

    setCurrentWeather({
      weather: { main: info.weather, icon },
      main: {
        temp,
        feels_like,
        temp_min: info.temp_min,
        temp_max: info.temp_max,
      },
      name,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    // navigator 객체 안에 geolocation이 없다면
    // 위치 정보가 없는 것.
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    getWeather();
  }, []);

  // How to solve: Type 'undefined' is not assignable to type 'number'
  // https://bobbyhadz.com/blog/typescript-type-undefined-is-not-assignable-to-type
  const name = currentWeather.name;
  const main = currentWeather.weather?.main;
  const temp = Math.round(currentWeather.main?.temp!);
  const feels_like = Math.round(currentWeather.main?.feels_like!);

  const icon = currentWeather.weather?.icon;
  // Error: Element implicitly has an 'any' type because expression of type 'string' can't be used to index type

  // useMediaQuery: https://usehooks-ts.com/react-hook/use-media-query
  const isMoreInfo = useMediaQuery("(min-width:1500px)");

  return (
    <WeatherBox>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <div>
          <WeatherIcon variants={boxVariants} initial="start" animate="end">
            {FontAwesome[`${icon}`]}
          </WeatherIcon>
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
        </div>
      )}
    </WeatherBox>
  );
};

export default Weather;

// https://velog.io/@nemo/react-geolocation-api-hook
