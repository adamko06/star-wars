// redux
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/actions/pageAction';

const Pagination = () => {
  const currentPage = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  return (
    <div className='box_pagination'>
      <button onClick={() => dispatch(decrement())} disabled={currentPage <= 1}>
        ←
      </button>
      <div>{currentPage}</div>
      <button onClick={() => dispatch(increment())} disabled={currentPage >= 3}>
        →
      </button>
    </div>
  );
};

export default Pagination;
