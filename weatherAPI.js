const rootUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=91fdd8cf4d600dc28ab8e347bc88f1dd";

export const fetchWeather = (lat, lon) => {
  const url = rootUrl + "&lat=" + lat + "&lon=" + lon + "&units=metric";
  console.log(url);

  return fetch(url)
    .then(res => res.json())
    .then(json => ({
      temp: json.main.temp,
      weather: json.weather[0].main
    }))
    .catch(err => console.log(err.message));
};
