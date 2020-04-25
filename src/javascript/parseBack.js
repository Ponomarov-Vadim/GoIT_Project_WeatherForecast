import axios from 'axios';

const appid = 'e8208d2596ef2ec6abe477b7469a394e';
// const city = 'Киев';
// const city = 'Токио';
const city = 'Los Angeles';
// axios
//   .get(
//     `https://api.openweathermap.org/data/2.5/weather?APPID=${appid}&units=metric&lang=en&q=${city}`,
//   )
//   .then(res => {
//     console.log(res);
//   }); для главной страницы /\ /\ /\ /\ /\ /\

//Для 5 днеаного прогноза \/ \/ \/ \/ \/ \/
axios
  .get(
    `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
  )
  .then(response => {
    const getDate = data => new Date(data.dt * 1000).getUTCDate();

    const dates = response.data.list
      .map(element => getDate(element))
      .filter((el, idx, arr) => arr.indexOf(el) === idx);

    const list = dates
      .map(el => response.data.list.filter(elem => getDate(elem) === el))
      .map(element => ({
        date: element[0].dt,
        forecast: element,
      }));

    const changedData = {
      ...response.data,
      list,
    };

    console.log(changedData);

    /*
    let weatherOnDay = [];
    let arrayWeather = [];
    //----------------------
    res.data.list.forEach(item => {
      weatherOnDay.push(item);
      if (transformDate(item.dt) === 21) {
        arrayWeather.push(weatherOnDay);
        weatherOnDay = [];
      }
    });
    //------------------------------
    arrayWeather.push(weatherOnDay);
    console.log(arrayWeather);

    let otvet = {
      city: {
        country: res.data.city.country,
        name: res.data.city.name,
        sunrise: res.data.city.sunrise, // Привести к часам и минутам
        sunset: res.data.city.sunset, // Привести к часам и минутам
      },

      days: arrayWeather.reduce((dayInfo, item) => {
        const newElement = {
          dateTime: item[0].dt, // привести к дате

          threeHours: item.reduce((acc, element) => {
            const hourWeather = {
              time: `${transformDate(element.dt)}:00`,
              temp: element.main.temp,
              pressure: element.main.pressure,
              humidity: element.main.humidity,
              windSpeed: element.wind.speed,
              icon: element.weather[0].icon,
            };
            return [...acc, hourWeather];
          }, []),

          minTemp: item.reduce((min, temp) => {
            return temp.main.temp_min < min ? temp.main.temp_min : min;
          }, item[0].main.temp_min),

          maxTemp: item.reduce((max, temp) => {
            return temp.main.temp_max < max ? temp.main.temp_max : max;
          }, item[0].main.temp_max),
        };
        return [...dayInfo, newElement];
      }, []),
    };

    console.log(otvet);*/
  });

function transformDate(sec) {
  return Math.floor(((sec * 1000) % 86400000) / 3600000);
}
