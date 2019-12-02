import {Link} from 'react-router-dom';
import Card from '../card/card';
import {CardType} from '../../constants';

const FavoriteCity = (props) => {
  const {name, offers} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to="/favorites" className="locations__item-link">
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => <Card key={offer.id} offer={offer} cardType={CardType.FAVORITES}/>)}
      </div>
    </li>
  );
};

FavoriteCity.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export default FavoriteCity;
