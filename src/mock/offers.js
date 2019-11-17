import {Type, CITIES} from '../constants';

export const getOffers = () => {
  let allOffers = [];
  const offersByCity = CITIES.map((city) => {
    return [
      {
        id: 0,
        city,
        title: `Beautiful & luxurious apartment at great location in ${city.name}`,
        coords: [52.3909553943508, 4.85309666406198],
        picture: `img/apartment-01.jpg`,
        type: Type.APARTMENT,
        price: 150,
        rate: 50,
        isBookmarked: true,
        isPremium: false,
      },
      {
        id: 1,
        city,
        title: `Wood and stone place in ${city.name}`,
        coords: [52.369553943508, 4.85309666406198],
        picture: `img/room.jpg`,
        type: Type.ROOM,
        price: 80,
        rate: 80,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 2,
        city,
        title: `Canal View Prinsengracht in ${city.name}`,
        coords: [52.3909553943508, 4.929309666406198],
        picture: `img/apartment-03.jpg`,
        type: Type.APARTMENT,
        price: 120,
        rate: 90,
        isBookmarked: false,
        isPremium: false,
      },
      {
        id: 3,
        city,
        title: `Nice, cozy, warm big bed apartment in ${city.name}`,
        coords: [52.3809553943508, 4.939309666406198],
        picture: `img/apartment-02.jpg`,
        type: Type.APARTMENT,
        price: 200,
        rate: 100,
        isBookmarked: true,
        isPremium: true,
      },
    ];
  });
  offersByCity.forEach((cityOffers) => {
    cityOffers.forEach((offer) => allOffers.push(offer));
  });
  allOffers.forEach((offer, i) => {
    offer.id = i;
  });
  return allOffers;
};

export const offers = getOffers();
