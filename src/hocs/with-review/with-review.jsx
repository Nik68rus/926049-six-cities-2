const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this._formRef = React.createRef();
      this._textRef = React.createRef();
      this._markRef = React.createRef();
      this._buttonRef = React.createRef();

      this.state = {
        rating: 0,
        review: ``,
        isValid: false,
      };

      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleFormSubmit(evt) {
      const {id, onReviewSubmit} = this.props;

      evt.preventDefault();
      if (this.state.isValid) {
        onReviewSubmit(id, {rating: this.state.rating, comment: this.state.review});
        this._resetForm();
      } else {
        this._validateReview(this.state);
      }
    }

    _handleInputChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      },
      () => this._validateReview(this.state)
      );
      this._validateReview(this.state);
    }

    _validateReview(state) {
      if (state.rating === 0) {
        this.setState({isValid: false});
        this._markRef.current.setCustomValidity(`Choose the mark`);
      } else {
        if (state.review.length < 50 || state.review.length > 300) {
          this.setState({isValid: false});
          this._textRef.current.setCustomValidity(`Comment should be from 50 to 300 characters`);
        } else {
          this.setState({isValid: true});
          this._markRef.current.setCustomValidity(``);
          this._textRef.current.setCustomValidity(``);
          this._buttonRef.current.disabled = !this.state.isValid;
        }
      }
    }

    _resetForm() {
      this.setState({
        rating: 0,
        review: ``,
        isValid: false
      });
      this._markRef.current.setCustomValidity(``);
      this._textRef.current.setCustomValidity(``);
      this._formRef.current.reset();
    }

    render() {
      return <Component
        {...this.props}
        onSubmit={this._handleFormSubmit}
        onInput={this._handleInputChange}
        formRef={this._formRef}
        textRef={this._textRef}
        markRef={this._markRef}
        buttonRef={this._buttonRef}
        isValid={this.state.isValid}
      />;
    }
  }

  WithReview.propTypes = {
    id: PropTypes.number.isRequired,
    onReviewSubmit: PropTypes.func.isRequired,
  };

  return WithReview;
};

export default withReview;
