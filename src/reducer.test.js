import {
  getCityOffers,
  getCities,
  DEFAULT_CITY,
  ActionCreator,
  reducer,
  ActionType,
} from './reducer';
import {CITIES} from './mock/cities';
import {offers} from './mock/offers';
import {Type} from './constants';

describe(`Business logic is correct`, () => {
  it(`Choosen offers are correct`, () => {
    expect(getCityOffers([
      {
        id: 0,
        city: CITIES[0],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 1,
        city: CITIES[1],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 2,
        city: CITIES[1],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 3,
        city: CITIES[2],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      }
    ], CITIES[1].name)).toEqual([
      {
        id: 1,
        city: CITIES[1],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 2,
        city: CITIES[1],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      }
    ]);

    expect(getCityOffers([
      {
        id: 0,
        city: CITIES[0],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 1,
        city: CITIES[1],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 2,
        city: CITIES[1],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 3,
        city: CITIES[2],
        title: `Mock-title`,
        coords: [0, 0],
        picture: `picture`,
        type: Type.APARTMENT,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      }
    ], `Moscow`)).toEqual([]);

  });
});

describe(`Action creators works correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`TestCity`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `TestCity`,
    });
  });

  it(`Action creator for getting offers returns correct action`, () => {
    expect(ActionCreator.getOffers({name: `Amsterdam`})).toEqual({
      type: ActionType.GET_OFFERS,
      payload: getCityOffers(offers, `Amsterdam`),
    });
  });

});

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      city: DEFAULT_CITY,
      cityOffers: getCityOffers(offers, DEFAULT_CITY.name),
      allOffers: offers,
      cities: getCities(offers),
    });
  });


  it(`Reducer should correctly change state`, () => {
    expect(reducer({
      city: DEFAULT_CITY,
      cityOffers: getCityOffers(offers, CITIES[1].name),
      allOffers: offers,
      cities: getCities(offers),
    }, {
      type: ActionType.CHANGE_CITY,
      payload: CITIES[1],
    })).toEqual({
      city: CITIES[1],
      cityOffers: getCityOffers(offers, CITIES[1].name),
      allOffers: offers,
      cities: getCities(offers),
    });
  });
});
