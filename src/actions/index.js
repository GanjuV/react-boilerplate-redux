import axios from 'axios'

const API_KEY = '47ef4d8a79181cffac4283bac64e1931'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATEHR = 'FETCH_WEATEHR'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATEHR,
    payload: request
  }
}