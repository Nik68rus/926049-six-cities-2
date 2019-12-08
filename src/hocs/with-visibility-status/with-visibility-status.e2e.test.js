import {mount} from 'enzyme';
import withVisibilityStatus from './with-visibility-status';
import {Sorting} from '../../components/sorting/sorting';

it(`Sorting visibility status should correctly changes on click`, () => {

  const MockSortingWrapped = withVisibilityStatus(Sorting);
  const sortingClickHandler = jest.fn();

  const sorting = mount(<MockSortingWrapped
    sortOrder={`Popular`}
    onSortOrderChoice={jest.fn()}
    isVisible={false}
    sortingClickHandler={sortingClickHandler}
  />);

  const currentSorting = sorting.find(`.places__sorting-type`);
  const newSorting = sorting.find(`.places__option`).first();

  currentSorting.simulate(`click`);
  expect(sorting.state()).toEqual({
    visible: true,
  });

  newSorting.simulate(`click`);
  expect(sorting.state()).toEqual({
    visible: false,
  });

});
