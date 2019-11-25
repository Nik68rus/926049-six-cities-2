import {ActionType} from '../../constants';
import {getCityOffers} from '../../util';
import Adapter from '../../adapter';

const ActionCreator = {
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers,
  }),

  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),

  getOffers: (allOffers, city) => ({
    type: ActionType.GET_OFFERS,
    payload: getCityOffers(allOffers, city),
  }),

  initDataState: () => ({
    type: ActionType.INIT_DATA_STATE,
    payload: true,
  }),

  initUserState: () => ({
    type: ActionType.INIT_USER_STATE,
    payload: true,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),

  signIn: (user) => ({
    type: ActionType.SIGN_IN,
    payload: user,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
        .then((response) => {
          const adoptedData = Adapter.getOffers(response.data);
          dispatch(ActionCreator.loadOffers(adoptedData));
          dispatch(ActionCreator.initDataState());
          dispatch(ActionCreator.changeCity(adoptedData[0].city));
          dispatch(ActionCreator.getOffers(adoptedData, adoptedData[0].city));
          dispatch(ActionCreator.initUserState());
        });
  },

  checkAuth: () => (dispatch, _, api) => {
    return api.get(`/login`)
    .then((response) => {
      if (response.status === 200) {
        dispatch(ActionCreator.requireAuthorization(false));
        dispatch(ActionCreator.signIn(Adapter.getUser(response.data)));
      }
    });
  },

  loginUser: (user) => (dispatch, _, api) => {
    return api.post(`/login`, user)
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(false));
      dispatch(ActionCreator.signIn(Adapter.getUser(response.data)));
    });
  },
};

export {
  ActionCreator,
  Operation,
};
