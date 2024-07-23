import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>WeatherWiz </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
