import React from "react";
import backgroundImage from "../assets/image/background.jpg";
import About from "./About";
const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
      }}
    >
      <About></About>
    </div>
  );
};

export default HomePage;
