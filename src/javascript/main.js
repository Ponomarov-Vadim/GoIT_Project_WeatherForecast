import axios from 'axios';
import { responseParser, minDayTemp, maxDayTemp } from './responseParser';
import mainPageWeatherInfo from './mainPageWeatherInfo';

const appid = 'e8208d2596ef2ec6abe477b7469a394e';
// Test's
// const city = 'Киев';
// const city = 'Токио';
const city = 'Los Angeles';
// const city = 'Чугуев';
// Test's

axios
  .get(
    `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
  )
  .then(response => {
    const parseData = responseParser(response);

    mainPageWeatherInfo(parseData);

    console.log(parseData);
    console.log(minDayTemp(parseData.list[0]));
    console.log(maxDayTemp(parseData.list[0]));
    //Для 5 дневного прогноза list можно целиком засунуть в шаблонизатор
    //главное не забыть за цикл в шаблоне /\ /\ /\ /\ /\ /\
  });
