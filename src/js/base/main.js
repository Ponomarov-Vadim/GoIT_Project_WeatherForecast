import axios from 'axios';
import { responseParser } from '../base/responseParser';
import mainPageWeatherInfo from '../base/mainPageWeatherInfo';
import getFiveDateWeather from '../base/five_days_weather';
import getWeather from '../base/three_hours_weather';

import PNotify from '../../../node_modules/pnotify/dist/es/PNotify';
import '../../../node_modules/pnotify/dist/PNotifyBrightTheme.css';

const BASE_URL = ' https://pixabay.com/api/';
const KEY = '15725306-bc876a9032cf9c2bacf7059da';

const appid = 'e8208d2596ef2ec6abe477b7469a394e';
import showChart from './diagram';

const findFromFavorite = document.querySelector('.link-wrap');
const dateTimeContainer = document.querySelector(`.date-time-container`);
const formSearchCity = document.querySelector('.search-wrap');
const inputSearchCity = document.querySelector('.search-wrap__form-input');

formSearchCity.addEventListener(`submit`, event => {
  event.preventDefault();
  pullRequest(inputSearchCity.value);
});

export default function pullRequest(city, lat = undefined, lon = undefined) {
  const parametrSearch =
    lat === undefined ? `&q=${city}` : `&lat=${lat}&lon=${lon}`;
  const requestString = `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en${parametrSearch}`;
  axios
    .get(requestString)
    .then(response => {
      dateTimeContainer.innerHTML = '';
      const parseData = responseParser(response);
      console.log(parseData);
      backgroudImage(parseData.city.name);
      mainPageWeatherInfo(parseData);
      getFiveDateWeather(parseData);
      getWeather(parseData);
      showChart(parseData);
    })
    .catch(() => pnotifyInfo());
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

function backgroudImage(searchWord) {
  axios
    .get(
      `${BASE_URL}?key=${KEY}&q=${searchWord}&category='places'&safesearch=true&min_height=2024`,
    )
    .then(res => {
      document.body.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.05) 100%), url(${res.data.hits[0].largeImageURL})`;
    })
    .catch(e => backgroudImage('city+sky'));
}

function pnotifyInfo() {
  PNotify.info({
    title: 'Упс',
    text: 'Ваш город не найден.',
    delay: 2500,
  });
}
