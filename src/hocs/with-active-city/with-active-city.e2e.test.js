import {mount} from 'enzyme';
import withActiveCity from './with-active-city';
import MainEmpty from '../../components/main-empty/main-empty';
import {EmptyPageCities} from '../../constants';

it(`Active city on empty page correctly changing`, () => {

  const MockMainEmptyWrapped = withActiveCity(MainEmpty);
  const cityClickHandler = jest.fn();

  const emptyPage = mount(<MockMainEmptyWrapped
    cityList={EmptyPageCities}
    activeCity={EmptyPageCities[0]}
    cityClickHandler={cityClickHandler}
  />);

  const cities = emptyPage.find(`.locations__item-link`);
  EmptyPageCities.forEach((item, i) => {
    cities.at(i).simulate(`click`);
    expect(emptyPage.state()).toEqual({
      activeCity: item,
    });
  });
});
