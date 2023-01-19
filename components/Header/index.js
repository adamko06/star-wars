import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { defaultPage } from '../../redux/actions/pageAction';

import styles from './index.module.scss';

const Header = (props) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const numberOfHereos = favorites.favorites.length;
  setTimeout(() => {
    console.log('This will run after 1 second!');
  }, 1000);

  return (
    <header>
      <div className='container'>
        <div className='nav'>
          <Link href='/'>
            <a className='logo' onClick={() => dispatch(defaultPage())}>
              <img alt='starwars' src='logo.svg' />
            </a>
          </Link>
          <div className='nav_item'>
            {props.lyrics ? (
              <Link href='/favorites'>
                {' '}
                {/* prozatím */}
                <a>Login</a>
              </Link>
            ) : (
              <Link href='/favorites'>
                <a>
                  Favorites
                  {numberOfHereos > 0 ? <span className={styles.header_badge}>{numberOfHereos}</span> : null}
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
