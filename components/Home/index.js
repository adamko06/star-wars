import { useState, useEffect } from 'react';
import Box from '../Box';
import FilterModal from '../FilterModal';
import Pagination from '../Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { onLoadChars } from '../../redux/actions/charAction';

import styles from './index.module.scss';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  //Content
  const content = useSelector((state) => state.chars);
  const dispatch = useDispatch();

  //Pagination
  const currentPage = useSelector((state) => state.pagination);
  const [postPerPage, setPostPerPage] = useState(10);

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setLoading(true);
    dispatch(onLoadChars());
    setLoading(false);
  }, []);

  return (
    <div>
      <main>
        <div className='container'>
          <div className={styles.home_toolbar}>
            <h1 className='m-auto'>Choose Your Favorite Heroes</h1>
            {/* <div>
              <FilterModal />
            </div> */}
            <div>
              <input placeholder='Search by Name' type='text' onChange={handleChange} value={search} />
            </div>
          </div>
        </div>
        <div className='container'>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className={styles.home}>
              {content &&
                content.map((item, index) => {
                  if (search == '' && index >= indexOfFirstPost && index < indexOfLastPost) {
                    return <Box hero={item} index={index} key={index} />;
                  } else if (search !== '' && item.name.toLowerCase().includes(search.toLowerCase().trim())) {
                    return <Box hero={item} index={index} key={index} />;
                  }
                })}
            </div>
          )}
          {search == '' && <Pagination />}
        </div>
      </main>
    </div>
  );
};

export default Home;
