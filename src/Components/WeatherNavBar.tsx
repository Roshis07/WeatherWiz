import React from "react";
import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const WeatherNavBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 2,
        backgroundColor: "#f0f0f0",
        borderBottom: "1px solid #ccc",
      }}
    >
      <nav style={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ marginRight: 2 }}>
          <Link component={RouterLink} to="/weather/current" underline="none">
            Current Weather
          </Link>
        </Box>
        <Box sx={{ marginRight: 2 }}>
          <Link component={RouterLink} to="/weather/hourly" underline="none">
            Hourly Weather
          </Link>
        </Box>
        <Box>
          <Link component={RouterLink} to="/weather/forecast" underline="none">
            Forecast for Next Three Days
          </Link>
        </Box>
      </nav>
    </Box>
  );
};

export default WeatherNavBar;
