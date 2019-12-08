import {makeFirstCharCapital, getStatus} from '../../util';
import {CardClasses, OfferType, CardPicSize, CardType} from '../../constants';
import {Link} from 'react-router-dom';
import {ActionCreator, Operation} from '../../store/action/action-creator';
import {connect} from 'react-redux';

const Card = (props) => {
  const {offer, onCardMouseEnter, cardType, onOfferClick, onBookmarkClick, isFavorite} = props;
  const {title, picture, type, price, rate, isPremium} = offer;

  const bookmarkCard = (bookmark) => {
    return bookmark ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`;
  };

  const cardMark = (mark) => {
    return mark ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : ``;
  };

  const classes = CardClasses[cardType];

  const picSize = cardType === CardType.FAVORITES ? CardPicSize.FAVORITES : CardPicSize.OFFERS;

  return (
    <article className={`${classes.article} place-card`} onMouseEnter={() => onCardMouseEnter(offer.id)} onMouseLeave={() => onCardMouseEnter(-1)}>
      {cardMark(isPremium)}
      <div className={`${classes.div1}__image-wrapper place-card__image-wrapper`}>
        <Link
          to={`/offer/${offer.id}`}
          onClick={() => {
            onOfferClick(offer.id);
          }}
        >
          <img className="place-card__image" src={picture} width={picSize.width} height={picSize.height} alt="Place image"/>
        </Link>
      </div>
      <div className={`${classes.div2} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkCard(isFavorite)} type="button" onClick={() => onBookmarkClick(offer.id, getStatus(isFavorite))}>
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
            onOfferClick(offer.id);
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
  onCardMouseEnter: PropTypes.func,
  onOfferClick: PropTypes.func.isRequired,
  onBookmarkClick: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isFavorite: state.data.allOffers.find((it) => {
    return it.id === ownProps.offer.id;
  }).isBookmarked,
});

const mapDispatchToProps = (dispatch) => ({
  onOfferClick: (id) => {
    dispatch(Operation.loadReviews(id));
    dispatch(ActionCreator.setActivePin(id));
    window.scrollTo(0, 0);
  },
  onBookmarkClick: (id, status) => dispatch(Operation.changeOfferStatus(id, status)),
});

export {Card};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
