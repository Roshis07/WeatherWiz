import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

const WeatherMainPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWeatherData = async (lat: number, lon: number) => {
      try {
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=1bcab1c1c7744105b8811901242407&q=${lat},${lon}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setData(data);
        console.log(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            setError(new Error(`Geolocation error: ${error.message}`));
            setLoading(false);
          }
        );
      } else {
        setError(new Error("Geolocation is not supported by this browser."));
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 style={{ color: "green", display: "flex", justifyContent: "center" }}>
        {data?.location?.name}
      </h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <p>Temperature: {data?.current?.temp_c}°C</p>
        </Box>
        <Box>
          <p>Condition: {data?.current?.condition?.text}</p>
        </Box>
        <Box>
          <p>Wind: {data?.current?.wind_mph} mph</p>
        </Box>
      </Box>
    </div>
  );
};

export default WeatherMainPage;
