import { useDispatch } from 'react-redux';
import { goDefaultPage } from '../../redux/actions/pageAction';

import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';
import styles from './index.module.scss';

const Sort = ({ handleSort }) => {
  const directions = [null, 'up', 'down'];
  const [currentDirectionIndex, setCurrentDirectionIndex] = useState(0);
  const [currentDirection, setCurrentDirection] = useState(directions[currentDirectionIndex]);

  const dispatch = useDispatch();

  const handleSortButtonClick = () => {
    const nextDirectionIndex = (currentDirectionIndex + 1) % directions.length;
    setCurrentDirectionIndex(nextDirectionIndex);
    setCurrentDirection(directions[nextDirectionIndex]);
    handleSort(directions[nextDirectionIndex]);
    dispatch(goDefaultPage());
  };

  return (
    <>
      <Button onClick={handleSortButtonClick} className={styles.sorting}>
        {currentDirection === 'up' ? (
          <>
            <HiArrowSmUp className='icon' />
            <HiArrowSmDown className={`icon ${styles.sorting_disable}`} />
          </>
        ) : currentDirection === 'down' ? (
          <>
            <HiArrowSmUp className={`icon ${styles.sorting_disable}`} />
            <HiArrowSmDown className='icon' />
          </>
        ) : (
          <>
            <HiArrowSmUp className={`icon ${styles.sorting_disable}`} />
            <HiArrowSmDown className={`icon ${styles.sorting_disable}`} />
          </>
        )}
      </Button>
    </>
  );
};

export default Sort;
