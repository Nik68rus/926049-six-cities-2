import renderer from 'react-test-renderer';
import {Sorting} from './sorting';
import {SortType} from '../../constants';

it(`Sorting correctly renders after relaunch`, () => {

  const sorting = renderer
    .create(<Sorting
      sortOrder={SortType.POPULAR}
      setSortOrder={jest.fn()}
      isVisible={false}
      sortClickHandler={jest.fn()}
    />)
  .toJSON();

  expect(sorting).toMatchSnapshot();
});
