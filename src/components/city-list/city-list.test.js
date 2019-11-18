import renderer from 'react-test-renderer';
import {CityList} from '../city-list/city-list';

it(`City list correctly renders after relaunch`, () => {
  const cityList = renderer
    .create(<CityList
      currentCity={{
        name: ``,
        location: {
          latitude: 0,
          longtitude: 0,
          zoom: 0,
        }
      }}
      cities={[]}
      changeCityClickHandler={jest.fn()}
    />)
  .toJSON();

  expect(cityList).toMatchSnapshot();
});
