import pullRequest from '../base/main';

function getCurrentPosition ( e ) {
  const options = {
    timeout: 10000,
  };
  return new Promise( ( resolve, reject ) => {
    navigator.geolocation.getCurrentPosition( resolve, reject, options );
  } );
}

function getCoords ( e ) {
  getCurrentPosition()
    .then( location => {
      const lat = location.coords.latitude.toFixed( 4 );
      const lon = location.coords.longitude.toFixed( 4 );
      pullRequest( '', lat, lon );
      setTimeout( () => {
        const inputSearchCity = document.querySelector( '.search-wrap__form-input' );
        const cityName = document.querySelector( `.main-city-weather__city-name` );
        console.dir( inputSearchCity );
        inputSearchCity.value = cityName.textContent;
      }, 400 );
    } )
    .catch( error => console.log( error ) );
}

const btnLocation = document.querySelector( '#location' );
btnLocation.addEventListener( 'click', getCoords );
