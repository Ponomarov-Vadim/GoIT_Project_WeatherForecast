'use strict';

const refsFlag = {
  activeDay: false,
  isActiveChart: true,
  isActivThreeHour: false,
};
const refsBtn = {
  mainBtnContainer: document.querySelector('.main-buttons-container'),
  today: document.querySelector('.main-buttons__button-today'),
  fiveDays: document.querySelector('.main-buttons__button-five-days'),
  hideChart: document.querySelector('.button-holder--hide'),
  arrow: document.querySelector('.date-time-arrow'),
  showChartImg: document.querySelector('.diagram__button--show-chart'),
};

const refsBlock = {
  fiveDays: document.querySelector('.five-days-info'),
  today: document.querySelector('.date-container'),
  todayTimeContainer: document.querySelector('.date-time-container'),
  hourBlock: document.querySelector('.three-hour'),
  diagramBlock: document.querySelector('.diagram__wrap'),
  mainCityBlock: document.querySelector('.main-city-weather'),
  quoteBlock: document.querySelector('.date-quote-wrap'),
  labelBlock: document.querySelector('.diagram__label'),
  mainBtnBlock: document.querySelector('.main-buttons'),
  showChart: document.querySelector('.button-holder--show'),
  mainTitle: document.querySelector('h2'),
  sectionDiagram: document.querySelector('.diagram'),
};
const refsArrow = {
  left: document.querySelector('.date-time-arrow-left'),
  right: document.querySelector('.date-time-arrow-right'),
};

// const dateTitle = document.querySelectorAll('.date-time-wrap__title')

refsBtn.mainBtnContainer.addEventListener('click', showInfo);
refsBlock.showChart.addEventListener('click', showChart);
refsBtn.hideChart.addEventListener('click', hideChart);
refsBlock.todayTimeContainer.addEventListener('click', showThreeHourInfo);
refsBtn.arrow.addEventListener('click', showHideCard);

function showInfo(e) {
  if (e.target == refsBtn.today) {
    showDaysInfo();
  }
  if (e.target == refsBtn.fiveDays) {
    showFiveDaysInfo();
  }
}

function showFiveDaysInfo() {
  if (!refsFlag.activeDay) {
    refsFlag.activeDay = true;
    refsFlag.isActivThreeHour = false;
    refsBlock.hourBlock.classList.add('hidden');
    refsBlock.mainCityBlock.classList.add('hidden');
    refsBlock.quoteBlock.classList.add('hidden');
    refsBlock.fiveDays.classList.remove('hidden');
    refsBlock.today.classList.remove('hidden');
    refsBlock.mainBtnBlock.style.paddingBottom = '32px';
    refsBtn.fiveDays.style.backgroundColor = 'white';
    refsBtn.today.style.backgroundColor = 'rgba(255, 255, 255, .54)';
    refsBlock.labelBlock.classList.remove('hidden');
    refsBtn.showChartImg.classList.remove('hidden');
    refsBlock.mainTitle.classList.remove('hidden');
    refsBlock.sectionDiagram.classList.remove('hidden');
    refsBlock.mainBtnBlock.style.marginRight = 'auto';
  }
}
function showDaysInfo() {
  if (refsFlag.activeDay) {
    refsFlag.activeDay = false;
    if (!refsFlag.isActiveChart) {
      hideChart();
    }
    showThreeHourInfo();
    refsBlock.mainCityBlock.classList.remove('hidden');
    refsBlock.quoteBlock.classList.remove('hidden');
    refsBlock.fiveDays.classList.add('hidden');
    refsBlock.today.classList.add('hidden');
    refsBlock.mainBtnBlock.style.paddingBottom = '32px';
    refsBlock.labelBlock.classList.add('hidden');
    refsBtn.showChartImg.classList.add('hidden');
    refsBtn.fiveDays.style.backgroundColor = '';
    refsBtn.today.style.backgroundColor = '';
    refsBlock.mainTitle.classList.add('hidden');
    refsBlock.mainBtnBlock.style.marginRight = '';
    refsBlock.sectionDiagram.classList.add('hidden');
  }
}
function showChart() {
  if (refsFlag.isActiveChart) {
    refsFlag.isActiveChart = false;
    refsBlock.diagramBlock.classList.remove('hidden');
    refsBlock.labelBlock.classList.add('hidden');
    refsBtn.showChartImg.classList.add('hidden');
  }
}
function hideChart() {
  if (!refsFlag.isActiveChart) {
    refsFlag.isActiveChart = true;
    refsBlock.diagramBlock.classList.add('hidden');
    refsBlock.labelBlock.classList.remove('hidden');
    refsBtn.showChartImg.classList.remove('hidden');
  }
}
function showThreeHourInfo(e) {
  // console.dir(e.target.closest('.date-time-wrap').children[0])
  e.target.closest('.date-time-wrap').children[0].style.color = '#ff6b08';

  if (refsFlag.isActivThreeHour) {

  e.target.closest('.date-time-wrap').children[0].style.color = '';
  
    refsFlag.isActivThreeHour = false;
    refsBlock.hourBlock.classList.add('hidden');
    return;
  }
  refsFlag.isActivThreeHour = true;
  refsBlock.hourBlock.classList.remove('hidden');
}

function showHideCard(e) {
  const blockWidth = refsBlock.todayTimeContainer.scrollWidth;
  const blockLength = refsBlock.todayTimeContainer.children.length;
  const valueScroll = blockWidth / blockLength;

  if (e.target == refsArrow.right) {
    refsBlock.todayTimeContainer.scrollLeft += valueScroll;
  }

  if (e.target == refsArrow.left) {
    refsBlock.todayTimeContainer.scrollLeft -= valueScroll;
  }
}
