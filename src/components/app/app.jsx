import MainScreen from '../main-screen/main-screen';
import {connect} from 'react-redux';
import {Operation} from '../../store/action/action-creator';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import withUserData from '../../hocs/with-user-data';
import OfferDetails from '../offer-details/offer-details';
import Favorites from '../favorites/favorites';

const App = (props) => {
  const {setUserData, checkAuth, isAuthorizationRequired, offers, getFavoriteOffers} = props;

  const getOfferIndex = (id) => offers.map((offer) => offer.id).indexOf(+id);

  const SignInWrapped = withUserData(SignIn);

  if (isAuthorizationRequired) {
    checkAuth();
  }
  return <>
    <Switch>
      <Route path="/" exact render={(compProps) => <MainScreen {...compProps} onFavoriteClickHandler={getFavoriteOffers} />} />
      <Route
        path="/login" exact
        render={
          (compProps) => isAuthorizationRequired ?
            <SignInWrapped {...compProps} onSubmit={setUserData} /> :
            <Redirect to="/" />}
      />
      <Route
        path="/offer/:id" exact
        render={
          (compProps) => <OfferDetails {...compProps} offer={offers[getOfferIndex(compProps.match.params.id)]} onFavoriteClickHandler={getFavoriteOffers} />}
      />
      <Route path="/favorites" exact component={Favorites} />

    </Switch>
  </>;
};

App.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
  getFavoriteOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.data.allOffers,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => dispatch(Operation.checkAuth()),
  setUserData: (data) => dispatch(Operation.loginUser(data)),
  getFavoriteOffers: () => dispatch(Operation.getFavoriteOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
