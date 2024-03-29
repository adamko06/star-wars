import React from 'react';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { goDefaultPage } from '../../redux/actions/pageAction';
import { setCurrentFilterByMovie } from '../../redux/actions/filterByMovieAction';

import Link from 'next/link';

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
                dispatch(goDefaultPage());
                dispatch(setCurrentFilterByMovie());
              }}
            >
              <img alt='starwars' src='/logo.png' />
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
