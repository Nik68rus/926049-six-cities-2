import {ActionType} from '../../../constants';
import {updateOffers} from '../../../util';

const initialState = {
  allOffers: [],
  isOffersLoaded: false,
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        allOffers: action.payload,
      });
    case ActionType.INIT_DATA_STATE:
      return Object.assign({}, state, {
        isOffersLoaded: action.payload,
      });
    case ActionType.LOAD_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case ActionType.UPDATE_OFFERS:
      return Object.assign({}, state, {
        allOffers: updateOffers(state.allOffers, action.payload),
      });
  }

  return state;
};

export {
  reducer,
};
