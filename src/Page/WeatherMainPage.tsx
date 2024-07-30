import { Box, Stack } from "@mui/material";
import CurrentWeather from "./CurrentWeather";
import HourlyWeatherForecast from "./HourlyWeatherForecast";
import FutureDayForecast from "./FutureDayForecast";

interface WeatherMainPageProps {
  weatherData: any;
  loading: boolean;
  error: Error | null;
}

const WeatherMainPage: React.FC<WeatherMainPageProps> = ({
  weatherData,
  loading,
  error,
}) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Box>
        <CurrentWeather weatherData={weatherData}></CurrentWeather>
      </Box>
      <Box>
        <HourlyWeatherForecast
          weatherData={weatherData}
        ></HourlyWeatherForecast>
      </Box>
      <Box>
        <FutureDayForecast weatherData={weatherData}></FutureDayForecast>
      </Box>
    </>
  );
};

export default WeatherMainPage;
