import getThreeHoursWeather from './weatherOnTheDay';

document
  .querySelector(`.date-time-container`)
  .addEventListener('click', createThreeHoursWeatherBlock);

function findTheParent(child) {
  return (parent =
    child.classList[0] !== 'date-time-wrap'
      ? findTheParent(child.parentNode)
      : child);
}

function getDayMonth(date) {
  const dayMonth = new Date(date * 1000);
  const monthDay = dayMonth.getUTCDate();
  return monthDay;
}

let parseData;
function createThreeHoursWeatherBlock(e) {
  if (e.currentTarget !== e.target) {
    const parent = findTheParent(e.target);
    const day = Number.parseInt(
      parent.querySelector('.date-time-wrap__info-date').textContent,
    );
    const dayInMonth = parseData.list.filter(
      el => getDayMonth(el.date) === day,
    );
    getThreeHoursWeather(dayInMonth[0]);
  }
}

export default function getWeather(parseDataFromRequest) {
  document.querySelector(`.three-hour-weather`).innerHTML = '';
  parseData = parseDataFromRequest;
}
