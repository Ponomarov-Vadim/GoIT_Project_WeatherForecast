import three_hours_weather from '../../../templates/three_hours_weather.hbs';
import moment from 'moment';

export default function getThreeHoursWeatherSecondDay ( parseData ) {
    document.querySelector( `.three-hour-weather` ).innerHTML = ``;
    const time = parseData.list.map( el => el.forecast.map( elem => elem.dt ) );
    const t = time[1].map( el => moment.unix( el ).format( 'HH:mm' ) );
    const threeHoursDiv = document.querySelector( `.three-hour-weather` );
    const markup = parseData.list[1].forecast.reduce( ( acc, el, index ) => acc + `<div class="three-hour-weather__more-info">${three_hours_weather( { el, time: t[index] } )}</div>`, '' );
    threeHoursDiv.insertAdjacentHTML( `beforeend`, markup );
}