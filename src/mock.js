export const offer = {
  id: 0,
  city: {
    name: `Amsterdam`,
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
  },
  picture: `img/1.png`,
  isPremium: false,
  isBookmarked: false,
  price: 120,
  title: `Beautiful & luxurious studio at great location`,
  type: `apartment`,
  rate: 4.8,
  photos: [`img/1.png`, `img/2.png`],
  coords: [52.35514938496378, 4.673877537499948],
  locationZoom: 8,
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  host: {
    id: 0,
    name: `Angelina`,
    isPro: false,
    avatar: `img/1.png`,
  },
  bedrooms: 3,
  goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
  maxAdults: 4,
};

export const city = {
  name: `Amsterdam`,
  location: {
    latitude: 52.370216,
    longitude: 4.895168,
    zoom: 10,
  },
};

export const user = {
  id: 1,
  email: `Oliver.conner@gmail.com`,
  name: `Oliver.conner`,
  avatar: `img/1.png`,
  isPro: false,
};

export const review = {
  id: 1,
  user,
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  date: `2019-05-08T14:13:56.569Z`,
};
