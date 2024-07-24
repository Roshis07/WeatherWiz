import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./Page/HomePage";
import About from "./Page/About";
const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <About></About>
      <HomePage></HomePage>
    </ThemeProvider>
  );
}

export default App;
