import renderer from 'react-test-renderer';
import {OffersList} from './offers-list';
import {offer} from '../../mock';
import {SortType, CardType} from '../../constants';

jest.mock(`../card/card`, () => `Card`);

it(`Offers list correctly renders after relaunch`, () => {
  const offersList = renderer
    .create(<OffersList
      cardType={CardType.CITIES}
      activeCard={0}
      offers={[offer]}
      onCardMouseEnter={jest.fn()}
      sortOrder={SortType.POPULAR}
    />)
  .toJSON();

  expect(offersList).toMatchSnapshot();
});
