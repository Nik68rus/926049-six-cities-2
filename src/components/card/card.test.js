import renderer from 'react-test-renderer';
import Card from '../card/card';

it(`Card correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<Card
      offer={{
        id: 0,
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
      mouseLeaveHandler={()=>{}}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
