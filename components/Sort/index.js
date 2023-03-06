import { useDispatch } from 'react-redux';
import { defaultPage } from '../../redux/actions/pageAction';

import { useState } from 'react';

import { Button } from 'react-bootstrap';
import { HiArrowSmUp, HiArrowSmDown } from 'react-icons/hi';

import styles from './index.module.scss';

const index = ({ handleSort }) => {
  const directions = [null, 'up', 'down'];
  const [currentDirectionIndex, setCurrentDirectionIndex] = useState(0);
  const [currentDirection, setCurrentDirection] = useState(directions[currentDirectionIndex]);

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const nextDirectionIndex = (currentDirectionIndex + 1) % directions.length;
    setCurrentDirectionIndex(nextDirectionIndex);
    setCurrentDirection(directions[nextDirectionIndex]);
    handleSort(directions[nextDirectionIndex]);
    dispatch(defaultPage());
  };

  return (
    <>
      <Button onClick={handleButtonClick}>
        {currentDirection === 'up' ? (
          <>
            <HiArrowSmUp className='icon' />
            <HiArrowSmDown className={`icon ${styles.sorting}`} />
          </>
        ) : currentDirection === 'down' ? (
          <>
            <HiArrowSmUp className={`icon ${styles.sorting}`} />
            <HiArrowSmDown className='icon' />
          </>
        ) : (
          <>
            <HiArrowSmUp className={`icon ${styles.sorting}`} />
            <HiArrowSmDown className={`icon ${styles.sorting}`} />
          </>
        )}
      </Button>
    </>
  );
};

export default index;
