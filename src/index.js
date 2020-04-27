import './sass/styles.scss';

import './js/input/add-city'
import './js/input/navigation'
import './javascript/responseParser';
import './javascript/mainPageWeatherInfo';
import './javascript/main';

import phrases from './phrases';
import randomNumberSelection from './randomNumberSelection.js';
import markup from './template/phrasesTemplate.hbs';
import dateTimeLoader from "./date-time-info/loadDate";

const markupForPhrases = function (markup) {
  const randomPhrases = phrases[randomNumberSelection(0, phrases.length - 1)];
  const markupPhrases = markup(randomPhrases);
  document
    .querySelector('.quote-wrap')
    .insertAdjacentHTML('beforeend', markupPhrases);
};
markupForPhrases(markup);
