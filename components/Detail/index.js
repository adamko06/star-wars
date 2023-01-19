import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import imgs from '../../config/imgs';

import { useSelector, useDispatch } from 'react-redux';
import { removeHero, addHero, resetHeroes } from '../../redux/actions/favoriteAction';

const Detail = () => {
  const router = useRouter();

  const [content, setContent] = useState(null);
  const heroIndex = parseInt(router.query.heroId);
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${router.query.heroId}`)
      .then((res) => res.json())
      .then((newContent) => {
        setContent(newContent);
      })
      .catch((err) => console.log(err));
  }, []);

  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      {content && (
        <div className='container'>
          <div className='box_detail_container'>
            <h1>{content.name}</h1>
            <div className='box_detail'>
              <div className='box_detail_item'>
                <img
                  src={
                    imgs[content.name] ||
                    'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
                  }
                />
                {/* <h3>{favorites}</h3> */}
                <button onClick={() => dispatch(addHero(content, heroIndex))}>Add To Favorites</button>
                <button onClick={() => dispatch(resetHeroes())}>Reset Favorites</button>
                <button onClick={() => dispatch(removeHero(content, heroIndex))}>Remove From Favorites</button>
              </div>
              <div className='box_detail_item'>
                <ul>
                  <li>Gender: {content.gender}</li>
                  <li>Height: {content.height}</li>
                  <li>Mass: {content.mass}</li>
                  <li>Hair: {content.hair_color}</li>
                  <li>Skin: {content.skin_color}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
