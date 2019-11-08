import MainScreen from '../main-screen/main-screen';
import OfferDetails from '../offer-details/offer-details';

const getPageScreen = (props) => {
  const {offers} = props;

  switch (location.pathname) {
    case `/`:
      return <MainScreen offers={offers}/>;
    case location.pathname:
      return <OfferDetails offer={offers[location.pathname.split(`-`)[1]]} />;
  }
  return null;
};

const App = (props) => {
  return <>{getPageScreen(props)}</>;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

getPageScreen.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
