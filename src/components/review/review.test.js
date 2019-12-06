import renderer from 'react-test-renderer';
import Review from './review';
import {review} from '../../mock';

it(`Review correctly renders after relaunch`, () => {
  const reviewTree = renderer
    .create(<Review
      review={review}
    />)
  .toJSON();

  expect(reviewTree).toMatchSnapshot();
});
