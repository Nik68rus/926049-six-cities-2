import {Link} from 'react-router-dom';
import Card from '../card/card';
import {CardType} from '../../constants';
import {ActionCreator} from '../../store/action/action-creator';
import {connect} from 'react-redux';

const FavoriteCity = (props) => {
  const {city, offers, allOffers, cityClickHandler} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to="/" className="locations__item-link" onClick={() => cityClickHandler(allOffers, city)}>
            <span>{city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <Card key={offer.id} offer={offer} cardType={CardType.FAVORITES} mouseEnterHandler={() => {}}/>)}
      </div>
    </li>
  );
};

FavoriteCity.propTypes = {
  city: PropTypes.shape({}).isRequired,
  offers: PropTypes.array.isRequired,
  allOffers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allOffers: state.data.allOffers,
});

const mapDispatchToProps = (dispatch) => ({
  cityClickHandler: (allOffers, city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(allOffers, city));
  }
});

export {FavoriteCity};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCity);

