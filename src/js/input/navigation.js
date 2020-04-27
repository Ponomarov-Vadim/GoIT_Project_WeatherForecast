function getCurrentPosition(e) {
  const options = {
    timeout: 10000,
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

function getCoords(e) {
  // e.preventDefault();

  getCurrentPosition()
    .then(location => {
      console.log('lat:', location.coords.latitude.toFixed(4));
      console.log('lon:', location.coords.longitude.toFixed(4));
    })
    .catch(error => console.log(error));
}

const btnLocation = document.querySelector('#location');
btnLocation.addEventListener('click', getCoords);