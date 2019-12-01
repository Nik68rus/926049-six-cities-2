import {ActionType} from '../../constants';
import {getCityOffers} from '../../util';
import Adapter from '../../adapter';

const ActionCreator = {
  loadOffers: (loadedOffers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: loadedOffers,
  }),

  loadReviews: (loadedReviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: loadedReviews,
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

  changeSorting: (order) => ({
    type: ActionType.CHANGE_SORTING,
    payload: order,
  }),

  setActivePin: (id) => ({
    type: ActionType.SET_ACTIVE_PIN,
    payload: id,
  }),

  updateOffers: (offers) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: offers,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
    .then((response) => {
      if (response.data.length > 0) {
        const adoptedData = Adapter.getOffers(response.data);
        dispatch(ActionCreator.loadOffers(adoptedData));
        dispatch(ActionCreator.initDataState());
        dispatch(ActionCreator.changeCity(adoptedData[0].city));
        dispatch(ActionCreator.getOffers(adoptedData, adoptedData[0].city));
        dispatch(ActionCreator.initUserState());
      }
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

  loadReviews: (id) => (dispatch, _, api) => {
    return api.get(`/comments/${id}`)
    .then((response) => {
      dispatch(ActionCreator.loadReviews(Adapter.getReviews(response.data)));
    });
  },

  postReview: (id, review) => (dispatch, _, api) => {
    return api.post(`/comments/${id}`, review)
    .then((response) => {
      dispatch(ActionCreator.loadReviews(Adapter.getReviews(response.data)));
    });
  },

  getFavoriteOffers: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
    .then((response) => {
      if (response.data.length > 0) {
        const adoptedData = Adapter.getOffers(response.data);
        dispatch(ActionCreator.updateOffers(adoptedData));
      }
    });
  },

  changeOfferStatus: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status}`)
    .then((response) => {
      dispatch(ActionCreator.updateOffers([Adapter.getOffer(response.data)]));
    });
  },
};

export {
  ActionCreator,
  Operation,
};
