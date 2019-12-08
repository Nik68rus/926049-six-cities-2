import renderer from 'react-test-renderer';
import {Card} from './card';
import {offer} from '../../mock';
import {CardType} from '../../constants';

jest.mock(`react-router-dom`, () => ({
  Link: () => null
}));

it(`Card correctly renders after relaunch`, () => {
  const card = renderer
    .create(<Card
      cardType={CardType.CITIES}
      offer={offer}
      id={0}
      onCardMouseEnter={jest.fn()}
      onOfferClick={jest.fn()}
      onBookmarkClick={jest.fn()}
      isFavorite={false}
    />)
  .toJSON();

  expect(card).toMatchSnapshot();
});
