import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import FavoriteCity from '../favorite-city/favorite-city';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {getAllFavoriteOffers} from '../../store/selectors';

export const Favorites = (props) => {
  const {favoriteOffers, user} = props;

  const getCityNamesFromFavorite = (offers) => {
    return [...new Set(offers.map((offer) => offer.city.name))];
  };

  const getCityFromName = (cityName) => favoriteOffers.find((offer) => offer.city.name === cityName).city;

  const favoriteCities = getCityNamesFromFavorite(favoriteOffers).map((cityName) => getCityFromName(cityName));

  const getCityFavoriteOffers = (city, allFavoriteOffers) => {
    return allFavoriteOffers.filter((offer) => offer.city.name === city.name);
  };

  return favoriteOffers.length === 0 ? <FavoritesEmpty user={user}/> : (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to="/" className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to="/favorites"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                      <img className="reviews__avatar user__avatar" src={`https://htmlacademy-react-2.appspot.com/six-cities${user.avatar}`} width="54" height="54" alt="User avatar" />
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteCities.map((city) => <FavoriteCity key={city.name} city={city} offers={getCityFavoriteOffers(city, favoriteOffers)} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  favoriteOffers: PropTypes.array.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favoriteOffers: getAllFavoriteOffers(state),
  user: state.user.user,
});

export default connect(mapStateToProps)(Favorites);
