import renderer from 'react-test-renderer';
import Card from '../card/card';

it(`Card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Card
      offer={{
        title: ``,
        picture: ``,
        type: ``,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      }}
      id={0}
      mouseEnterHandler={()=>{}}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
