import MainScreen from '../main-screen/main-screen';
import OfferDetails from '../offer-details/offer-details';
import {connect} from 'react-redux';

const getPageScreen = (props) => {
  const {offers} = props;

  switch (location.pathname) {
    case `/`:
      return <MainScreen />;
    case location.pathname:
      return <OfferDetails offer={offers[location.pathname.split(`-`)[1]]} />;
  }
  return null;
};

const App = (props) => {
  return <>{getPageScreen(props)}</>;
};

getPageScreen.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.allOffers
});

export default connect(mapStateToProps)(App);
