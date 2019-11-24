import {api} from './index';
import Adapter from './adapter';

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
};

export const getCityOffers = (allOffers, city) => {
  return allOffers.filter((offer) => offer.city.name === city.name);
};

const getCityLocation = (offers, cityName) => {
  return offers.find((offer) => offer.city.name === cityName).city.location;
};

export const getCities = (allOffers) => {
  const cityNames = [...new Set(allOffers.map((offer) => offer.city.name))];
  return cityNames.map((cityName) => {
    return {
      name: cityName,
      location: getCityLocation(allOffers, cityName),
    };
  });
};

const initialState = {
  city: null,
  cityOffers: [],
  allOffers: [],
  cities: [],
  isOffersLoaded: false,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffers: (allOffers, city) => ({
    type: ActionType.GET_OFFERS,
    payload: getCityOffers(allOffers, city),
  }),

  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers,
  }),
};
export const Operation = {
  loadOffers: () => (dispatch) => {
    return api.get(`/hotels`)
        .then((response) => {
          dispatch(ActionCreator.loadOffers(response.data));
        });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {city: action.payload});
    case `GET_OFFERS`:
      return Object.assign({}, state, {cityOffers: action.payload});
    case `LOAD_OFFERS`:
      const adoptedPayload = Adapter.getOffers(action.payload);
      return Object.assign({}, state, {
        allOffers: adoptedPayload,
        city: adoptedPayload[0].city,
        cityOffers: getCityOffers(adoptedPayload, adoptedPayload[0].city),
        cities: getCities(adoptedPayload),
        isOffersLoaded: true,
      });
  }

  return state;
};
