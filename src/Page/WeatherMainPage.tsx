import { Box } from "@mui/material";

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
    <div>
      <h1 style={{ color: "green", display: "flex", justifyContent: "center" }}>
        {weatherData?.location?.name}
      </h1>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <p>Temperature: {weatherData?.current?.temp_c}°C</p>
        </Box>
        <Box>
          <p>Condition: {weatherData?.current?.condition?.text}</p>
        </Box>
        <Box>
          <p>Wind: {weatherData?.current?.wind_mph} mph</p>
        </Box>
      </Box>
    </div>
  );
};

export default WeatherMainPage;
