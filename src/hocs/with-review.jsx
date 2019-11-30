const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this._formRef = React.createRef();
      this._textRef = React.createRef();
      this._markRef = React.createRef();

      this.state = {
        rating: 0,
        review: ``,
        isValid: false,
      };

      this._submitHandler = this._submitHandler.bind(this);
      this._inputHandler = this._inputHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        onSubmit={this._submitHandler}
        onInput={this._inputHandler}
        formRef={this._formRef}
        textRef={this._textRef}
        markRef={this._markRef}
      />;
    }

    _submitHandler(evt) {
      const {id, onReviewSubmit} = this.props;

      evt.preventDefault();
      if (this.state.isValid) {
        onReviewSubmit(id, {rating: this.state.rating, comment: this.state.review});
        this._resetForm();
      } else {
        this._validateReview(this.state);
      }
    }

    _inputHandler(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      });
      this._validateReview(this.state);
      this._textRef.current.setCustomValidity(``);
      this._markRef.current.setCustomValidity(``);
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
        }
      }
    }

    _resetForm() {
      this.setState({
        rating: 0,
        review: ``,
        isValid: false
      });

      this._formRef.current.reset();
    }
  }

  WithReview.propTypes = {
    id: PropTypes.number.isRequired,
    onReviewSubmit: PropTypes.func.isRequired,
  };

  return WithReview;
};

export default withReview;
