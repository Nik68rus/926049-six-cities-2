import Card from '../card/card';
import {CardType} from '../../constants';

const OffersList = (props) => {
  const {offers, mouseEnterHandler, mouseLeaveHandler, cardType} = props;
  return <div className={cardType === CardType.CITIES ? `cities__places-list places__list tabs__content` : `near-places__list places__list`}>
    {
      offers.map((offer, i) => <Card key={offer.id} cardType={CardType.CITIES} offer={offer} id={i} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}/>)
    }
  </div>;
};

OffersList.propTypes = {
  cardType: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
};

export default OffersList;

