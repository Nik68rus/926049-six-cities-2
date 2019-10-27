import renderer from 'react-test-renderer';
import OfferDetails from '../offer-details/offer-details';

it(`Offer details correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<OfferDetails
      offer={{
        title: ``,
        picture: ``,
        type: ``,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      }}
    />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
