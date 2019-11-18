import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const CityList = (props) => {
  const {currentCity, cities, changeCityClickHandler} = props;
  return <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li className="locations__item" key={`city-${city.name}`}>
        <a
          className={`locations__item-link tabs__item ${city.name === currentCity.name && `tabs__item--active`}`}
          href="#"
          onClick={() => changeCityClickHandler(city)}>
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
      longtitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  cities: PropTypes.array.isRequired,
  changeCityClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.city,
  offers: state.cityOffers,
  cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export {CityList};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);