import firstDay from '../base/three hours weather/first_day';
import secondDay from '../base/three hours weather/second_day';
import thirdDay from '../base/three hours weather/third_day';
import fourthDay from '../base/three hours weather/fourth_day';
import fiveDay from '../base/three hours weather/five_day';
import sixDay from '../base/three hours weather/six_day';
import { responseParser } from '../base/responseParser';
import axios from 'axios';



export default function getWeather () {
    // First day
    document.querySelector( `.date-time-container` ).childNodes[0].addEventListener( `click`, ( event => {
        const city = document.querySelector( `.main-city-weather__city-name` ).innerHTML;
        const appid = 'e8208d2596ef2ec6abe477b7469a394e';
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
            )
            .then( response => {
                const parseData = responseParser( response );
                firstDay( parseData );
            } );
    } ) )

    // Second day

    document.querySelector( `.date-time-container` ).childNodes[1].addEventListener( `click`, event => {
        const city = document.querySelector( `.main-city-weather__city-name` ).innerHTML;
        const appid = 'e8208d2596ef2ec6abe477b7469a394e';
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
            )
            .then( response => {
                const parseData = responseParser( response );
                secondDay( parseData );
            } );
    } );
    document.querySelector( `.date-time-container` ).childNodes[2].addEventListener( `click`, ( event => {
        const city = document.querySelector( `.main-city-weather__city-name` ).innerHTML;
        const appid = 'e8208d2596ef2ec6abe477b7469a394e';
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
            )
            .then( response => {
                const parseData = responseParser( response );
                thirdDay( parseData );
            } );
    } ) );
    document.querySelector( `.date-time-container` ).childNodes[3].addEventListener( `click`, ( event => {
        const city = document.querySelector( `.main-city-weather__city-name` ).innerHTML;
        const appid = 'e8208d2596ef2ec6abe477b7469a394e';
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
            )
            .then( response => {
                const parseData = responseParser( response );
                fourthDay( parseData );
            } );
    } ) );
    document.querySelector( `.date-time-container` ).childNodes[4].addEventListener( `click`, ( event => {
        const city = document.querySelector( `.main-city-weather__city-name` ).innerHTML;
        const appid = 'e8208d2596ef2ec6abe477b7469a394e';
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
            )
            .then( response => {
                const parseData = responseParser( response );
                fiveDay( parseData );
            } );
    } ) );
    document.querySelector( `.date-time-container` ).childNodes[5].addEventListener( `click`, ( event => {
        const city = document.querySelector( `.main-city-weather__city-name` ).innerHTML;
        const appid = 'e8208d2596ef2ec6abe477b7469a394e';
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/forecast?APPID=${appid}&units=metric&lang=en&q=${city}`,
            )
            .then( response => {
                const parseData = responseParser( response );
                sixDay( parseData );
            } );
    } ) );

}