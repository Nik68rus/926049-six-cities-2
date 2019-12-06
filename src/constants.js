export const Level = {
  PREMIUM: `premium`,
};

export const OfferType = {
  APARTMENT: `apartment`,
  ROOM: `private room`,
  HOUSE: `house`,
  HOTEL: `hotel`,
};

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  INIT_USER_STATE: `INIT_USER_STATE`,
  INIT_DATA_STATE: `INIT_DATA_STATE`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  SIGN_IN: `SIGN_IN`,
  CHANGE_SORTING: `CHANGE_SORTING`,
  SET_ACTIVE_PIN: `SET_ACTIVE_PIN`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
};

export const CardType = {
  NEAR: `NEAR`,
  CITIES: `CITIES`,
  FAVORITES: `FAVORITES`,
};

export const CardClasses = {
  CITIES: {
    article: `cities__place-card`,
    div1: `cities`,
    div2: ``,
  },
  NEAR: {
    article: `near-places__card`,
    div1: `near-places`,
    div2: ``,
  },
  FAVORITES: {
    article: `favorites__card`,
    div1: `favorites`,
    div2: `favorites__card-info`,
  },
};

export const SortType = {
  POPULAR: `Popular`,
  PRICE_UP: `Price: low to high`,
  PRICE_DOWN: `Price: high to low`,
  RATE_DOWN: `Top rated first`,
};

export const CardPicSize = {
  FAVORITES: {
    width: 150,
    height: 110,
  },
  OFFERS: {
    width: 260,
    height: 200,
  },
};

