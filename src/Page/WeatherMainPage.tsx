import { Box, Stack } from "@mui/material";

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

  // Extract the current timestamp
  const currentTimestamp = new Date().getTime() / 1000;

  // Extract the hourly forecast for the current day and filter for upcoming hours
  const hourlyForecast =
    weatherData?.forecast?.forecast?.forecastday[0]?.hour.filter(
      (hour: any) => hour.time_epoch > currentTimestamp
    ) || [];

  return (
    <div>
      <h1 style={{ color: "green", display: "flex", justifyContent: "center" }}>
        {weatherData?.current?.location?.name} (
        {weatherData?.current?.location?.region},
        {weatherData?.current?.location?.country})
      </h1>
      <h4>
        Time:
        {weatherData?.current?.location?.localtime
          ? weatherData.current?.location.localtime
          : "Loading..."}
      </h4>
      <p>
        Sunrise:{" "}
        {weatherData?.forecast?.forecast?.forecastday[0]?.astro?.sunrise}
      </p>
      <p>
        Sunset: {weatherData?.forecast?.forecast?.forecastday[0]?.astro?.sunset}
      </p>
      <Stack direction="row" spacing={2}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "start",
            border: "1px solid black",
            padding: "1px",
            flex: "1",
          }}
        >
          <Box>
            <p>Current</p>
            <p>Temperature: {weatherData?.current?.current?.temp_c}°C</p>
          </Box>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <span>
                Condition: {weatherData?.current?.current?.condition?.text}
              </span>
            </Stack>
          </Box>
          <Box>
            <p>Wind: {weatherData?.current?.current?.wind_mph} mph</p>
          </Box>
          <p>
            {" "}
            <img
              src={weatherData?.current?.current?.condition?.icon}
              alt={weatherData?.current?.current?.condition?.text}
              style={{ width: 50, height: 50 }} // Adjust size as needed
            />
          </p>
        </Box>
        {hourlyForecast.slice(0, 5).map((hour: any) => (
          <Box
            key={hour.time_epoch}
            sx={{
              display: "flex",
              justifyContent: "start",
              flexDirection: "column",
              alignItems: "start",
              border: "1px solid black",
              padding: "1px",
              flex: "1",
              marginRight: "8px", // Adds space between boxes
            }}
          >
            <h3>Hourly Forecast</h3>
            <p>Time: {hour.time}</p>
            <p>Temperature: {hour.temp_c}°C</p>
            <p>Condition: {hour.condition.text}</p>
            <img
              src={hour.condition.icon}
              alt={hour.condition.text}
              style={{ width: 50, height: 50 }} // Adjust size as needed
            />
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default WeatherMainPage;
