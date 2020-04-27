export function responseParser(response) {
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

  return changedData;
}

export function minDayTemp(day) {
  return Math.floor(
    day.forecast.reduce((min, temp) => {
      return temp.main.temp_min < min ? temp.main.temp_min : min;
    }, day.forecast[0].main.temp_min),
  );
}

export function maxDayTemp(day) {
  return Math.floor(
    day.forecast.reduce((max, temp) => {
      return temp.main.temp_max > max ? temp.main.temp_max : max;
    }, day.forecast[0].main.temp_max),
  );
}
