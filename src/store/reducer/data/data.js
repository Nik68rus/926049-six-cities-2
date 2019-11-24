import Adapter from '../../../adapter';
import {ActionType} from '../../../constants';
import {api} from '../../../index';

const initialState = {
  allOffers: [],
  isOffersLoaded: false,
};

const ActionCreator = {
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers,
  }),
};

const Operation = {
  loadOffers: () => (dispatch) => {
    return api.get(`/hotels`)
        .then((response) => {
          dispatch(ActionCreator.loadOffers(response.data));
        });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return Object.assign({}, state, {
        allOffers: Adapter.getOffers(action.payload),
      });
  }

  return state;
};

export {
  reducer,
  ActionCreator,
  Operation,
};
