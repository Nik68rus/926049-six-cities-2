import withActiveItem from './with-active-item';
import OffersList from '../components/offers-list/offers-list';
import {mount} from 'enzyme';
import {offers} from '../mock/offers';

const OffersListWrapped = withActiveItem(OffersList);


it(`MouseEnter event should correctly change state`, () => {
  const activeOffers = offers.filter((offer) => offer.city.name === `Amsterdam`);
  const component = mount(<OffersListWrapped offers={activeOffers} />);

  const cards = component.find(`.cities__place-card`);
  const card1 = cards.at(0);
  const card2 = cards.at(1);

  card1.simulate(`mouseEnter`);
  expect(component.state().activeCard).toEqual(0);

  card2.simulate(`mouseEnter`);
  expect(component.state().activeCard).toEqual(1);
});
