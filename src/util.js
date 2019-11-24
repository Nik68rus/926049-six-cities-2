export const makeFirstCharCapital = (word) => {
  return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ``;
};

export const getAverage = (nums) => nums.reduce((a, b) => (a + b)) / nums.length;

export const getCityOffers = (allOffers, city) => {
  return allOffers.filter((offer) => offer.city.name === city.name);
};

export const getCities = (allOffers) => {
  const getCityLocation = (offers, cityName) => {
    return offers.find((offer) => offer.city.name === cityName).city.location;
  };

  const cityNames = [...new Set(allOffers.map((offer) => offer.city.name))];
  return cityNames.map((cityName) => {
    return {
      name: cityName,
      location: getCityLocation(allOffers, cityName),
    };
  });
};
