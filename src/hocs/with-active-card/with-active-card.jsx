const withActiveCard = (Component) => {
  class WithActiveCard extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: -1,
      };

      this._handleOfferMouseEnter = this._handleOfferMouseEnter.bind(this);
    }

    _handleOfferMouseEnter(id) {
      this.setState({
        activeCard: id,
      });
    }

    render() {
      return <Component
        {...this.props}
        activeCard={this.state.activeCard}
        mouseEnterHandler={this._handleOfferMouseEnter}
      />;
    }
  }

  return WithActiveCard;
};

export default withActiveCard;
