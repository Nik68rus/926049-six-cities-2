import {EMPTY_PAGE_CITIES} from '../../constants';

const withActiveCity = (Component) => {
  class WithActiveCity extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCity: EMPTY_PAGE_CITIES[0],
      };

      this._handleCityClick = this._handleCityClick.bind(this);
    }

    _handleCityClick(city) {
      this.setState({
        activeCity: city,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeCity={this.state.activeCity}
        onCityClick={this._handleCityClick}
      />;
    }
  }

  return WithActiveCity;
};

export default withActiveCity;
