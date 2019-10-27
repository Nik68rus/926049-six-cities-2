import Card from '../card/card';
import {PureComponent} from 'react';

export default class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };

    this._offerMouseEnterHandler = this._offerMouseEnterHandler.bind(this);
  }

  render() {
    const {offers, titleClickHandler} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer, i) => <Card key={offer.title + i} offer={offer} id={i} mouseEnterHandler={this._offerMouseEnterHandler} titleClickHandler={titleClickHandler}/>)
      }
    </div>;
  }

  _offerMouseEnterHandler(id) {
    this.setState((prevState) => {
      return {
        prevState,
        activeCard: id,
      };
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  titleClickHandler: PropTypes.func.isRequired,
};

