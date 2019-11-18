import {offers} from './mock/offers';
import {CITIES} from './mock/cities';
import {getAverage} from './util';

export const DEFAULT_CITY = CITIES[0];
const DEFAULT_ZOOM = 12;
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const getCityOffers = (allOffers, city) => {
  return allOffers.filter((offer) => offer.city.name === city);
};

const getCityLocation = (name, allOffers) => {
  const cityOffers = getCityOffers(allOffers, name);
  return {
    latitude: getAverage(cityOffers.map((offer) => offer.coords[0])),
    longtitude: getAverage(cityOffers.map((offer) => offer.coords[1])),
    zoom: DEFAULT_ZOOM,
  };
};

export const getCities = (allOffers) => {
  const cityNames = [...new Set(allOffers.map((offer) => offer.city.name))];
  const cities = cityNames.map((city) => {
    return {
      name: city,
      location: getCityLocation(city, allOffers),
    };
  });
  return cities;
};

const initialState = {
  city: DEFAULT_CITY,
  cityOffers: getCityOffers(offers, DEFAULT_CITY.name),
  allOffers: offers,
  cities: getCities(offers),
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: getCityOffers(offers, city.name),
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY`:
      return Object.assign({}, state, {city: action.payload});
    case `GET_OFFERS`:
      return Object.assign({}, state, {cityOffers: action.payload});
  }

  return state;
};
