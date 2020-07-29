import five_days_weather from '../../templates/five_days_weather.hbs';

export default function getFivaDaysWeather ( parseData ) {
    const fiveDaysWeather = document.querySelector( `.date-time-container` );
    const weekDaysArr = parseData.list;
    // Get week day Name
    const weekDay = weekDaysArr.map( element => getWeekDay( element.date ) );
    // Get month name and date
    const monthDay = weekDaysArr.map( el => getDayMonth( el.date ) );
    // Get weather icon
    const icon = weekDaysArr.map( elem => elem.forecast[0].weather[0].icon );
    // Get array with min and max temperature
    const temp = weekDaysArr.map( el => el.forecast.map( elem => elem.main ) );
    // Get max temp
    const maxArr = temp.map( el => el.map( elem => Math.round( elem.temp_max ) ) );
    const sortMax = maxArr.map( el => el.sort( ( a, b ) => a - b ) );
    const maxTemp = sortMax.map( el => el.pop() );
    // Get min temp
    const minArr = temp.map( el => el.map( elem => Math.round( elem.temp_min ) ) );
    const sortMin = minArr.map( el => el.sort( ( a, b ) => a - b ) );
    const minTemp = sortMin.map( el => el.shift() );

    const arr = parseData.list;
    arr.length = 5;
    // Render template
    const markup = arr.reduce( ( acc, el, index ) => acc + `<div class="date-time-wrap">${five_days_weather( { el, weekDay: weekDay[index], monthDay: monthDay[index], icon: icon[index], maxTemp: maxTemp[index], minTemp: minTemp[index] } )}</div>`, `` );
    fiveDaysWeather.insertAdjacentHTML( `beforeend`, markup );
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