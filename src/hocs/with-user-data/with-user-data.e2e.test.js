import {mount} from 'enzyme';
import withUserData from './with-user-data';
import SignIn from '../../components/sign-in/sign-in';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`User data input should correctly change state on input and submit `, () => {
  const emailChangeEvt = {
    target: {
      name: `email`,
      value: `e2e@test.js`,
    },
  };

  const passwordChangeEvt = {
    target: {
      name: `password`,
      value: `test`,
    },
  };

  const submitEvt = {
    preventDefault: jest.fn(),
  };

  const MockSignInWrapped = withUserData(SignIn);
  const formSubmitHandler = jest.fn();

  const signIn = mount(<MockSignInWrapped
    onSubmit={formSubmitHandler}
    onInput={jest.fn()}
    history={{push: jest.fn()}}
  />);

  const form = signIn.find(`.login__form`);

  form.simulate(`change`, emailChangeEvt);
  expect(signIn.state()).toEqual({
    email: `e2e@test.js`,
    password: ``,
  });

  form.simulate(`change`, passwordChangeEvt);
  expect(signIn.state()).toEqual({
    email: `e2e@test.js`,
    password: `test`,
  });

  form.simulate(`submit`, submitEvt);
  expect(formSubmitHandler).toHaveBeenCalledWith({
    email: `e2e@test.js`,
    password: `test`,
  });
});
