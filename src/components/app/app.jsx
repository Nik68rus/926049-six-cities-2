import MainScreen from '../main-screen/main-screen';
import {connect} from 'react-redux';
import {Operation} from '../../store/action/action-creator';
import {Switch, Route, Redirect} from 'react-router-dom';
import SignIn from '../sign-in/sign-in';

const App = (props) => {
  const {setUserData, checkAuth, isAuthorizationRequired} = props;
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
    </Switch>
  </>;
};

App.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  setUserData: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.data.allOffers,
  isAuthorizationRequired: state.user.isAuthorizationRequired,
});

const mapDispatchToProps = {
  checkAuth: Operation.checkAuth,
  setUserData: (data) => Operation.loginUser(data)

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
