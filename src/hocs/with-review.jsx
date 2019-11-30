const withReview = (Component) => {
  class WithReview extends React.PureComponent {
    constructor(props) {
      super(props);

      this._formRef = React.createRef();

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
      />;
    }

    _submitHandler(evt) {
      const {id, onReviewSubmit} = this.props;

      evt.preventDefault();
      onReviewSubmit(id, {rating: this.state.rating, comment: this.state.review});
      this._resetForm();
    }

    _inputHandler(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value,
      });
      this._validateReview(this.state);
    }

    _validateReview(state) {
      if (state.rating > 0 && state.review.length >= 50 && state.review.length <= 300) {
        this.setState({isValid: true});
      } else {
        this.setState({isValid: false});
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
