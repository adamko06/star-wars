import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import imgs from '../../config/imgs';

import { useSelector, useDispatch } from 'react-redux';
import { removeHero, addHero } from '../../redux/actions/heroesAction';

import { GET_HERO } from '../../graphql/quieries/heroQueries';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../graphql/mutations/heroMutations';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import SideChoose from '../SideChoose';
import Button from 'react-bootstrap/Button';

import LazyLoad from 'react-lazy-load';

import styles from './index.module.scss';
import { FiUserPlus, FiUserMinus } from 'react-icons/fi';

const Detail = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const heroId = router.query.heroId;

  // GraphQL
  const { loading, error, data } = useQuery(GET_HERO, { variables: { _id: heroId }, skip: !heroId });

  let content = data?.hero;

  const reduxFavorites = useSelector((state) => state.heroes);

  const [favorites, setFavorites] = useState();

  const actualHero = favorites?.find((hero) => hero._id === heroId);
  const actualHeroSide = actualHero?.side;
  const isFavorite = actualHero?.isFavorite;

  useEffect(() => {
    setFavorites(reduxFavorites);
  }, [reduxFavorites]);

  const [addFavorite] = useMutation(ADD_FAVORITE, {
    variables: { _id: heroId, isFavorite: true },
    onCompleted: (data) => {
      dispatch(addHero(data.addFavorite));
    },
  });

  const [removeFavorite] = useMutation(REMOVE_FAVORITE, {
    variables: { _id: heroId, isFavorite: false },
    onCompleted: (data) => {
      dispatch(removeHero(data.removeFavorite._id));
    },
  });

  const sortOrder = [4, 5, 6, 1, 2, 3];

  return (
    <>
      {content && (
        <div className='container'>
          <div className={styles.hero}>
            <div className={styles.hero_detail}>
              <div className={styles.hero_detail_item}>
                <LazyLoad once>
                  <img
                    className={`${
                      actualHeroSide === 'light' ? styles.hero_light : actualHeroSide === 'dark' ? styles.hero_dark : ''
                    }`}
                    src={
                      imgs[content.name] ||
                      'https://www.edna.cz/runtime/userfiles/series/star-wars/Yoda-a2-b2b1b0b6e777597f84876486a22de50a.jpg'
                    }
                  />
                </LazyLoad>
                <div className={'mt-5 text-center'}>
                  {!isFavorite ? (
                    <Button variant='primary' onClick={() => addFavorite()}>
                      <FiUserPlus className='icon' /> Add to Favorites
                    </Button>
                  ) : (
                    <Button variant='primary' onClick={() => removeFavorite()}>
                      <FiUserMinus className='icon' /> Remove from Favorites
                    </Button>
                  )}
                  {isFavorite && <SideChoose content={content} heroId={heroId} actualHeroSide={actualHeroSide} />}
                </div>
              </div>
              <div className={styles.hero_detail_item}>
                <h2>{content.name}</h2>
                <ul>
                  <li>
                    <b>Gender:</b> {content.gender}
                  </li>
                  <li>
                    <b>Height:</b> {content.height} cm
                  </li>
                  <li>
                    <b>Mass:</b> {content.mass} kg
                  </li>
                  <li>
                    <b>Hair:</b> {content.hair_color}
                  </li>
                  <li>
                    <b>Skin:</b> {content.skin_color}
                  </li>
                  <br />
                  <b>Films in which {content.name} has appeared:</b>
                  {sortOrder.map((episodeIndex) => {
                    const url = `https://swapi.dev/api/films/${episodeIndex}/`;
                    const episodeNumber = content.films
                      .find((film) => film === url)
                      ?.replace('https://swapi.dev/api/films/', '')
                      .replace('/', '');
                    let episode;
                    switch (episodeNumber) {
                      case '4':
                        episode = 'Episode I - The Phantom Menace';
                        break;
                      case '5':
                        episode = 'Episode II - Attack of the Clones';
                        break;
                      case '6':
                        episode = 'Episode III - Revenge of the Sith';
                        break;
                      case '1':
                        episode = 'Episode IV - A New Hope';
                        break;
                      case '2':
                        episode = 'Episode V - The Empire Strikes Back';
                        break;
                      case '3':
                        episode = 'Episode VI - Return of the Jedi';
                        break;
                    }
                    return <li key={episodeIndex}>{episode}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
