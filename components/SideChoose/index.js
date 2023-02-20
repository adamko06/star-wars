import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addHeroSide } from '../../redux/actions/heroesAction';

import { useMutation } from '@apollo/client';
import { CHOOSE_FAVORITE_SIDE } from '../../graphql/mutations/heroMutations';

import styles from './index.module.scss';

const SideChoose = ({ heroId, actualHeroSide }) => {
  const [side, setSide] = useState(actualHeroSide);

  const dispatch = useDispatch();

  const [chooseFavoriteSide] = useMutation(CHOOSE_FAVORITE_SIDE, {
    onCompleted: () => {
      dispatch(addHeroSide(heroId, side));
    },
  });

  const chooseSide = (side) => {
    setSide(side);
    chooseFavoriteSide({ variables: { id: heroId, side: side } });
  };

  return (
    <>
      <h3
        className={`mt-5 mb-4 d-flex ${
          side === 'light' ? 'justify-content-start' : side === 'dark' ? 'justify-content-end' : 'justify-content-center'
        }`}
      >
        {side === 'light' ? 'You Choose LIGHTSIDE' : side === 'dark' ? 'You Choose DARKSIDE' : 'Choose Side of Your Hero'}
      </h3>
      <div className={styles.switchToggle}>
        <div
          id='left'
          className={`${styles.switchToggle_toggle} ${side === 'light' ? styles.switchToggle_lightSide : null}`}
          onClick={() => chooseSide('light')}
        >
          {side !== 'light' && <>LIGHT</>}
        </div>
        <div id='middle' className={styles.switchToggle_neutral} onClick={() => chooseSide('noSide')}>
          -
        </div>
        <div
          id='right'
          className={`${styles.switchToggle_toggle} ${side === 'dark' ? styles.switchToggle_darkSide : null}`}
          onClick={() => chooseSide('dark')}
        >
          {side !== 'dark' && <>DARK</>}
        </div>
      </div>
      {(side === 'light' || side === 'dark') && (
        <h5 className={`mt-4 d-flex ${side === 'light' ? 'justify-content-start' : 'justify-content-end'}`}>
          „May the FORCE be with you“
        </h5>
      )}
    </>
  );
};

export default SideChoose;
