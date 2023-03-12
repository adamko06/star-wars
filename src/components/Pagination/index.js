import { useSelector, useDispatch } from 'react-redux';
import { goPreviousPage, goNextPage } from '../../redux/actions/pageAction';

import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';
import styles from './index.module.scss';

const Pagination = ({ countPage }) => {
  const currentPage = useSelector((state) => state.pagination);
  const dispatch = useDispatch();

  return (
    <div className={styles.pagination}>
      <button onClick={() => dispatch(goPreviousPage())} disabled={currentPage <= 1}>
        <HiArrowSmLeft className='icon' />
      </button>
      <div>{currentPage}</div>
      <button onClick={() => dispatch(goNextPage())} disabled={currentPage >= countPage}>
        <HiArrowSmRight className='icon' />
      </button>
    </div>
  );
};

export default Pagination;
