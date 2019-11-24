import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action/action-creator';
import {selectCities, selectCityOffers} from '../../store/selectors';

const CityList = (props) => {
  const {currentCity, cities, allOffers, changeCityClickHandler} = props;
  return <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li className="locations__item" key={`city-${city.name}`}>
        <a
          className={`locations__item-link tabs__item ${city.name === currentCity.name && `tabs__item--active`}`}
          href="#"
          onClick={() => changeCityClickHandler(allOffers, city)}>
          <span>{city.name}</span>
        </a>
      </li>
    )
    )}
  </ul>;
};

CityList.propTypes = {
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  cities: PropTypes.array.isRequired,
  allOffers: PropTypes.array.isRequired,
  changeCityClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.user.city,
  offers: selectCityOffers(state),
  cities: selectCities(state),
  allOffers: state.data.allOffers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (allOffers, city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(allOffers, city));
  }
});

export {CityList};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
