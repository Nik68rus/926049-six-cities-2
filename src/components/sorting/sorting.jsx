import {SortType} from '../../constants';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action/action-creator';

export const Sorting = (props) => {
  const {sortOrder, setSortOrder, isVisible, sortClickHandler} = props;
  const sortNames = Object.keys(SortType).map((it) => SortType[it]);
  const checkActivity = (it) => it === sortOrder ? `places__option places__option--active` : `places__option `;
  const checkVisibility = () => isVisible ? `places__options places__options--custom places__options--opened` : `places__options places__options--custom`;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={sortClickHandler}>
        {sortOrder}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={checkVisibility()}>
        {sortNames.map((it) =>
          <li
            key={it}
            className={checkActivity(it)}
            tabIndex="0"
            onClick={() => {
              setSortOrder(it);
              sortClickHandler();
            }}
          >
            {it}
          </li>)}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  sortOrder: PropTypes.string.isRequired,
  setSortOrder: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  sortClickHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  sortOrder: state.user.sortOrder,
});

const mapDispatchToProps = (dispatch) => ({
  setSortOrder: (order) => dispatch(ActionCreator.changeSorting(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
