import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {makeFirstCharCapital, getStatus, getUserAvatar} from '../../util';
import {OfferType, CardType} from '../../constants';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import OffersList from '../offers-list/offers-list';
import withActiveCard from '../../hocs/with-active-card';
import {Operation} from '../../store/action/action-creator';

const OffersListWrapped = withActiveCard(OffersList);

export const OfferDetails = (props) => {
  const {offer, isFavorite, offers, user, isAuthorizationRequired, city, activePin, reviews, onReviewSubmit, onBookmarkClickHandler, onFavoriteClickHandler} = props;
  const {id, title, price, rate, isPremium, photos, type, bedrooms, description, host, goods, maxAdults} = offer;

  const getNeighborOffers = (qtty) => {
    return offers.filter((cityOffer) => cityOffer.id !== offer.id).slice(0, qtty);
  };

  const cardMark = (mark) => {
    return mark ? <div className="property__mark">
      <span>Premium</span>
    </div> : ``;
  };

  const neighborOffers = getNeighborOffers(3);

  const bookmarkCard = (bookmark) => {
    return bookmark ? `property__bookmark-button property__bookmark-button--active button` : `property__bookmark-button button`;
  };

  return <div className="page">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link">
              <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={isAuthorizationRequired ? `/login` : `/favorites`}
                  onClick={isAuthorizationRequired ? null : onFavoriteClickHandler}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {getUserAvatar(isAuthorizationRequired, user)}
                  </div>
                  <span className="header__user-name user__name">{isAuthorizationRequired ? `Sign In` : user.email}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {
              photos.map((photo, i) => <div key={`id${id}-photo${i}`} className="property__image-wrapper">
                <img className="property__image" src={photo} alt={title} />
              </div>)
            }
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {cardMark(isPremium)}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className={bookmarkCard(isFavorite)} type="button" onClick={() => onBookmarkClickHandler(id, getStatus(isFavorite))}>
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${rate * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rate}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {makeFirstCharCapital(OfferType[type.toUpperCase()])}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {
                  goods.map((good) => <li key={good} className="property__inside-item">
                    {good}
                  </li>)
                }
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={`../${host.avatar}`} width="74" height="74" alt="Host avatar" />
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                <span className="property__user-status">
                  {host.isPro ? `Pro` : ``}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <ReviewList reviews={reviews} id={offer.id} onReviewSubmit={onReviewSubmit} isAuthorizationRequired={isAuthorizationRequired}/>
          </div>
        </div>
        <section className="property__map map">
          <Map
            city={city}
            offers={[offer, ...neighborOffers]}
            activePin={activePin}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <OffersListWrapped cardType={CardType.NEAR} offers={neighborOffers} />
        </section>
      </div>
    </main>
  </div>;
};

OfferDetails.propTypes = {
  offers: PropTypes.array.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    photos: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    goods: PropTypes.array.isRequired,
    maxAdults: PropTypes.number.isRequired,
    host: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.shape({}).isRequired,
  activePin: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  onBookmarkClickHandler: PropTypes.func.isRequired,
  onFavoriteClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.user.isAuthorizationRequired,
  user: state.user.user,
  city: state.user.city,
  offers: state.user.cityOffers,
  activePin: state.user.activePinID,
  reviews: state.data.reviews,
  isFavorite: state.data.allOffers.find((it) => {
    return it.id === ownProps.offer.id;
  }).isBookmarked,
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit: (id, review) => {
    dispatch(Operation.postReview(id, review));
  },
  onBookmarkClickHandler: (id, status) => dispatch(Operation.changeOfferStatus(id, status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);
