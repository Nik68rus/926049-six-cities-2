import {shallow} from 'enzyme';
import {offer} from '../../mock';
import {CardType} from '../../constants';
import {Card} from '../card/card';

it(`Correct info in callbacks in Card component`, () => {

  const mouseEnterHandler = jest.fn();
  const offerClickHandler = jest.fn();
  const bookmarkClickHandler = jest.fn();

  const card = shallow(
      <Card
        cardType={CardType.CITIES}
        offer={offer}
        id={0}
        mouseEnterHandler={mouseEnterHandler}
        offerClickHandler={offerClickHandler}
        onBookmarkClickHandler={bookmarkClickHandler}
        isFavorite={false}
      />
  );

  const cardNode = card.find(`article`);
  const link = card.find(`.place-card__name Link`);
  const bookmark = card.find(`button`);
  cardNode.simulate(`mouseEnter`);
  link.simulate(`click`);
  bookmark.simulate(`click`);
  expect(mouseEnterHandler).toHaveBeenCalledWith(0);
  expect(offerClickHandler).toHaveBeenCalledWith(0);
  expect(bookmarkClickHandler).toHaveBeenCalledWith(0, 1);
});
