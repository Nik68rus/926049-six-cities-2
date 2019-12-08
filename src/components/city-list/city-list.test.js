import renderer from 'react-test-renderer';
import {CityList} from './city-list';
import {city, offer} from '../../mock';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`City list correctly renders after relaunch`, () => {
  const cityList = renderer
    .create(<CityList
      currentCity={city}
      cities={[city]}
      allOffers={[offer]}
      onCityChange={jest.fn()}
    />)
  .toJSON();

  expect(cityList).toMatchSnapshot();
});
