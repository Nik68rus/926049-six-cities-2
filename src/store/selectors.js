import {createSelector} from 'reselect';

const getAllOffers = (state) => {
  return state.data.allOffers;
};

const getCity = (state) => {
  return state.user.city;
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
