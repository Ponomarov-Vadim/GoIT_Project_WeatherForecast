import axios from 'axios';
import { responseParser, minDayTemp, maxDayTemp } from '../base/responseParser';
import mainPageWeatherInfo from '../base/mainPageWeatherInfo';
import getFiveDateWeather from '../base/five_days_weather';

const appid = 'e8208d2596ef2ec6abe477b7469a394e';
import showChart from './diagram';

const formSearchCity = document.querySelector( '.search-wrap' );
const inputSearchCity = document.querySelector( '.search-wrap__form-input' );

formSearchCity.addEventListener( `submit`, ( event => {
  event.preventDefault();
  document.querySelector( `.date-time-container` ).innerHTML = '';
  const city = inputSearchCity.value;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
    )
    .then( response => {
      const parseData = responseParser( response );

      mainPageWeatherInfo( parseData );

      getFiveDateWeather( parseData );
      console.log( parseData );
      console.log( minDayTemp( parseData.list[0] ) );
      console.log( maxDayTemp( parseData.list[0] ) );
      showChart( parseData );
      //Для 5 дневного прогноза list можно целиком засунуть в шаблонизатор
      //главное не забыть за цикл в шаблоне /\ /\ /\ /\ /\ /\
    } );
} ) )
