import React from "react";
import { Box, Stack } from "@mui/material"; // Import Box and Stack from MUI

interface CurrentWeatherProps {
  weatherData: any;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  return (
    <div>
      <h1 style={{ color: "green", display: "flex", justifyContent: "center" }}>
        {weatherData?.current?.location?.name} (
        {weatherData?.current?.location?.region},
        {weatherData?.current?.location?.country})
      </h1>
      <h4>
        Time:
        {weatherData?.current?.location?.localtime
          ? weatherData.current?.location?.localtime
          : "Loading..."}
      </h4>
      <p>
        Sunrise:{" "}
        {weatherData?.forecast?.forecast?.forecastday[0]?.astro?.sunrise ||
          "N/A"}
      </p>
      <p>
        Sunset:{" "}
        {weatherData?.forecast?.forecast?.forecastday[0]?.astro?.sunset ||
          "N/A"}
      </p>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "start",
            border: "1px solid black",
            padding: "1px",
            flex: "1",
          }}
        >
          <Box>
            <p>Current</p>
            <p>Temperature: {weatherData?.current?.current?.temp_c}°C</p>
          </Box>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <span>
                Condition: {weatherData?.current?.current?.condition?.text}
              </span>
            </Stack>
          </Box>
          <Box>
            <p>Wind: {weatherData?.current?.current?.wind_mph} mph</p>
          </Box>
          <p>
            <img
              src={weatherData?.current?.current?.condition?.icon}
              alt={weatherData?.current?.current?.condition?.text}
              style={{ width: 50, height: 50 }}
            />
          </p>
        </Box>
      </Stack>
    </div>
  );
};

export default CurrentWeather;
