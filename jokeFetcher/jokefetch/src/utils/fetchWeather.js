export const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=d41ae6c455564821aa7123938250902&q=${city}`
    );
    if (!response.ok) throw new Error("Failed to fetch weather data");

    return await response.json();
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
