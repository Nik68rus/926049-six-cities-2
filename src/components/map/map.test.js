import renderer from 'react-test-renderer';
import Map from '../map/map';

const createNodeMock = () => document.createElement(`div`);

it(`Map correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const map = renderer
    .create(<Map
      offers={[{
        id: 0,
        title: ``,
        coords: [0, 0],
        picture: ``,
        type: ``,
        price: 0,
        rate: 0,
        isBookmarked: false,
        isPremium: false,
      }]}
    />, options)
  .toJSON();

  expect(map).toMatchSnapshot();
});
