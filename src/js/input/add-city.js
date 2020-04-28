import markupCity from '../../templates/inputCity.hbs';

const starBtn = document.querySelector( '#star' );
const formSearchCity = document.querySelector( '.search-wrap' );
const inputSearchCity = document.querySelector( '.search-wrap__form-input' );
const linkWrap = document.querySelector( '.link-wrap' );

starBtn.addEventListener( 'click', addFavoritesCity );
linkWrap.addEventListener( 'click', clearFavoriteCity );
// formSearchCity.addEventListener('submit', );

function addFavoritesCity () {
  const inputValue = inputSearchCity.value;
  const cityLocalStorage =
    JSON.parse( localStorage.getItem( 'City' ) ) !== null
      ? JSON.parse( localStorage.getItem( 'City' ) )
      : [];
  if( cityLocalStorage.includes( ucFirst( inputValue ) ) ) {
    return;
  }
  if( inputValue.length > 0 ) {
    starBtn.classList.add( 'change-color' );
    localStorage.setItem(
      'City',
      JSON.stringify(
        !cityLocalStorage
          ? [ucFirst( inputValue )]
          : [...cityLocalStorage, ucFirst( inputValue )],
      ),
    );

    setTimeout( clearColor, 500 );

    createMarkupFavoritesCity( ucFirst( inputValue ) );
  }
}

if( localStorage.getItem( 'City' ) ) {
  const cityLocalStorage = JSON.parse( localStorage.getItem( 'City' ) );

  linkWrap.insertAdjacentHTML(
    'beforeend',
    cityLocalStorage.reduce( ( markup, el ) => `${markup}${markupCity( el )}`, '' ),
  );
}

function createMarkupFavoritesCity ( e ) {
  const markup = markupCity( e );
  linkWrap.insertAdjacentHTML( 'beforeend', markup );
}

function clearColor () {
  starBtn.classList.remove( 'change-color' );
}

function clearFavoriteCity ( e ) {
  e.preventDefault();
  if( e.target.tagName === 'svg' ) {
    e.target.parentNode.remove();
    if( localStorage.getItem( 'City' ) ) {
      const cityLocalStorage = JSON.parse( localStorage.getItem( 'City' ) );
      const a = e.target.previousSibling.previousSibling.outerText;
      const b = cityLocalStorage.filter( item => !a.includes( item ) );
      localStorage.setItem( 'City', JSON.stringify( [...b] ) );
    }
  }
}

function ucFirst ( str ) {
  if( !str ) return str;
  return str[0].toUpperCase() + str.slice( 1 ).toLowerCase();
}
