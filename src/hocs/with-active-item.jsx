const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: -1,
      };

      this._offerMouseEnterHandler = this._offerMouseEnterHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeCard={this.state.activeCard}
        mouseEnterHandler={this._offerMouseEnterHandler}
      />;
    }

    _offerMouseEnterHandler(id) {
      this.setState({
        activeCard: id,
      });
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
