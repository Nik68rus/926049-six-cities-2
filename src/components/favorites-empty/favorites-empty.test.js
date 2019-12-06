import renderer from 'react-test-renderer';
import {user} from '../../mock';
import FavoritesEmpty from './favorites-empty';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Empty favorite list renders after relaunch`, () => {
  const favoritesEmpty = renderer
    .create(<FavoritesEmpty
      user={user}
    />)
  .toJSON();

  expect(favoritesEmpty).toMatchSnapshot();
});
