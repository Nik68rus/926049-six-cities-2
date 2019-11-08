import {makeFirstCharCapital} from '../../util';

const Card = (props) => {
  const {offer, id, mouseEnterHandler, mouseLeaveHandler} = props;
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
    <article className="cities__place-card place-card" id={id} onMouseEnter={() => mouseEnterHandler(id)} onMouseLeave={() => mouseLeaveHandler()}>
      {cardMark(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={picture} width="260" height="200" alt="Place image"/>
        </a>
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
            <span style={{width: `${rate}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/details-${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{makeFirstCharCapital(type)}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  offer: PropTypes.shape({
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
  mouseLeaveHandler: PropTypes.func.isRequired,
};

export default Card;
