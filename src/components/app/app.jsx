import MainScreen from '../main-screen/main-screen';
import {connect} from 'react-redux';
import {Operation} from '../../store/action/action-creator';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import OfferDetails from '../offer-details/offer-details';

const App = (props) => {
  const {setUserData, checkAuth, isAuthorizationRequired, offers} = props;

  const getOfferIndex = (id) => offers.map((offer) => offer.id).indexOf(+id);

  if (isAuthorizationRequired) {
    checkAuth();
  }
  return <>
    <Switch>
      <Route path="/" exact component={MainScreen} />
      <Route
        path="/login" exact
        render={
          (compProps) => isAuthorizationRequired ?
            <SignIn {...compProps} onSubmit={setUserData} /> :
            <Redirect to="/" />}
      />
      <Route
        path="/offer/:id" exact
        render={
          (compProps) => isAuthorizationRequired ?
            <SignIn {...compProps} onSubmit={setUserData} /> :
            <OfferDetails {...compProps} offer={offers[getOfferIndex(compProps.match.params.id)]} />}
      />
    </Switch>
  </>;
};

App.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.data.allOffers,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(Operation.checkAuth()),
  setUserData: (data) => dispatch(Operation.loginUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
