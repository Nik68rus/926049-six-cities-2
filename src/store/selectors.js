import {createSelector} from 'reselect';
import {SortType} from '../constants';

const getAllOffers = (state) => {
  return state.data.allOffers;
};

const getCity = (state) => {
  return state.user.city;
};

const getCityOffers = (state) => {
  return state.user.cityOffers;
};

const getSortingOrder = (state) => {
  return state.user.sortOrder;
};

export const getAllFavoriteOffers = (state) => {
  return state.data.allOffers.filter((offer) => offer.isBookmarked === true);
};

export const selectCityOffers = createSelector(
    [getAllOffers, getCity],
    (offers, city) => offers.filter((offer) => offer.city === city)
);

export const selectCities = createSelector(
    getAllOffers,
    (offers) => [...new Set(offers.map((offer) => offer.city.name))]
      .map((cityName) => {
        return {
          name: cityName,
          location: offers.find((offer) => offer.city.name === cityName).city.location,
        };
      })
);

export const selectSortedOffers = createSelector(
    [getCityOffers, getSortingOrder],
    (offers, order) => {
      switch (order) {
        case SortType.PRICE_UP:
          return offers.slice().sort((a, b) => a.price - b.price);
        case SortType.PRICE_DOWN:
          return offers.slice().sort((a, b) => b.price - a.price);
        case SortType.RATE_DOWN:
          return offers.slice().sort((a, b) => b.rate - a.rate);
      }
      return offers;
    }
);
