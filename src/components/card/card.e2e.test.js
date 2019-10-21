import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../card/card';

Enzyme.configure({adapter: new Adapter()});

it(`Title click action called once`, () => {
  const clickHandler = jest.fn();

  const card = shallow(
      <Card
        title={``}
        clickHandler={clickHandler}
      />
  );

  const title = card.find(`h2`);
  title.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
