import renderer from 'react-test-renderer';
import {OfferDetails} from './offer-details';
import {offer, user, city, review} from '../../mock';

jest.mock(`../review-list/review-list`, () => `ReviewList`);
jest.mock(`../offers-list/offers-list`, () => `OffersList`);
jest.mock(`../map/map`, () => `Map`);

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Offer details correctly renders after relaunch`, () => {
  const offerDetails = renderer
    .create(<OfferDetails
      offers={[offer]}
      offer={offer}
      isFavorite={false}
      isAuthorizationRequired={false}
      user={user}
      city={city}
      activePin={0}
      reviews={[review]}
      onReviewSubmit={jest.fn()}
      onBookmarkClickHandler={jest.fn()}
      onFavoriteClickHandler={jest.fn()}
    />)
  .toJSON();

  expect(offerDetails).toMatchSnapshot();
});
