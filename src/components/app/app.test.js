import renderer from 'react-test-renderer';
import App from '../app/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from '../../reducer';

it(`App correctly renders after relaunch`, () => {
  const store = createStore(reducer);
  const tree = renderer
    .create(<Provider store={store}><App offers={[]}/></Provider>, {
      createNodeMock: (element) => {
        if (element.type === `div`) {
          return document.createElement(`div`);
        }
        return null;
      }})
  .toJSON();

  expect(tree).toMatchSnapshot();
});
