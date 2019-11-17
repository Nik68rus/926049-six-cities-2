import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const CityList = (props) => {
  const {currentCity, cities, changeCityClickHandler} = props;
  return <ul className="locations__list tabs__list">
    {cities.map((city) => (
      <li className="locations__item" key={`city-${city}`}>
        <a
          className={`locations__item-link tabs__item ${city === currentCity && `tabs__item--active`}`}
          href="#"
          onClick={() => changeCityClickHandler(city)}>
          <span>{city}</span>
        </a>
      </li>
    )
    )}
  </ul>;
};

CityList.propTypes = {
  currentCity: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  changeCityClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  currentCity: state.city,
  offers: state.offers,
  cities: state.cityNames,
});

const mapDispatchToProps = (dispatch) => ({
  changeCityClickHandler: (city) => {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }
});

export {CityList};

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
