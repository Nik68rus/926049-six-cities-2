import renderer from 'react-test-renderer';
import OfferDetails from '../offer-details/offer-details';

it(`Offer details correctly renders after relaunch`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  const tree = renderer
    .create(<OfferDetails
      offer={{
        id: 0,
        title: ``,
        coords: [0, 0],
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
