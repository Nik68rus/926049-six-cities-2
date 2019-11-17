import {offers} from './mock/offers';
import {CITIES} from './constants';

const DEFAULT_CITY = `Amsterdam`;

const getCityLocation = (city) => {
  const currentCity = CITIES.find((it) => it.name === city);
  console.log(currentCity);
  return {
    latLng: [parseFloat(currentCity.location.latitude), parseFloat(currentCity.location.longtitude)],
    zoom: currentCity.location.zoom,
  };
};

const getCityOffers = (allOffers, city) => {
  console.log(getCityLocation(DEFAULT_CITY));
  return allOffers.filter((offer) => offer.city.name === city);
};

const initialState = {
  city: DEFAULT_CITY,
  location: getCityLocation(DEFAULT_CITY),
  offers: getCityOffers(offers, DEFAULT_CITY),
  allOffers: offers,
  cityNames: [...new Set(offers.map((offer) => offer.city.name))],
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city,
  }),
  getOffers: (city) => ({
    type: `GET_OFFERS`,
    payload: getCityOffers(offers, city),
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {city: action.payload});
    case `GET_OFFERS`:
      return Object.assign({}, state, {offers: action.payload});
  }

  return state;
};
