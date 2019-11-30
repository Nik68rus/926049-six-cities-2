import {makeFirstCharCapital} from '../../util';
import {CardType, OfferType} from '../../constants';
import {Link} from 'react-router-dom';
import {ActionCreator, Operation} from '../../store/action/action-creator';
import {connect} from 'react-redux';

export const Card = (props) => {
  const {offer, id, mouseEnterHandler, cardType, offerClickHandler} = props;
  const {title, picture, type, price, rate, isBookmarked, isPremium} = offer;

  const bookmarkCard = (bookmark) => {
    return bookmark ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  };

  const cardMark = (mark) => {
    return mark ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : ``;
  };

  return (
    <article className={cardType === CardType.CITIES ? `cities__place-card place-card` : `near-places__card place-card`} id={id} onMouseEnter={() => mouseEnterHandler(offer.id)} onMouseLeave={() => mouseEnterHandler(-1)}>
      {cardMark(isPremium)}
      <div className={cardType === CardType.CITIES ? `cities__image-wrapper place-card__image-wrapper` : `near-places__image-wrapper place-card__image-wrapper`}>
        <Link
          to={`/offer/${offer.id}`}
          onClick={() => {
            offerClickHandler(offer.id);
          }}
        >
          <img className="place-card__image" src={picture} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkCard(isBookmarked)} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rate * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`} onClick={() => {
            offerClickHandler(offer.id);
          }}>{title}</Link>
        </h2>
        <p className="place-card__type">{makeFirstCharCapital(OfferType[type.toUpperCase()])}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    isBookmarked: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  offerClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
});

const mapDispatchToProps = (dispatch) => ({
  offerClickHandler: (id) => {
    dispatch(Operation.loadReviews(id));
    dispatch(ActionCreator.setActivePin(id));
    window.scrollTo(0, 0);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
