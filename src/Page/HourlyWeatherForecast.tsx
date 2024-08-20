import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";

interface HourlyWeatherForecastProps {
  weatherData: any;
}

const HourlyWeatherForecast: React.FC<HourlyWeatherForecastProps> = ({
  weatherData,
}) => {
  const currentTimestamp = new Date().getTime() / 1000;

  const hourlyForecast =
    weatherData?.forecast?.forecast?.forecastday[0]?.hour.filter(
      (hour: any) => hour.time_epoch > currentTimestamp
    ) || [];

  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2 },
        width: "100%",
        boxSizing: "border-box",
        maxHeight: "calc(100vh - 64px)",
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          marginBottom: { xs: 1, sm: 2 },
          fontSize: { xs: "0.9rem", sm: "1.2rem" },
        }}
      >
        Hourly Forecast
      </Typography>

      <Grid container spacing={1}>
        {hourlyForecast.slice(0, 5).map((hour: any) => (
          <Grid item xs={12} sm={6} md={4} key={hour.time_epoch}>
            <Paper
              elevation={2}
              sx={{
                padding: { xs: 1, sm: 2 },
                textAlign: "center",
                backgroundColor: "#f5f5f5",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginY: { xs: 1, sm: 2 },
                boxSizing: "border-box",
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem" } }}
              >
                {hour.time}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  marginTop: 0.5,
                  fontSize: { xs: "0.7rem", sm: "0.9rem" },
                }} // Smaller font size for mobile
              >
                {hour.temp_c}°C
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.6rem", sm: "0.8rem" } }}
              >
                {hour.condition.text}
              </Typography>
              <img
                src={hour.condition.icon}
                alt={hour.condition.text}
                style={{ width: 25, height: 25, marginTop: 4 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HourlyWeatherForecast;
