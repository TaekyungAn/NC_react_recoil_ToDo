import { useState, useEffect } from "react";
import axios from "axios";

interface locationType {
  loaded: boolean;
  coordinates?: { lat: number; lon: number };
  error?: { code: number; message: string };
}

const Weather = () => {
  const API_KEY = "dd090a3775cd82a4ec793394d167fe19";
  const [location, setLocation] = useState<locationType>({
    loaded: false,
    coordinates: { lat: 0, lon: 0 },
  });
  const [currnetName, setCurrnetName] = useState("");
  const [currnetWeather, setCurrnetWeather] = useState("");

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
    const name = res.data.name;
    const weather = res.data.weather[0].main;
    setCurrnetName(name);
    setCurrnetWeather(weather);
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

  return (
    <div>
      {currnetName} / {currnetWeather}
    </div>
  );
};

export default Weather;

// https://velog.io/@nemo/react-geolocation-api-hook
