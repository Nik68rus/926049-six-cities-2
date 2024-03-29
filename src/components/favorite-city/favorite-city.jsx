import {Link} from 'react-router-dom';
import Card from '../card/card';
import {CardType} from '../../constants';
import {ActionCreator} from '../../store/action/action-creator';
import {connect} from 'react-redux';

const FavoriteCity = (props) => {
  const {city, offers, allOffers, onCityClick} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to="/" className="locations__item-link" onClick={() => onCityClick(allOffers, city)}>
            <span>{city.name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <Card key={offer.id} offer={offer} cardType={CardType.FAVORITES} onCardMouseEnter={() => {}}/>)}
      </div>
    </li>
  );
};

FavoriteCity.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  offers: PropTypes.array.isRequired,
  allOffers: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  allOffers: state.data.allOffers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (allOffers, city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(allOffers, city));
  }
});

export {FavoriteCity};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCity);

