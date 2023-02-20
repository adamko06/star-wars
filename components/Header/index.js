import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { defaultPage } from '../../redux/actions/pageAction';
import { currentFilterByMovie } from '../../redux/actions/filterByMovieAction';

import { useEffect, useState } from 'react';

import styles from './index.module.scss';

const Header = ({ lyrics }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.heroes);

  const [numberOfHereos, setNumberOfHereos] = useState();

  

  useEffect(() => {
    setNumberOfHereos(favorites.filter((hero) => hero.isFavorite === true).length);
  }, [favorites]);

  return (
    <header>
      <div className='container'>
        <div className={styles.header_nav}>
          <Link href='/'>
            <a
              className={styles.header_logo}
              onClick={() => {
                dispatch(defaultPage());
                dispatch(currentFilterByMovie());
              }}
            >
              <img alt='starwars' src='/logo.svg' />
            </a>
          </Link>
          <div>
            {lyrics ? (
              <Link href='/lyrics'>
                {' '}
                {/* forNow */}
                <a>Login</a>
              </Link>
            ) : numberOfHereos > 0 ? (
              <Link href='/favorites'>
                <a>
                  Favorites
                  <span className={styles.header_badge}>{numberOfHereos}</span>
                </a>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import { GET_HEROES } from '../../graphql/quieries/heroQueries';
// import { useQuery } from '@apollo/client';

// const { loading, error, data } = useQuery(GET_HEROES);
// const favorites = data?.heroes.filter((hero)=>hero.isFavorite === true)
// const numberOfHereos = favorites?.length;
