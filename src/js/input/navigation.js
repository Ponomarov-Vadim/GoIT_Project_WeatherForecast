import pullRequest from '../base/main';

function getCurrentPosition(e) {
  const options = {
    timeout: 10000,
  };
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function getCoords(e) {
  getCurrentPosition()
    .then(location => {
      const lat = location.coords.latitude.toFixed(4);
      const lon = location.coords.longitude.toFixed(4);
      pullRequest('', lat, lon);
    })
    .catch(error => console.log(error));
}

const btnLocation = document.querySelector('#location');
btnLocation.addEventListener('click', getCoords);
