import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { defaultPage } from '../../redux/actions/pageAction';
import { currentFilterByMovie } from '../../redux/actions/filterByMovieAction';

import { useEffect, useState } from 'react';
import React from 'react';

import styles from './index.module.scss';

const Header = React.forwardRef(({ _ }, ref) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.heroes);

  const [numberOfHereos, setNumberOfHereos] = useState();

  useEffect(() => {
    setNumberOfHereos(favorites.filter((hero) => hero.isFavorite === true).length);
  }, [favorites]);

  return (
    <header ref={ref}>
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
            {numberOfHereos > 0 && (
              <Link href='/favorites'>
                <a>
                  Favorites
                  <span className={styles.header_badge}>{numberOfHereos}</span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
