import {EmptyPageCities} from '../constants';

const withActiveCity = (Component) => {
  class WithActiveCity extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCity: EmptyPageCities[0],
      };

      this._cityClickHandler = this._cityClickHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeCity={this.state.activeCity}
        cityClickHandler={this._cityClickHandler}
      />;
    }

    _cityClickHandler(city) {
      this.setState({
        activeCity: city,
      });
    }
  }

  return WithActiveCity;
};

export default withActiveCity;
