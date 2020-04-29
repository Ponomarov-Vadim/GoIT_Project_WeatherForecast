import axios from 'axios';
import { responseParser } from '../base/responseParser';
import mainPageWeatherInfo from '../base/mainPageWeatherInfo';
import getFiveDateWeather from '../base/five_days_weather';
import getWeather from '../base/three_hours_weather';

const appid = 'e8208d2596ef2ec6abe477b7469a394e';
import showChart from './diagram';

const findFromFavorite = document.querySelector('.link-wrap');

const formSearchCity = document.querySelector('.search-wrap');
const inputSearchCity = document.querySelector('.search-wrap__form-input');

formSearchCity.addEventListener(`submit`, event => {
  event.preventDefault();
  pullRequest(inputSearchCity.value);
});

export default function pullRequest(city, lat = undefined, lon = undefined) {
  document.querySelector(`.date-time-container`).innerHTML = '';
  const parametrSearch =
    lat === undefined ? `&q=${city}` : `&lat=${lat}&lon=${lon}`;
  const requestString = `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en${parametrSearch}`;
  axios.get(requestString).then(response => {
    const parseData = responseParser(response);
    console.log(parseData);

    mainPageWeatherInfo(parseData);
    getFiveDateWeather(parseData);
    getWeather(parseData);
    showChart(parseData);
  });
}

function whatIsCity(e) {
  if (e.target !== e.currentTarget) {
    let city =
      e.target.classList[0] === 'link-wrap__text'
        ? e.target.querySelector('p').textContent
        : e.target.tagName === 'P'
        ? e.target.textContent
        : '';
    city !== '' ? pullRequest(city) : undefined;
  }
}

findFromFavorite.addEventListener('click', whatIsCity);

pullRequest('London');
