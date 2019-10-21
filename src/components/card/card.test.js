import renderer from 'react-test-renderer';
import Card from '../card/card';

it(`Card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Card
      key={0}
      title={``}
      clickHandler={()=>{}}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
