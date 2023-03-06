import { useState, useEffect, useRef } from 'react';
import Box from '../Box';
import FilterDropdown from '../FilterDropdown';
import Pagination from '../Pagination';
import Sort from '../Sort';
import { useSelector, useDispatch } from 'react-redux';
import { currentFilterByMovie } from '../../redux/actions/filterByMovieAction';

import { GET_HEROES } from '../../graphql/quieries/heroQueries';
import { useQuery } from '@apollo/client';

import styles from './index.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  // GraphQL
  const { loading, error } = useQuery(GET_HEROES);

  // Content
  const [heroes, setHeroes] = useState([]);
  const [data, setData] = useState('');
  const reduxHeroes = useSelector((state) => state.heroes);

  // Filter By Movie
  const currentEpisode = useSelector((state) => state.filterByMovie);
  const filterByMovie = (movieIndex) => {
    if (movieIndex === undefined) {
      return setHeroes(data);
    }
    const filteredContent = data?.filter((item) => {
      if (movieIndex === 0 || undefined) return item;
      return item.films.includes(`https://swapi.dev/api/films/${movieIndex}/`);
    });
    setHeroes(filteredContent?.map((hero) => ({ name: hero.name, _id: hero._id, isFavorite: hero.isFavorite, side: hero.side })));
    dispatch(currentFilterByMovie(movieIndex));
  };

  // Sort By Name
  const [sortDirection, setSortDirection] = useState(null);
  const handleSort = (direction) => {
    setSortDirection(direction);
  };

  // Search
  const [search, setSearch] = useState('');
  const searchRef = useRef(null);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  function handleClick(event) {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearch('');
    }
  }

  //Pagination
  const currentPage = useSelector((state) => state.pagination);
  const [postPerPage, setPostPerPage] = useState(10);
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const countPage = Math.ceil(heroes?.length / postPerPage);

  useEffect(() => {
    setData(reduxHeroes);
    if (!loading && data) {
      filterByMovie(currentEpisode.episode);
      if (sortDirection === 'up') {
        setHeroes([...heroes].sort((a, b) => a.name.localeCompare(b.name)));
      } else if (sortDirection === 'down') {
        setHeroes([...heroes].sort((a, b) => b.name.localeCompare(a.name)));
      }
    }
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [loading, data, currentEpisode.episode, reduxHeroes, sortDirection]);

  return (
    <>
      {
        <div className='container'>
          <div className={styles.home_toolbar} ref={searchRef}>
            <h1>Choose Your Favorite Heroes</h1>
            <div className={styles.home_sorting}>
              <Sort handleSort={handleSort} />
            </div>
            <div>
              <FilterDropdown handleClick={filterByMovie} actualSelection={currentEpisode.episode} />
            </div>
            <div>
              <input placeholder='Search by Name' type='text' onChange={handleChange} value={search} />
            </div>
          </div>
          <div className={styles.home}>
            {loading && (
              <div className='spinner-border mt-5' role='status'>
                <span className='sr-only'></span>
              </div>
            )}
            {error && <p>Something Went Wrong</p>}
            {!loading &&
              !error &&
              heroes &&
              heroes.map((hero, index) => {
                if (search === '' && index >= indexOfFirstPost && index < indexOfLastPost) {
                  return <Box heroes={heroes} hero={hero} key={index} keyIndex={index} />;
                } else if (search !== '' && hero.name.toLowerCase().includes(search.toLowerCase().trim())) {
                  return <Box heroes={heroes} hero={hero} key={index} keyIndex={index} />;
                }
              })}
          </div>
          {search == '' && <Pagination countPage={countPage} />}
        </div>
      }
    </>
  );
};

export default Home;
