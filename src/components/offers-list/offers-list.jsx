import Card from '../card/card';

export default class OffersList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };

    this._offerMouseEnterHandler = this._offerMouseEnterHandler.bind(this);
    this._offerMouseLeaveHandler = this._offerMouseLeaveHandler.bind(this);
  }

  render() {
    const {offers} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer, i) => <Card key={offer.id} offer={offer} id={i} mouseEnterHandler={this._offerMouseEnterHandler} mouseLeaveHandler={this._offerMouseLeaveHandler}/>)
      }
    </div>;
  }

  _offerMouseEnterHandler(id) {
    this.setState({
      activeCard: id,
    });
  }

  _offerMouseLeaveHandler() {
    this.setState({
      activeCard: -1,
    });
  }
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
};

