import Card from '../card/card';

const OffersList = (props) => {
  const {offers, mouseEnterHandler, mouseLeaveHandler} = props;
  return <div className="cities__places-list places__list tabs__content">
    {
      offers.map((offer, i) => <Card key={offer.id} offer={offer} id={i} mouseEnterHandler={mouseEnterHandler} mouseLeaveHandler={mouseLeaveHandler}/>)
    }
  </div>;
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  mouseLeaveHandler: PropTypes.func.isRequired,
};

export default OffersList;

