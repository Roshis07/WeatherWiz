import React from "react";
import { pink } from "@mui/material/colors";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { Link } from "react-router-dom"; // Correct import

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const About = () => {
  return (
    <div>
      <Link to="/">
        <HomeIcon sx={{ color: pink[500], fontSize: 40 }} />
      </Link>
      <h1 style={{ display: "flex", justifyContent: "center" }}>About</h1>
      <p>
        WeatherWiz is a sleek and user-friendly weather application designed to
        provide accurate and up-to-date weather information. Built with React
        and Material-UI, the app features a responsive design that ensures a
        seamless experience across devices. Users can easily check current
        conditions, forecast details, and more. The intuitive interface and
        clean design make it easy for users to get the weather updates they
        need, whether they're planning their day or checking for upcoming
        changes.
      </p>

      <h3>Developed by Roshis Tamang</h3>
    </div>
  );
};

export default About;
