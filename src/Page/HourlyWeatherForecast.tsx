import React from "react";
import { Stack, Box } from "@mui/material";

interface HourlyweatherForecastProps {
  weatherData: any;
}

const HourlyWeatherForecast: React.FC<HourlyweatherForecastProps> = ({
  weatherData,
}) => {
  const currentTimestamp = new Date().getTime() / 1000;

  const hourlyForecast =
    weatherData?.forecast?.forecast?.forecastday[0]?.hour.filter(
      (hour: any) => hour.time_epoch > currentTimestamp
    ) || [];
  return (
    <div>
      <Stack>
        {hourlyForecast.slice(0, 5).map((hour: any) => (
          <Box
            key={hour.time_epoch}
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              alignItems: "start",
              border: "1px solid black",
              padding: "1px",
              flex: "1",
              marginRight: "8px",
            }}
          >
            <h3>Hourly Forecast</h3>
            <p>Time: {hour.time}</p>
            <p>Temperature: {hour.temp_c}°C</p>
            <p>Condition: {hour.condition.text}</p>
            <img
              src={hour.condition.icon}
              alt={hour.condition.text}
              style={{ width: 50, height: 50 }}
            />
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default HourlyWeatherForecast;
