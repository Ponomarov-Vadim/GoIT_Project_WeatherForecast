import phrases from '../../js/quote/phrases_array';
import randomNumberSelection from '../../js/quote/randomNumberSelection.js';
import markup from '../../templates/phrasesTemplate.hbs';

const markupForPhrases = function ( markup ) {
    const randomPhrases = phrases[randomNumberSelection( 0, phrases.length - 1 )];
    const markupPhrases = markup( randomPhrases );
    document
        .querySelector( '.quote-wrap' )
        .insertAdjacentHTML( 'beforeend', markupPhrases );
};
markupForPhrases( markup );