import * as moment from 'moment';

const refs = {
  infoMainDate: document.querySelector('[data-action="load-main-date"]'),
  infoMonth: document.querySelector('[data-action="load-month"]'),
  infoTime: document.querySelector('[data-action="load-info-time"]'),
};

const dateInfo = function (day, date, month) {
  refs.infoMainDate.textContent = `${date}${day}`;
  refs.infoMonth.textContent = month;
};

const timeInfo = function () {
  setInterval(() => {
    const currentTime = moment().format('HH:mm:ss');
    refs.infoTime.textContent = currentTime;
  }, 1000);
};

const handleDateTimeInfo = function () {
  const date = moment().format('DD ');
  const day = moment().format('ddd');
  const month = moment().format('MMMM');
  dateInfo(day, date, month);
  timeInfo();
};
handleDateTimeInfo();
