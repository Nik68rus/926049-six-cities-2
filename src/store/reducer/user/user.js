import {ActionType} from '../../../constants';

const initialState = {
  city: null,
  cityOffers: [],
  isUserStateDefined: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {cityOffers: action.payload});
    case ActionType.INIT_USER_STATE:
      return Object.assign({}, state, {isUserStateDefined: action.payload});
  }

  return state;
};

export {
  reducer,
};
