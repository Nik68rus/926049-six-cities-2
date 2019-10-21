import renderer from 'react-test-renderer';
import App from '../app/app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      adverts={[]}
      clickHandler={()=>{}}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});