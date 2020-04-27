import five_days_weather from '../../templates/five_days_weather.hbs';

export default function getFivaDaysWeather ( parseData ) {
    const fiveDaysWeather = document.querySelector( `.date-time-container` );
    const weekDaysArr = parseData.list;
    const weekDay = weekDaysArr.map( element => getWeekDay( element.date ) );
    const monthDay = weekDaysArr.map( el => getDayMonth( el.date ) );
    const icon = weekDaysArr.map( elem => elem.forecast[0].weather[0].icon );
    const markup = parseData.list.reduce( ( acc, el, index ) => acc + `<div class="date-time-wrap">${five_days_weather( { el, weekDay: weekDay[index], monthDay: monthDay[index], icon: icon[index] } )}</div>`, `` );
    fiveDaysWeather.insertAdjacentHTML( `beforeend`, markup );
    getDayMonth( 1587999600 )
}

function getWeekDay ( date ) {
    const daysArr = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const time = new Date( ( date ) * 1000 );
    const weekDays = daysArr[time.getDay()];
    return weekDays;
}

function getDayMonth ( date ) {
    const dayMonth = new Date( ( date ) * 1000 );
    const monthDay = dayMonth.getDate();
    const monthArr = ['Jun', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const monthName = monthArr[dayMonth.getMonth()];
    return `${monthDay} ${monthName}`;
}