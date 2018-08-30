import axios from 'axios';

export function searchInput(input) {
  return {
    type: 'SEARCH_INPUT',
    payload: { input }
  };
}

export function getWeather(input) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=0ca1129542d31a3d22209b4bd9b1deda`;
  return {
    type: 'GET_WEATHER',
    payload: axios.get(url)
  };
}

// export function pending() {
//   return {
//     type: 'GET_WEATHER_PENDING',
//   };
// }

// export function fulfilled(input) {
//   return {
//     type: 'GET_WEATHER_FULFILLED',
//     payload: getWeather(input)
//   };
// }

// export function rejected() {
//   return {
//     type: 'GET_WEATHER_REJECTED',
//     error: true
//   };
// }
