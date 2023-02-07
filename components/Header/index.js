import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { defaultPage } from '../../redux/actions/pageAction';

import styles from './index.module.scss';

const Header = (props) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const numberOfHereos = favorites.favorites?.length;

  return (
    <header>
      <div className='container'>
        <div className={styles.header_nav}>
          <Link href='/'>
            <a className={styles.header_logo} onClick={() => dispatch(defaultPage())}>
              <img alt='starwars' src='logo.svg' />
            </a>
          </Link>
          <div className={styles.header_item}>
            {props.lyrics ? (
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
