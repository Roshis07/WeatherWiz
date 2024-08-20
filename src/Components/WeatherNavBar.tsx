import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const WeatherNavBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        padding: 0,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        margin: 0,
        width: "100%",
      }}
    >
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 0,
          margin: 0,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            flexGrow: 0,
            flexBasis: { xs: "100%", sm: "33.33%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            height: { xs: "20px", sm: "auto" },
            "@media (max-width:600px)": {
              height: "20px",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#007bff",
              padding: 0.5,
              borderRadius: 1,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition:
                "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "#0056b3",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Link
              component={RouterLink}
              to="/weather/current"
              underline="none"
              sx={{
                color: "#ffffff",
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: { xs: "0.2rem", sm: "0.2rem" },
              }}
            >
              <Typography variant="h6">Current Weather</Typography>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: 0,
            flexBasis: { xs: "100%", sm: "33.33%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            height: { xs: "20px", sm: "auto" },
            "@media (max-width:600px)": {
              height: "20px",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#6be0f5",
              padding: 0.5,
              borderRadius: 1,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition:
                "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "#4bb8e4",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Link
              component={RouterLink}
              to="/weather/hourly"
              underline="none"
              sx={{
                color: "#ffffff",
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: { xs: "0.2rem", sm: "0.2rem" },
              }}
            >
              <Typography variant="h6">Hourly Weather</Typography>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: 0,
            flexBasis: { xs: "100%", sm: "33.33%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            height: { xs: "20px", sm: "auto" },
            "@media (max-width:600px)": {
              height: "20px",
            },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#2ab8e0",
              padding: 0.5,
              borderRadius: 1,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transition:
                "background-color 0.3s, box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                backgroundColor: "#1b9ac5",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transform: "scale(1.05)",
              },
            }}
          >
            <Link
              component={RouterLink}
              to="/weather/forecast"
              underline="none"
              sx={{
                color: "#ffffff",
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontSize: { xs: "0.1rem", sm: "0.2rem" },
              }}
            >
              <Typography variant="h6">Forecast for Next Three Days</Typography>
            </Link>
          </Box>
        </Box>
      </nav>
    </Box>
  );
};

export default WeatherNavBar;
