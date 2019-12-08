import renderer from 'react-test-renderer';
import SignIn from './sign-in';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Sign in form correctly renders after relaunch`, () => {
  const history = {
    push: jest.fn(),
  };

  const signIn = renderer
    .create(<SignIn
      onInput={jest.fn()}
      onSubmit={jest.fn()}
      history={history}
    />)
  .toJSON();

  expect(signIn).toMatchSnapshot();
});
