import getThreeHoursWeather from './weatherOnTheDay';

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

export default function getWeather(parseData) {
  document.querySelector(`.three-hour-weather`).innerHTML = '';
  document
    .querySelector(`.date-time-container`)
    .addEventListener('click', e => {
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
    });
}
