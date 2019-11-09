import renderer from 'react-test-renderer';
import MainScreen from '../main-screen/main-screen';

it(`Main screen correctly renders after relaunch`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  const tree = renderer
    .create(<MainScreen
      offers={[]}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
