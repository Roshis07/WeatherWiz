import React from "react";
import WeatherMainPage from "../Page/WeatherMainPage";

interface DataFetchProps {
  searchData: string;
}

const DataFetch: React.FC<DataFetchProps> = ({ searchData }) => {
  const [weatherData, setWeatherData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchWeatherData = async (lat?: number, lon?: number) => {
      let url = "";
      if (searchData) {
        url = `https://api.weatherapi.com/v1/current.json?key=1bcab1c1c7744105b8811901242407&q=${encodeURIComponent(
          searchData
        )}`;
      } else if (lat !== undefined && lon !== undefined) {
        url = `https://api.weatherapi.com/v1/current.json?key=1bcab1c1c7744105b8811901242407&q=${lat},${lon}`;
      } else {
        return;
      }

      setLoading(true);
      try {
        const currentWeatherUrl = url;
        const forecastUrl = `${url.replace(
          "current.json",
          "forecast.json"
        )}&days=3`;

        const [currentResponse, forecastResponse] = await Promise.all([
          fetch(currentWeatherUrl),
          fetch(forecastUrl),
        ]);

        if (!currentResponse.ok || !forecastResponse.ok) {
          throw new Error(`One or both requests failed.`);
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        const combinedData = {
          current: currentData,
          forecast: forecastData,
        };

        setWeatherData(combinedData);
      } catch (error) {
        console.error("Fetch error:", error);
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error("An unknown error occurred"));
        }
      } finally {
        setLoading(false);
      }
    };

    if (!searchData) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setError(new Error("Failed to retrieve geolocation"));
          setLoading(false);
        }
      );
    } else {
      fetchWeatherData();
    }
  }, [searchData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!weatherData) return <p>No data available</p>;

  return (
    <div>
      <WeatherMainPage
        weatherData={weatherData}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default DataFetch;
