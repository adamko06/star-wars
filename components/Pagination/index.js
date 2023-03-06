// redux
import { useSelector, useDispatch } from 'react-redux';
import { previousPage, nextPage } from '../../redux/actions/pageAction';

import styles from './index.module.scss';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

const Pagination = ({ countPage }) => {
  const currentPage = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  return (
    <div className={styles.pagination}>
      <button onClick={() => dispatch(previousPage())} disabled={currentPage <= 1}>
      <HiArrowSmLeft className='icon' />
      </button>
      <div>{currentPage}</div>
      <button onClick={() => dispatch(nextPage())} disabled={currentPage >= countPage}>
        <HiArrowSmRight className='icon' />
      </button>
    </div>
  );
};

export default Pagination;
