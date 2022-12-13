import { useState, useEffect } from 'react';
import Box from '../Box';
import FilterModal from '../FilterModal';
import Pagination from '../Pagination';
import { useSelector } from 'react-redux';

const Home = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  //Pagination
  const currentPage = useSelector((state) => state.pagination);
  // const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [maxPage, setMaxPage] = useState('');

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;

  useEffect(() => {
    setLoading(true);
    const fetchReq1 = fetch(`https://swapi.dev/api/people/?page=1`).then((res) => res.json());
    const fetchReq2 = fetch(`https://swapi.dev/api/people/?page=2`).then((res) => res.json());
    const fetchReq3 = fetch(`https://swapi.dev/api/people/?page=3`).then((res) => res.json());

    const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3]);

    allData.then((res) => {
      const allFetch = [];
      res.forEach((item) => {
        allFetch.push(...item.results);
      });
      setContent(allFetch);
      // setTimeout(() => {}, '6000');
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <main>
        <div className='container'>
          <div className='toolbar'>
            <div>
              <FilterModal />
            </div>
            <div>
              <input placeholder='Search by Name' type='text' onChange={handleChange} value={search} />
            </div>
          </div>
        </div>
        <div className='container'>
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className='box'>
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

          {/* {search == '' && (
            <div className='box_pagination'>
              <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 1}>
                ←
              </button>
              <div>{currentPage}</div>
              <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage >= 3}>
                →
              </button>
            </div>
          )} */}
          {search == '' && <Pagination />}
        </div>
      </main>
    </div>
  );
};

export default Home;
