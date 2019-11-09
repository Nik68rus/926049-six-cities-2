import renderer from 'react-test-renderer';
import Map from '../map/map';

it(`Map correctly renders after relaunch`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);

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
    />)
  .toJSON();

  expect(map).toMatchSnapshot();
});
