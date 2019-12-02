import Card from '../card/card';
import {CardType} from '../../constants';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action/action-creator';

export const OffersList = (props) => {
  const {offers, mouseEnterHandler, cardType} = props;
  return <div className={cardType === CardType.CITIES ? `cities__places-list places__list tabs__content` : `near-places__list places__list`}>
    {
      offers.map((offer) => <Card key={offer.id} cardType={CardType.CITIES} offer={offer} mouseEnterHandler={mouseEnterHandler} />)
    }
  </div>;
};

OffersList.propTypes = {
  cardType: PropTypes.string.isRequired,
  activeCard: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  mouseEnterHandler: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeOfferCard: state.activeOfferCard,
  sortOrder: state.user.sortOrder,
});

const mapDispatchToProps = (dispatch) => ({
  mouseEnterHandler: (id) => dispatch(ActionCreator.setActivePin(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
