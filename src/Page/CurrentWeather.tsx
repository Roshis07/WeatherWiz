import React from "react";
import { Box, Stack, Typography, Paper } from "@mui/material";

interface CurrentWeatherProps {
  weatherData: any;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weatherData }) => {
  return (
    <Box
      sx={{
        padding: { xs: 1, sm: 2 },
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "green",
          textAlign: "center",
          marginBottom: { xs: 1, sm: 2 },
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        {weatherData?.current?.location?.name} (
        {weatherData?.current?.location?.region},
        {weatherData?.current?.location?.country})
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{
          textAlign: "center",
          marginBottom: { xs: 1, sm: 2 },
          fontSize: { xs: "0.8rem", sm: "1rem" },
        }}
      >
        Time: {weatherData?.current?.location?.localtime || "Loading..."}
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        sx={{ marginBottom: { xs: 2, sm: 3 } }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: { xs: 1, sm: 2 },
            flex: 1,
            textAlign: "center",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          <Typography variant="subtitle2">Sunrise</Typography>
          <Typography variant="body2">
            {weatherData?.forecast?.forecast?.forecastday[0]?.astro?.sunrise ||
              "N/A"}
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            padding: { xs: 1, sm: 2 },
            flex: 1,
            textAlign: "center",
            fontSize: { xs: "0.8rem", sm: "1rem" },
          }}
        >
          <Typography variant="subtitle2">Sunset</Typography>
          <Typography variant="body2">
            {weatherData?.forecast?.forecast?.forecastday[0]?.astro?.sunset ||
              "N/A"}
          </Typography>
        </Paper>
      </Stack>

      <Paper
        elevation={3}
        sx={{
          padding: { xs: 1, sm: 2 },
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          textAlign: "center",
          fontSize: { xs: "0.8rem", sm: "1rem" },
        }}
      >
        <Box sx={{ margin: { xs: 1, sm: 2 } }}>
          <Typography variant="subtitle2">Temperature</Typography>
          <Typography variant="body1">
            {weatherData?.current?.current?.temp_c}°C
          </Typography>
        </Box>

        <Box sx={{ margin: { xs: 1, sm: 2 } }}>
          <Typography variant="subtitle2">Condition</Typography>
          <Typography variant="body1">
            {weatherData?.current?.current?.condition?.text}
          </Typography>
          <img
            src={weatherData?.current?.current?.condition?.icon}
            alt={weatherData?.current?.current?.condition?.text}
            style={{ width: 40, height: 40, marginTop: 8 }}
          />
        </Box>

        <Box sx={{ margin: { xs: 1, sm: 2 } }}>
          <Typography variant="subtitle2">Wind</Typography>
          <Typography variant="body1">
            {weatherData?.current?.current?.wind_mph} mph
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default CurrentWeather;
