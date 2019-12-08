import {ActionCreator} from '../../action/action-creator';
import {reducer} from './user';
import {ActionType, SortType} from '../../../constants';
import {offer} from '../../../mock';
import {getCityOffers} from '../../../util';

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

describe(`Action creator works correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for getting city offers returns correct action`, () => {
    expect(ActionCreator.getOffers([offer, offer], offer.city)).toEqual({
      type: ActionType.GET_OFFERS,
      payload: getCityOffers([offer, offer], offer.city),
    });
  });

  it(`Action creator for initializing state of user reducer returns correct action`, () => {
    expect(ActionCreator.initUserState()).toEqual({
      type: ActionType.INIT_USER_STATE,
      payload: true,
    });
  });

  it(`Action creator for requiring authorization returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(true)).toEqual({
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true,
    });
  });

  it(`Action creator for signing user in returns correct action`, () => {
    expect(ActionCreator.signIn(`Test user`)).toEqual({
      type: ActionType.SIGN_IN,
      payload: `Test user`,
    });
  });

  it(`Action creator for changing sorting order returns correct action`, () => {
    expect(ActionCreator.changeSorting(`New order`)).toEqual({
      type: ActionType.CHANGE_SORTING,
      payload: `New order`,
    });
  });

  it(`Action creator for setting active pin returns correct action`, () => {
    expect(ActionCreator.setActivePin(1)).toEqual({
      type: ActionType.SET_ACTIVE_PIN,
      payload: 1,
    });
  });

  it(`Action creator for updating offers returns correct action`, () => {
    expect(ActionCreator.updateOffers([offer])).toEqual({
      type: ActionType.UPDATE_OFFERS,
      payload: [offer],
    });
  });
});

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should correctly change city`, () => {
    expect(reducer(initialState, {
      type: ActionType.CHANGE_CITY,
      payload: `Test city`,
    })).toEqual(Object.assign({}, initialState, {city: `Test city`}));
  });

  it(`Reducer should correctly change city offers`, () => {
    expect(reducer(initialState, {
      type: ActionType.GET_OFFERS,
      payload: [offer],
    })).toEqual(Object.assign({}, initialState, {cityOffers: [offer]}));
  });

  it(`Reducer should correctly change state status`, () => {
    expect(reducer(initialState, {
      type: ActionType.INIT_USER_STATE,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {isUserStateDefined: true}));
  });

  it(`Reducer should correctly change authorization status`, () => {
    expect(reducer(initialState, {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {isAuthorizationRequired: true}));
  });

  it(`Reducer should correctly change user data`, () => {
    expect(reducer(initialState, {
      type: ActionType.SIGN_IN,
      payload: {
        id: 1,
        email: `test@mail.ru`,
        name: `test`,
        avatar: `test.png`,
        isPro: true,
      },
    })).toEqual(Object.assign({}, initialState, {user: {
      id: 1,
      email: `test@mail.ru`,
      name: `test`,
      avatar: `test.png`,
      isPro: true,
    }}));
  });

  it(`Reducer should correctly change sorting order`, () => {
    expect(reducer(initialState, {
      type: ActionType.CHANGE_SORTING,
      payload: `Price`,
    })).toEqual(Object.assign({}, initialState, {sortOrder: `Price`}));
  });

  it(`Reducer should correctly set active pin ID`, () => {
    expect(reducer(initialState, {
      type: ActionType.SET_ACTIVE_PIN,
      payload: 1,
    })).toEqual(Object.assign({}, initialState, {activePinID: 1}));
  });
});
