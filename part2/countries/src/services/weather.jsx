import axios from "axios"

const API_KEY = "a3fd9736c99cab8dfd0518e068f07d8f"
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

const getWeatherByCity = (city) => {
  return axios
    .get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.data);
};

export default { getWeatherByCity };