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
      mouseEnterHandler={jest.fn()}
      offerClickHandler={jest.fn()}
      onBookmarkClickHandler={jest.fn()}
      isFavorite={false}
    />)
  .toJSON();

  expect(card).toMatchSnapshot();
});
