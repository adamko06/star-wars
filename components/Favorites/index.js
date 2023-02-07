import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { resetHeroes } from '../../redux/actions/favoriteAction';
import { onLoadChars } from '../../redux/actions/charAction';

import Box from '../Box';
import { Button } from 'react-bootstrap';

import styles from './index.module.scss';

const Favorites = () => {
  const router = useRouter();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavoriteEmpty = favorites.length < 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onLoadChars());
  }, []);

  return (
    <div className='container'>
      <h1 className='text-center mt-5 mb-4'>Your Favorite Heroes</h1>
      <div className={styles.box}>
        {favorites &&
          favorites.map((item, index) => {
            return (
              <Box
                favorites={favorites}
                hero={item}
                index={item.heroIndex >= 17 ? item.heroIndex - 2 : item.heroIndex - 1}
                key={index}
                keyIndex={index}
              />
            );
          })}
      </div>
      {!isFavoriteEmpty && (
        <div className='text-center mt-4'>
          <Button
            variant='primary'
            onClick={() => {
              dispatch(resetHeroes());
              router.push('/');
            }}
          >
            Reset Favorites
          </Button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
