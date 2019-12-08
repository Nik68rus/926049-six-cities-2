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

export const getUserAvatar = (flag, currentUser) => {
  return flag ? `` : <img className="reviews__avatar user__avatar" src={`https://htmlacademy-react-2.appspot.com/six-cities${currentUser.avatar}`} width="54" height="54" alt="User avatar" />;
};

