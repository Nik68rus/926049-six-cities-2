import renderer from 'react-test-renderer';
import ReviewList from './review-list';
import {review} from '../../mock';

jest.mock(`../review/review`, () => `Review`);
jest.mock(`../review-form/review-form`, () => `ReviewForm`);

it(`Review list correctly renders after relaunch`, () => {
  const reviewList = renderer
    .create(<ReviewList
      reviews={[review]}
      id={0}
      onReviewSubmit={jest.fn()}
      isAuthorizationRequired={false}
    />)
  .toJSON();

  expect(reviewList).toMatchSnapshot();
});
