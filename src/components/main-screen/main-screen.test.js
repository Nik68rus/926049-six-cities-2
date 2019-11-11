import renderer from 'react-test-renderer';
import MainScreen from '../main-screen/main-screen';

jest.mock(`../map/map`);

it(`Main screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      offers={[]}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
