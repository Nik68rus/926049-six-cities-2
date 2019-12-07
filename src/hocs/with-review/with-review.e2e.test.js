import {mount} from 'enzyme';
import withReview from './with-review';
import ReviewForm from '../../components/review-form/review-form';

it(`Review form should correctly change state on input and submit `, () => {
  const textChangeEvt = {
    target: {
      name: `review`,
      value: `Test review more then 50 characters an less then 300 characters`,
    },
  };

  const markChangeEvt = {
    target: {
      name: `rating`,
      value: 5,
    },
  };

  const submitEvt = {
    preventDefault: jest.fn(),
  };

  const MockReviewFormWrapped = withReview(ReviewForm);
  const formSubmitHandler = jest.fn();

  const reviewForm = mount(<MockReviewFormWrapped
    id={0}
    onReviewSubmit={formSubmitHandler}
    onSubmit={jest.fn()}
    onInput={jest.fn()}
    formRef={{current: document.createElement(`form`)}}
    textRef={{current: document.createElement(`textarea`)}}
    markRef={{current: document.createElement(`input`)}}
    buttonRef={{current: document.createElement(`button`)}}
    isValid={true}
  />);

  const form = reviewForm.find(`.reviews__form`);

  form.simulate(`change`, textChangeEvt);
  expect(reviewForm.state()).toEqual({
    review: `Test review more then 50 characters an less then 300 characters`,
    rating: 0,
    isValid: false,
  });

  form.simulate(`change`, markChangeEvt);
  expect(reviewForm.state()).toEqual({
    review: `Test review more then 50 characters an less then 300 characters`,
    rating: 5,
    isValid: true,
  });

  form.simulate(`submit`, submitEvt);
  expect(formSubmitHandler).toHaveBeenCalledWith(0, {
    comment: `Test review more then 50 characters an less then 300 characters`,
    rating: 5,
  });
});
