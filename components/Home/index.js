import { useState, useEffect } from 'react';
import imgs from '../../config/imgs';
import Link from 'next/link';
import Box from '../Box';

const Home = () => {
  const [content, setContent] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((res) => res.json())
      .then((newContent) => {
        setContent(newContent);
      })
      .catch((err) => console.log(err));
  }, [page]);

  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  console.log(page);
  console.log(page <= 1);
  return (
    <div>
      <main>
        <div className='container'>
          <div className='toolbar'>
            <form>
              <input placeholder='Filter' />
              <input placeholder='Search by Name' type='text' onChange={handleChange} value={search} />
            </form>
          </div>
        </div>
        <div className='container'>
          <div className='box'>
            {content &&
              content.results.map((item, index) => {
                if (search == '') {
                  return <Box hero={item} index={index} key={index} page={page} />;
                } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                  return <Box hero={item} index={index} key={index} page={page} />;
                }
              })}
          </div>
          <div className='box_pagination'>
            <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
              ←
            </button>
            <div>{page}</div>
            <button onClick={() => setPage(page + 1)} disabled={page >= 9}>
              →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
