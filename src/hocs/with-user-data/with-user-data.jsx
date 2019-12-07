const withUserData = (Component) => {
  class WithUserData extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._formSubmitHandler = this._formSubmitHandler.bind(this);
      this._inputHandler = this._inputHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onSubmit={this._formSubmitHandler}
        onInput={this._inputHandler}
      />;
    }

    _formSubmitHandler(evt) {
      const {onSubmit, history} = this.props;
      evt.preventDefault();
      onSubmit(this.state);
      history.push(`/`);
    }

    _inputHandler(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      });
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
