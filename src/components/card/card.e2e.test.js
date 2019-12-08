import {shallow} from 'enzyme';
import {offer} from '../../mock';
import {CardType} from '../../constants';
import {Card} from '../card/card';

it(`Correct info in callbacks in Card component`, () => {

  const onCardMouseEnter = jest.fn();
  const onOfferClick = jest.fn();
  const onBookmarkClick = jest.fn();

  const card = shallow(
      <Card
        cardType={CardType.CITIES}
        offer={offer}
        id={0}
        onCardMouseEnter={onCardMouseEnter}
        onOfferClick={onOfferClick}
        onBookmarkClick={onBookmarkClick}
        isFavorite={false}
      />
  );

  const cardNode = card.find(`article`);
  const link = card.find(`.place-card__name Link`);
  const bookmark = card.find(`button`);
  cardNode.simulate(`mouseEnter`);
  link.simulate(`click`);
  bookmark.simulate(`click`);
  expect(onCardMouseEnter).toHaveBeenCalledWith(0);
  expect(onOfferClick).toHaveBeenCalledWith(0);
  expect(onBookmarkClick).toHaveBeenCalledWith(0, 1);
});
