const withUserData = (Component) => {
  class WithUserData extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleFormSubmit(evt) {
      const {onSubmit, history} = this.props;
      evt.preventDefault();
      onSubmit(this.state);
      history.push(`/`);
    }

    _handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      return <Component
        {...this.props}
        onSubmit={this._handleFormSubmit}
        onInput={this._handleInputChange}
      />;
    }
  }

  WithUserData.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  return WithUserData;
};

export default withUserData;
