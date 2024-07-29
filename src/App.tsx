import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./Page/HomePage";
import About from "./Page/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import backgroundImage from "../src/assets/image/background.jpg";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100%",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
