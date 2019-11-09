import renderer from 'react-test-renderer';
import App from '../app/app';

it(`App correctly renders after relaunch`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

  const tree = renderer
    .create(<App
      offers={[]}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
