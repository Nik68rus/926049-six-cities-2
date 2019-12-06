import renderer from 'react-test-renderer';
import {EmptyPageCities} from '../../constants';
import MainEmpty from './main-empty';

it(`Empty main page renders after relaunch`, () => {
  const mainEmpty = renderer
    .create(<MainEmpty
      cityList={EmptyPageCities}
      activeCity={EmptyPageCities[0]}
      cityClickHandler={jest.fn()}
    />)
  .toJSON();

  expect(mainEmpty).toMatchSnapshot();
});
