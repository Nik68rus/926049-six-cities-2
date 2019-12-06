import renderer from 'react-test-renderer';
import {Favorites} from './favorites';
import {offer, user} from '../../mock';

jest.mock(`../favorite-city/favorite-city`, () => `FavoriteCity`);

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Favorite list correctly renders after relaunch`, () => {
  const favorites = renderer
    .create(<Favorites
      favoriteOffers={[offer]}
      user={user}
    />)
  .toJSON();

  expect(favorites).toMatchSnapshot();
});
