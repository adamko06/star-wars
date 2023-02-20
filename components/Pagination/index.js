// redux
import { useSelector, useDispatch } from 'react-redux';
import { previousPage, nextPage } from '../../redux/actions/pageAction';

import styles from './index.module.scss';

const Pagination = ({countPage}) => {
  const currentPage = useSelector((state) => state.pagination);
  const dispatch = useDispatch();
  return (

    <div className={styles.pagination}>
      <button onClick={() => dispatch(previousPage())} disabled={currentPage <= 1}>
        ←
      </button>
      <div>{currentPage}</div>
      <button onClick={() => dispatch(nextPage())} disabled={currentPage >= countPage}>
        →
      </button>
    </div>
  );
};

export default Pagination;
