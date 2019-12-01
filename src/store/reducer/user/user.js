import {ActionType, SortType} from '../../../constants';
import {updateOffers} from '../../../util';

const initialState = {
  city: null,
  cityOffers: [],
  sortOrder: SortType.POPULAR,
  activePinID: -1,
  isUserStateDefined: false,
  isAuthorizationRequired: true,
  user: {
    id: 0,
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
    case ActionType.CHANGE_SORTING:
      return Object.assign({}, state, {sortOrder: action.payload});
    case ActionType.SET_ACTIVE_PIN:
      return Object.assign({}, state, {activePinID: action.payload});
    case ActionType.UPDATE_OFFERS:
      return Object.assign({}, state, {
        allOffers: updateOffers(state.cityOffers, action.payload),
      });
  }

  return state;
};

export {
  reducer,
};
