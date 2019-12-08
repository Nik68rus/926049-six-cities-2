const withVisibilityStatus = (Component) => {
  class WithVisibilityStatus extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        visible: false,
      };

      this._handleSortTypeClick = this._handleSortTypeClick.bind(this);
    }

    _handleSortTypeClick() {
      this.setState({
        visible: !this.state.visible,
      });
    }

    render() {
      return <Component
        {...this.props}
        isVisible={this.state.visible}
        sortClickHandler={this._handleSortTypeClick}
      />;
    }
  }

  return WithVisibilityStatus;
};

export default withVisibilityStatus;
