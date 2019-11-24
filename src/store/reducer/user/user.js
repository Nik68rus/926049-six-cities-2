import {ActionType} from '../../../constants';
import {getCityOffers} from '../../../util';

const initialState = {
  city: null,
  cityOffers: [],
  cities: [],
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffers: (allOffers, city) => ({
    type: ActionType.GET_OFFERS,
    payload: getCityOffers(allOffers, city),
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {cityOffers: action.payload});
  }

  return state;
};

export {
  reducer,
  ActionCreator,
};
