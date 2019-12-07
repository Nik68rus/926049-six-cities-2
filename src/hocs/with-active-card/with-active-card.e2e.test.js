import {mount} from 'enzyme';
import withActiveCard from './with-active-card';

const MockComponent = (props) => {
  return (
    <div
      className="card--test"
      onMouseEnter={() => props.mouseEnterHandler(`newState`)}
    >
      Test node
    </div>
  );
};

it(`Active card correctly changing in state`, () => {

  const MockComponentWrapped = withActiveCard(MockComponent);

  const component = mount(<MockComponentWrapped
    mouseEnterHandler={jest.fn()}
  />);

  const card = component.find(`.card--test`);
  card.simulate(`mouseEnter`);
  expect(component.state().activeCard).toEqual(`newState`);
});

MockComponent.propTypes = {
  mouseEnterHandler: PropTypes.func.isRequired
};
