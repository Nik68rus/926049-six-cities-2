import renderer from 'react-test-renderer';
import {FavoriteCity} from './favorite-city';
import {city, offer} from '../../mock';

jest.mock(`../card/card`, () => `Card`);

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Favorite city correctly renders after relaunch`, () => {
  const favoriteCity = renderer
    .create(<FavoriteCity
      city={city}
      offers={[offer]}
      allOffers={[offer]}
      cityClickHandler={jest.fn()}
    />)
  .toJSON();

  expect(favoriteCity).toMatchSnapshot();
});
