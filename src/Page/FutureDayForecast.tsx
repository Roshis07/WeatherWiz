import React from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";

interface FutureDayForecastProps {
  weatherData: any;
}

const FutureDayForecast: React.FC<FutureDayForecastProps> = ({
  weatherData,
}) => {
  const nextTwoDaysForecast =
    weatherData?.forecast?.forecast?.forecastday.slice(1, 3) || [];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center", marginBottom: 2 }}>
        Next Two Days Forecast
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ overflowX: "hidden", paddingBottom: 1 }}
      >
        {nextTwoDaysForecast.map((day: any) => (
          <Paper
            key={day.date}
            elevation={3}
            sx={{
              padding: { xs: 1.5, sm: 2.5 },
              minWidth: { xs: "100%", sm: 300 },
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              marginBottom: { xs: 2, sm: 0 },
            }}
          >
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
              {new Date(day.date).toLocaleDateString()}
            </Typography>
            <Typography variant="h6" sx={{ marginTop: 1 }}>
              Max: {day.day.maxtemp_c}°C
            </Typography>
            <Typography variant="h6">Min: {day.day.mintemp_c}°C</Typography>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {day.day.condition.text}
            </Typography>
            <img
              src={day.day.condition.icon}
              alt={day.day.condition.text}
              style={{ width: 60, height: 60, marginTop: 8 }}
            />
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default FutureDayForecast;
