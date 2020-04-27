import phrases from './phrases';
import randomNumberSelection from './randomNumberSelection.js';
import markup from '../template/phrasesTemplate.hbs';

const markupForPhrases = function (markup) {
    const randomPhrases = phrases[randomNumberSelection(0, phrases.length - 1)];
    const markupPhrases = markup(randomPhrases);
    document
      .querySelector('.quote-wrap')
      .insertAdjacentHTML('beforeend', markupPhrases);
  };
  markupForPhrases(markup);