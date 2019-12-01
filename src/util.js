export const makeFirstCharCapital = (word) => {
  return word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ``;
};

export const getAverage = (nums) => nums.reduce((a, b) => (a + b)) / nums.length;

export const getCityOffers = (allOffers, city) => {
  return allOffers.filter((offer) => offer.city.name === city.name);
};

export const getFormatedDate = (reviewDate) => {
  const date = new Date(reviewDate);
  const month = date.toLocaleString(`en-us`, {month: `long`});
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const updateOffers = (allOffers, favoriteOffers) => {
  let updatedOffers = allOffers;
  const favoriteIDs = favoriteOffers.map((offer) => offer.id);
  const offerIDs = allOffers.map((offer) => offer.id);
  favoriteIDs.forEach((id, i) => {
    updatedOffers[offerIDs.indexOf(id)] = favoriteOffers[i];
  });
  return updatedOffers;
};

export const getStatus = (flag) => flag ? 0 : 1;
