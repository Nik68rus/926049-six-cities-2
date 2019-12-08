import renderer from 'react-test-renderer';
import ReviewForm from './review-form';

it(`Review form correctly renders after relaunch`, () => {
  const ref = {
    form: {
      current: document.createElement(`form`),
    },
    text: {
      current: document.createElement(`input`),
    },
    mark: {
      current: document.createElement(`input`),
    },
    button: {
      current: document.createElement(`button`),
    },
  };

  const reviewForm = renderer
    .create(<ReviewForm
      onInput={jest.fn()}
      onSubmit={jest.fn()}
      formRef={ref.form}
      textRef={ref.text}
      markRef={ref.mark}
      buttonRef={ref.button}
      isValid={true}
    />)
  .toJSON();

  expect(reviewForm).toMatchSnapshot();
});
