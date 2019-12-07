import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import withReview from '../../hocs/with-review/with-review';

const ReviewFormWrapped = withReview(ReviewForm);

const ReviewList = (props) => {
  const {reviews, id, onReviewSubmit, isAuthorizationRequired} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.sort((a, b) => new Date(b.date) - new Date(a.date)).map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
      {isAuthorizationRequired ? null : <ReviewFormWrapped id={id} onReviewSubmit={onReviewSubmit}/>}
    </section>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  onReviewSubmit: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
};

export default ReviewList;
