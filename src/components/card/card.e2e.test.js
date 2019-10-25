import {shallow} from 'enzyme';
import Card from '../card/card';

it(`Correct info in callback then mouse enters card`, () => {
  const mockOffer = {
    title: ``,
    picture: ``,
    type: ``,
    price: 0,
    rate: 0,
    isBookmarked: false,
    isPremium: false,
  };

  const mouseHandler = jest.fn();

  const card = shallow(
      <Card
        offer={mockOffer}
        id={0}
        mouseEnterHandler={mouseHandler}
      />
  );

  const cardNode = card.find(`article`);
  cardNode.simulate(`mouseEnter`);
  expect(mouseHandler).toHaveBeenCalledWith(0);
});
