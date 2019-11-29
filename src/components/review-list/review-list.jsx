import Review from '../review/review';
import ReviewForm from '../review-form/review-form';

const ReviewList = (props) => {
  const {reviews} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {
          reviews.map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
      <ReviewForm />
    </section>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewList;
