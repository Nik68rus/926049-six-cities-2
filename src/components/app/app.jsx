import MainScreen from '../main-screen/main-screen';
import OfferDetails from '../offer-details/offer-details';
import React from 'react';

const getPageScreen = (props) => {
  const {offers} = props;
  const titleClickHandler = () => {};

  switch (location.pathname) {
    case `/`:
      return <MainScreen offers={offers} titleClickHandler={titleClickHandler} />;
    case location.pathname:
      return <OfferDetails offer={offers[location.pathname.split(`-`)[1]]} />;
  }
  return null;
};

const App = (props) => {
  return <React.Fragment>{getPageScreen(props)}</React.Fragment>;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

getPageScreen.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
