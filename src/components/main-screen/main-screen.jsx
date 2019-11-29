import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import CityList from '../city-list/city-list';
import {connect} from 'react-redux';
import withActiveItem from '../../hocs/with-active-item';
import {Link} from 'react-router-dom';
import {CardType} from '../../constants';
import Sorting from '../sorting/sorting';
import withVisibilityStatus from '../../hocs/with-visibility-status';
import {selectSortedOffers} from '../../store/selectors';
import MainEmpty from '../main-empty/main-empty';

const OffersListWrapped = withActiveItem(OffersList);
const SortingWrapped = withVisibilityStatus(Sorting);

const MainScreen = (props) => {
  const {isAuthorizationRequired, isOffersLoaded, user, isUserStateDefined, city, offers, activePin, allOffers} = props;
  if (allOffers.length > 0 & (!isOffersLoaded || !isUserStateDefined)) {
    return null;
  } else {
    return <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={isAuthorizationRequired ? `/login` : `/favorite`}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{isAuthorizationRequired ? `Sign In` : user.email}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {allOffers.length > 0 ? (
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} {offers.length === 1 ? `place` : `places`} to stay in {city.name}</b>
                <SortingWrapped />
                <OffersListWrapped cardType={CardType.CITIES} offers={offers}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={city}
                    offers={offers}
                    activePin={activePin}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      ) : <MainEmpty />}
    </div>;
  }
};

MainScreen.propTypes = {
  isOffersLoaded: PropTypes.bool.isRequired,
  isUserStateDefined: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }),
  offers: PropTypes.array.isRequired,
  activePin: PropTypes.number.isRequired,
  allOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  user: state.user.user,
  isOffersLoaded: state.data.isOffersLoaded,
  isUserStateDefined: state.user.isUserStateDefined,
  city: state.user.city,
  offers: selectSortedOffers(state),
  activePin: state.user.activePinID,
  allOffers: state.data.allOffers,
});

export {MainScreen};

export default connect(mapStateToProps)(MainScreen);
