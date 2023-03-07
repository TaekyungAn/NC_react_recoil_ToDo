import { useState, useEffect } from "react";
import axios from "axios";

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lon: number };
  error?: { code: number; message: string };
}
type IconType = {
  [index: string]: string;
  "01d": string;
  "02d": string;
  "03d": string;
  "04d": string;
  "09d": string;
  "10d": string;
  "11d": string;
  "13d": string;
  "50d": string;

  "01n": string;
  "02n": string;
  "03n": string;
  "04n": string;
  "09n": string;
  "10n": string;
  "11n": string;
  "13n": string;
  "50n": string;
};

export interface weatherType {
  weather?: {
    id?: number;
    main?: string;
    description?: string;
    icon?: IconType;
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

const Weather = () => {
  const API_KEY = "dd090a3775cd82a4ec793394d167fe19";
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lon: 0 },
  });
  const [currentWeather, setCurrentWeather] = useState<weatherType>({
    weather: {
      main: "",
      icon: undefined,
    },
    main: {
      temp: 0,
      feels_like: 0,
      temp_min: 0,
      temp_max: 0,
    },
    name: "",
  });

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
    const weather = res.data.weather[0].main;
    const icon = res.data.weather[0].icon;

    const main = res.data.main;
    const temp = main.temp;
    const feels_like = main.feels_like;
    const temp_min = main.temp_min;
    const temp_max = main.temp_max;

    const name = res.data.name;

    setCurrentWeather({
      weather: { main: weather, icon },
      main: { temp, feels_like, temp_min, temp_max },
      name,
    });
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

  return currentWeather;
};

export default Weather;

// https://velog.io/@nemo/react-geolocation-api-hook
