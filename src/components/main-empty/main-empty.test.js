import renderer from 'react-test-renderer';
import {EMPTY_PAGE_CITIES} from '../../constants';
import MainEmpty from './main-empty';

it(`Empty main page renders after relaunch`, () => {
  const mainEmpty = renderer
    .create(<MainEmpty
      cityList={EMPTY_PAGE_CITIES}
      activeCity={EMPTY_PAGE_CITIES[0]}
      cityClickHandler={jest.fn()}
    />)
  .toJSON();

  expect(mainEmpty).toMatchSnapshot();
});
