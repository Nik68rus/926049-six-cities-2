import renderer from 'react-test-renderer';
import Map from '../map/map';
import {city, offer} from '../../mock';

const createNodeMock = () => document.createElement(`div`);

it(`Map correctly renders after relaunch`, () => {
  const options = {createNodeMock};
  const map = renderer
    .create(<Map
      activePin={0}
      city={city}
      offers={[offer]}
    />, options)
  .toJSON();

  expect(map).toMatchSnapshot();
});
