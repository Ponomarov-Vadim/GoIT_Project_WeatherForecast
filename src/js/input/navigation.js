import pullRequest from '../base/main';

// import PNotify from '../../../node_modules/pnotify/dist/es/PNotify';
// import '../../../node_modules/pnotify/dist/PNotifyBrightTheme.css';

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
    .catch(error => {
      console.log(error);
    // pnotifyError()
  });
}

const btnLocation = document.querySelector('#location');
btnLocation.addEventListener('click', getCoords);


// function pnotifyError() {
//   PNotify.info({
//     title: '',
//     text: 'Ваш город не найден. Попробуйте другое название.',
//     delay: 2000,
//   });
// }
