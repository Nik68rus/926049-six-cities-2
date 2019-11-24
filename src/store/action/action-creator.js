import {ActionType} from '../../constants';
import {getCityOffers} from '../../util';
import {api} from '../../index';
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
  })
};

const Operation = {
  loadOffers: () => (dispatch) => {
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
};

export {
  ActionCreator,
  Operation,
};
