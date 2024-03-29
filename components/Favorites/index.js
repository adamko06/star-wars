import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { useMutation } from '@apollo/client';
import { resetHeroes } from '../../redux/actions/heroesAction.js';
import { RESET_FAVORITES } from '../../graphql/mutations/heroMutations';

import Box from '../Box';

import { Button } from 'react-bootstrap';
import { FiUsers } from 'react-icons/fi';
import styles from './index.module.scss';

const Favorites = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const reduxHeroes = useSelector((state) => state.heroes);

  const [favorites, setFavorites] = useState();
  const isFavoriteEmpty = favorites?.length < 1;

  useEffect(() => {
    const filteredHeroes = reduxHeroes.filter((hero) => hero.isFavorite === true);
    setFavorites(filteredHeroes);
  }, [reduxHeroes]);

  const [resetFavorites] = useMutation(RESET_FAVORITES, {
    onCompleted: () => {
      dispatch(resetHeroes());
    },
  });

  return (
    <div className='container'>
      <h1>Your Favorite Heroes</h1>
      <div className={styles.box}>
        {favorites &&
          favorites.map((hero, index) => {
            return <Box heroes={favorites} hero={hero} key={index} keyIndex={index} />;
          })}
      </div>
      {!isFavoriteEmpty && (
        <div className='text-center mt-4'>
          <Button
            variant='primary'
            onClick={() => {
              resetFavorites();
              router.push('/');
            }}
          >
            <FiUsers className='icon' /> Reset Favorites
          </Button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
