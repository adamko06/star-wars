import { useState, useEffect } from 'react';
import imgs from '../../config/imgs';
import Link from 'next/link';

const Home = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people')
      .then((res) => res.json())
      .then((newContent) => {
        setContent(newContent);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(content?.results);

  return (
    <div>
      <main>
        <div className='container'>
          <div className='toolbar'>
            <form>
              <input placeholder='Filter' />
              <input placeholder='Search' />
            </form>
          </div>
        </div>
        <div className='container'>
          <div className='box'>
            {content &&
              content.results.map((item, index) => {
                return (
                  <div className='box_item' key={index}>
                    <Link href={`hero/${index + 1}`}>
                      <a>
                        <img
                          src={
                            imgs[item.name] ||
                            'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
                          }
                        />
                        <div className='overlay'>
                          <div className='text'>{item.name}</div>
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className='box'></div>
        </div>
      </main>
    </div>
  );
};

export default Home;
