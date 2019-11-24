import MainScreen from '../main-screen/main-screen';
import OfferDetails from '../offer-details/offer-details';
import {connect} from 'react-redux';
import {Operation} from '../../store/action/action-creator';

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
  props.checkAuth();
  return <>{getPageScreen(props)}</>;
};

getPageScreen.propTypes = {
  offers: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  checkAuth: PropTypes.func.isRequired,
};

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
  checkAuth: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.data.allOffers,
  user: state.user.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth() {
      dispatch(Operation.checkAuth());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
