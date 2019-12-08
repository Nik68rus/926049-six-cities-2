import renderer from 'react-test-renderer';
import {MainScreen} from './main-screen';
import {offer, user, city} from '../../mock';

jest.mock(`../offers-list/offers-list`, () => `OffersList`);
jest.mock(`../map/map`, () => `Map`);
jest.mock(`../city-list/city-list`, () => `CityList`);
jest.mock(`../main-empty/main-empty`, () => `MainEmpty`);
jest.mock(`../sorting/sorting`, () => `Sorting`);

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Main screen correctly renders after relaunch`, () => {
  const mainScreen = renderer
    .create(<MainScreen
      isOffersLoaded={true}
      isUserStateDefined={true}
      user={user}
      city={city}
      offers={[offer]}
      activePin={0}
      allOffers={[offer]}
      onFavoriteClickHandler={jest.fn()}
    />)
  .toJSON();

  expect(mainScreen).toMatchSnapshot();
});
