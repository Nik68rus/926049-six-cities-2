const withVisibilityStatus = (Component) => {
  class WithVisibilityStatus extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        visible: false,
      };

      this._sortTypeClickHandler = this._sortTypeClickHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        isVisible={this.state.visible}
        sortClickHandler={this._sortTypeClickHandler}
      />;
    }

    _sortTypeClickHandler() {
      this.setState({
        visible: !this.state.visible,
      });
    }
  }

  return WithVisibilityStatus;
};

export default withVisibilityStatus;
