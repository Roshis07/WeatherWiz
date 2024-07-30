import React from "react";
import { Box, Stack } from "@mui/material";
interface FutureDayForecastProps {
  weatherData: any;
}

const FutureDayForecast: React.FC<FutureDayForecastProps> = ({
  weatherData,
}) => {
  const nextTwoDaysForecast =
    weatherData?.forecast?.forecast?.forecastday.slice(1, 3) || [];
  return (
    <div>
      <Stack direction="row" spacing={2} marginTop="16px">
        {nextTwoDaysForecast.map((day: any) => (
          <Box
            key={day.date}
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
            <h3>Forecast for {day.date}</h3>
            <p>Max Temperature: {day.day.maxtemp_c}°C</p>
            <p>Min Temperature: {day.day.mintemp_c}°C</p>
            <p>Condition: {day.day.condition.text}</p>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              style={{ width: 50, height: 50 }}
            />
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default FutureDayForecast;
