import {ActionCreator, Operation} from '../../action/action-creator';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import {reducer} from './data';
import {ActionType} from '../../../constants';
import {offer, review, offerFromServer, user, userFromServer, reviewFromServer} from '../../../mock';

const initialState = {
  allOffers: [],
  isOffersLoaded: false,
  reviews: [],
};

describe(`Action creator works correctly`, () => {
  it(`Action creator for loading offers returns correct action`, () => {
    expect(ActionCreator.loadOffers([offer, offer])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [offer, offer],
    });
  });

  it(`Action creator for loading reviews returns correct action`, () => {
    expect(ActionCreator.loadReviews([review, review])).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: [review, review],
    });
  });

  it(`Action creator for initializing state of data reducer returns correct action`, () => {
    expect(ActionCreator.initDataState()).toEqual({
      type: ActionType.INIT_DATA_STATE,
      payload: true,
    });
  });
});

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should correctly set offers`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_OFFERS,
      payload: [offer, offer],
    })).toEqual(Object.assign({}, initialState, {allOffers: [offer, offer]}));
  });

  it(`Reducer should correctly set reviews`, () => {
    expect(reducer(initialState, {
      type: ActionType.LOAD_REVIEWS,
      payload: [review, review],
    })).toEqual(Object.assign({}, initialState, {reviews: [review, review]}));
  });

  it(`Reducer should correctly change state status`, () => {
    expect(reducer(initialState, {
      type: ActionType.INIT_DATA_STATE,
      payload: true,
    })).toEqual(Object.assign({}, initialState, {isOffersLoaded: true}));
  });
});

describe(`Data loading interface works correctly`, () => {
  const login = jest.fn();
  const api = createAPI(jest.fn(), login);
  const apiMock = new MockAdapter(api);

  it(`Should make a correct API call to /hotels`, () => {
    const offerLoader = Operation.loadOffers();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [offerFromServer]);
    return offerLoader(dispatch, null, api)
      .then(() =>{
        expect(dispatch).toHaveBeenCalledTimes(5);
      });
  });

  it(`Should make a correct GET request to /login`, () => {
    const authStatusLoader = Operation.checkAuth();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/login`)
      .reply(200, userFromServer);
    return authStatusLoader(dispatch, null, api)
      .then(() =>{
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls).toEqual([
          [{type: ActionType.REQUIRE_AUTHORIZATION, payload: false}],
          [{type: ActionType.SIGN_IN, payload: user}],
        ]);
      });
  });

  it(`Should make a correct POST request to /login`, () => {
    const userSignIn = Operation.loginUser({
      email: `Oliver.conner@gmail.com`,
      password: `12345678`
    });

    const dispatch = jest.fn();

    apiMock
      .onPost(`/login`)
      .reply(200, userFromServer);
    return userSignIn(dispatch, null, api)
      .then(() =>{
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch.mock.calls).toEqual([
          [{type: ActionType.REQUIRE_AUTHORIZATION, payload: false}],
          [{type: ActionType.SIGN_IN, payload: user}],
        ]);
      });
  });


  it(`Should make a correct GET request to /comments`, () => {
    const reviewLoader = Operation.loadReviews(1);
    const dispatch = jest.fn();

    apiMock
      .onGet(`/comments/1`)
      .reply(200, [reviewFromServer]);
    return reviewLoader(dispatch, null, api)
      .then(() =>{
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_REVIEWS,
          payload: [review],
        });
      });
  });

  it(`Should make a correct POST request to /comments`, () => {
    const reviewSender = Operation.postReview(1, review);
    const dispatch = jest.fn();

    apiMock
      .onPost(`/comments/1`)
      .reply(200, [reviewFromServer]);
    return reviewSender(dispatch, null, api)
      .then(() =>{
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_REVIEWS,
          payload: [review],
        });
      });
  });

  it(`Should make a correct GET request to /favorite`, () => {
    const favoritesLoader = Operation.getFavoriteOffers();
    const dispatch = jest.fn();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [offerFromServer]);
    return favoritesLoader(dispatch, null, api)
      .then(() =>{
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.UPDATE_OFFERS,
          payload: [offer],
        });
      });
  });

  it(`Should make a correct POST request to /favorite`, () => {
    const favoritePoster = Operation.getFavoriteOffers();
    const dispatch = jest.fn();

    apiMock
      .onPost(`/favorite`)
      .reply(200, [offerFromServer]);
    return favoritePoster(dispatch, null, api)
      .then(() =>{
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.UPDATE_OFFERS,
          payload: [offer],
        });
      });
  });
});
