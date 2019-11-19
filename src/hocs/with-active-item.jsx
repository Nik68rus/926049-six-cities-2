const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeCard: -1,
      };

      this._offerMouseEnterHandler = this._offerMouseEnterHandler.bind(this);
      this._offerMouseLeaveHandler = this._offerMouseLeaveHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        activeCard={this.state.activeCard}
        mouseEnterHandler={this._offerMouseEnterHandler}
        mouseLeaveHandler={this._offerMouseLeaveHandler}
      />;
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

  return WithActiveItem;
};

export default withActiveItem;
