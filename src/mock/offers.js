import {Type} from '../constants';

export const offers = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    picture: `img/apartment-01.jpg`,
    type: Type.APARTMENT,
    price: 150,
    rate: 50,
    isBookmarked: true,
    isPremium: false,
  },
  {
    title: `Wood and stone place`,
    picture: `img/room.jpg`,
    type: Type.ROOM,
    price: 80,
    rate: 80,
    isBookmarked: false,
    isPremium: false,
  },
  {
    title: `Canal View Prinsengracht`,
    picture: `img/apartment-03.jpg`,
    type: Type.APARTMENT,
    price: 120,
    rate: 90,
    isBookmarked: false,
    isPremium: false,
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    picture: `img/apartment-02.jpg`,
    type: Type.APARTMENT,
    price: 200,
    rate: 100,
    isBookmarked: true,
    isPremium: true,
  },
];
