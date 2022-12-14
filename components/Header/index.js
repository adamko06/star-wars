import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { defaultPage } from '../../redux/actions/pageAction';

const Header = () => {
  const dispatch = useDispatch();
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
            <Link href='/favorites'>
              <a>Favorites</a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
