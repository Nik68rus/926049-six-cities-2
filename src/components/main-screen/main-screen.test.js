import renderer from 'react-test-renderer';
import MainScreen from '../main-screen/main-screen';

it(`Main screen correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<MainScreen
      offers={[]}
      titleClickHandler={()=>{}}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
