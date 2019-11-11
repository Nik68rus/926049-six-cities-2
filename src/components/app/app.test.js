import renderer from 'react-test-renderer';
import App from '../app/app';

jest.mock(`../map/map`);

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      offers={[]}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
