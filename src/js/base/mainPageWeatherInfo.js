import { minDayTemp, maxDayTemp } from './responseParser';

const sunrise = document.querySelector('.main-date-wrap__sun-sunrise');
const sunset = document.querySelector('.main-date-wrap__sun-sunset');
const mainPageMaxTemp = document.querySelector('.max-temperature__value');
const mainPageMinTemp = document.querySelector('.min-temperature__value');
const mainPageTemp = document.querySelector('.main-city-weather__temperature');
const mainPageCity = document.querySelector('.main-city-weather__city-name');
const fiveDaysTitle = document.querySelector('.five-days-title');

export default function mainPageWeatherInfo(parseData) {
  mainPageCity.textContent = `${parseData.city.name}, ${parseData.city.country}`;
  fiveDaysTitle.textContent = `${parseData.city.name}, ${parseData.city.country}`;
  mainPageTemp.textContent = Math.floor(
    parseData.list[0].forecast[0].main.temp,
  );
  mainPageMaxTemp.textContent = `${maxDayTemp(parseData.list[0])}\xB0`;
  mainPageMinTemp.textContent = `${minDayTemp(parseData.list[0])}\xB0`;

  sunrise.textContent = transformSunInfo(
    parseData.city.sunrise,
    parseData.city.timezone,
  );
  sunset.textContent = transformSunInfo(
    parseData.city.sunset,
    parseData.city.timezone,
  );
}

function transformSunInfo(sun, timezone) {
  const time = new Date((sun + timezone) * 1000);

  const hours = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  ).toString();

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString();

  return `${hours.length < 2 ? `0${hours}` : hours}:${
    mins.length < 2 ? `0${mins}` : mins
  }`;
}
//Для главной странички  /\ /\ /\ /\ /\ /\
