import renderer from 'react-test-renderer';
import OffersList from '../offers-list/offers-list';

it(`Offers list correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<OffersList
      offers={[]}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
