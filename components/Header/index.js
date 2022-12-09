import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='nav'>
          <Link href='/'>
            <a className='logo'>
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
