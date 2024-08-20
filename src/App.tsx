import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import {
  BrowserRouter,
  Route,
  Routes,
  Link as RouterLink,
} from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import backgroundImage from "../src/assets/image/background.jpg";
import About from "./Page/About";
import DataFetch from "./Components/DataFetch";

const theme = createTheme({});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "30ch",
    },
  },
}));

function App() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [searchData, setSearchData] = React.useState<string>("");

  const handleMobileMenuOpen = () => setMobileMenuOpen(true);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const handleSearch = () => {
    if (searchQuery) {
      setSearchData(searchQuery);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
          "html, body": {
            height: "100%",
            overflow: "hidden",
            margin: 0,
            padding: 0,
          },
          "#root": {
            height: "100%",
          },
        }}
      />
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BrowserRouter>
          <AppBar position="static" sx={{ boxShadow: "none" }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, display: { xs: "block", md: "none" } }}
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                WeatherWiz
              </Typography>
              <Search sx={{ display: { xs: "none", sm: "flex" } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search by location…"
                  inputProps={{ "aria-label": "search" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </Search>
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 2, display: { xs: "none", sm: "inline" } }}
                onClick={handleSearch}
              >
                Search
              </Button>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <RouterLink
                  to="/about"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Button color="inherit">About</Button>
                </RouterLink>
              </Box>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<DataFetch searchData={searchData} />} />
            <Route path="about" element={<About />} />
            <Route
              path="weather/*"
              element={<DataFetch searchData={searchData} />}
            />
          </Routes>
          <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={(e) => e.stopPropagation()}
            >
              <List>
                <ListItem
                  button
                  component={RouterLink}
                  to="/"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  button
                  component={RouterLink}
                  to="/about"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ListItemText primary="About" />
                </ListItem>
                <Divider />
                <ListItem>
                  <Search
                    sx={{ display: "flex" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search by location…"
                      inputProps={{ "aria-label": "search" }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                    />
                  </Search>
                </ListItem>
                <ListItem>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSearch();
                    }}
                  >
                    Search
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
