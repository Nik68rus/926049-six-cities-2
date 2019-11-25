import {ActionType} from '../../../constants';

const initialState = {
  city: null,
  cityOffers: [],
  isUserStateDefined: false,
  isAuthorizationRequired: false,
  user: {
    id: ``,
    email: ``,
    name: ``,
    avatar: ``,
    isPro: false,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {city: action.payload});
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {cityOffers: action.payload});
    case ActionType.INIT_USER_STATE:
      return Object.assign({}, state, {isUserStateDefined: action.payload});
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {isAuthorizationRequired: action.payload});
    case ActionType.SIGN_IN:
      return Object.assign({}, state, {user: action.payload});
  }

  return state;
};

export {
  reducer,
};
