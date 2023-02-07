import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import imgs from '../../config/imgs';

import { useSelector, useDispatch } from 'react-redux';
import { removeHero, addHero } from '../../redux/actions/favoriteAction';

import SideChoose from '../SideChoose';
import Button from 'react-bootstrap/Button';

import styles from './index.module.scss';

const Detail = () => {
  const router = useRouter();

  const [content, setContent] = useState(null);
  const heroIndex = parseInt(router.query.heroId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://swapi.dev/api/people/${router.query.heroId}`);
        const newContent = await res.json();
        setContent(newContent);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.favorites?.some((hero) => hero.heroIndex === heroIndex);

  const actualHero = favorites.favorites?.find((hero) => hero.heroIndex === heroIndex);
  const actualHeroSide = !actualHero?.side ? 'noSide' : actualHero.side;

  const dispatch = useDispatch();

  return (
    <div>
      {content && (
        <div className='container'>
          <div className={styles.hero}>
            <div className={styles.hero_detail}>
              <div className={styles.hero_detail_item}>
                <img
                  className={`${
                    actualHeroSide === 'light' ? styles.hero_light : actualHeroSide === 'dark' ? styles.hero_dark : ''
                  }`}
                  src={
                    imgs[content.name] ||
                    'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
                  }
                />

                <div className={'mt-5 text-center'}>
                  {!isFavorite ? (
                    <Button variant='primary' onClick={() => dispatch(addHero(content, heroIndex))}>
                      Add to Favorites
                    </Button>
                  ) : (
                    <Button variant='primary' onClick={() => dispatch(removeHero(content, heroIndex))}>
                      Remove from Favorites
                    </Button>
                  )}
                  {isFavorite && <SideChoose content={content} heroIndex={heroIndex} actualHeroSide={actualHeroSide} />}
                </div>
              </div>
              <div className={styles.hero_detail_item}>
                <h1>{content.name}</h1>
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
