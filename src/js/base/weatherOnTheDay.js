import three_hours_weather from '../../templates/three_hours_weather.hbs';

function transformTime(timeInput) {
  const time = new Date(timeInput * 1000);

  const hours = Math.floor(
    (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  ).toString();

  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString();

  return `${hours.length < 2 ? `0${hours}` : hours}:${
    mins.length < 2 ? `0${mins}` : mins
  }`;
}

export default function getThreeHoursWeather(dayInMonth) {
  document.querySelector(`.three-hour-weather`).innerHTML = ``;
  const time = dayInMonth.forecast.map(elem => elem.dt);
  const t = time.map(el => transformTime(el));
  const threeHoursDiv = document.querySelector(`.three-hour-weather`);
  const markup = dayInMonth.forecast.reduce(
    (acc, el, index) =>
      acc +
      `<div class="three-hour-weather__more-info">${three_hours_weather({
        el,
        time: t[index],
      })}</div>`,
    '',
  );
  threeHoursDiv.insertAdjacentHTML(`beforeend`, markup);
}
