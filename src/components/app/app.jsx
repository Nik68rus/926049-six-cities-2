import MainScreen from '../main-screen/main-screen';
import {connect} from 'react-redux';
import {Operation} from '../../store/action/action-creator';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';
import withUserData from '../../hocs/with-user-data/with-user-data';
import OfferDetails from '../offer-details/offer-details';
import Favorites from '../favorites/favorites';

export const App = (props) => {
  const {onUserSet, onAuthCheck, isAuthorizationRequired, offers, onFavoriteOffersRequest} = props;

  const getOfferIndex = (id) => offers.map((offer) => offer.id).indexOf(+id);

  const SignInWrapped = withUserData(SignIn);

  if (isAuthorizationRequired) {
    onAuthCheck();
  }

  return <>
    <Switch>
      <Route path="/" exact render={(compProps) => <MainScreen {...compProps} onFavoriteClickHandler={onFavoriteOffersRequest} />} />
      <Route
        path="/login" exact
        render={
          (compProps) => isAuthorizationRequired ?
            <SignInWrapped {...compProps} onSubmit={onUserSet} /> :
            <Redirect to="/" />}
      />
      <Route
        path="/offer/:id" exact
        render={
          (compProps) => <OfferDetails {...compProps} offer={offers[getOfferIndex(compProps.match.params.id)]} onFavoriteClickHandler={onFavoriteOffersRequest} />}
      />
      <Route path="/favorites" exact component={Favorites} />

    </Switch>
  </>;
};

App.propTypes = {
  onAuthCheck: PropTypes.func.isRequired,
  onUserSet: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
  onFavoriteOffersRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.data.allOffers,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
});

const mapDispatchToProps = (dispatch) => ({
  onAuthCheck: () => dispatch(Operation.checkAuth()),
  onUserSet: (data) => dispatch(Operation.loginUser(data)),
  onFavoriteOffersRequest: () => dispatch(Operation.getFavoriteOffers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
