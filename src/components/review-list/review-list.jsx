import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import withReview from '../../hocs/with-review';

const ReviewFormWrapped = withReview(ReviewForm);

const ReviewList = (props) => {
  const {reviews, id, onReviewSubmit} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
      <ReviewFormWrapped id={id} onReviewSubmit={onReviewSubmit}/>
    </section>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
};

export default ReviewList;
