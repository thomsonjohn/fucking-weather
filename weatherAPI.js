const rootUrl =
  "api.openweathermap.org/data/2.5/weather?appid=91fdd8cf4d600dc28ab8e347bc88f1dd";

export const fetchWeather = (lat, lon) => {
  const url = rootUrl + "&lat=" + lat + "&lon=" + lon;
  console.log(url);
};
