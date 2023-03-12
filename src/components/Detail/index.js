import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import images from '../../config/imagesConfig';
import heroDetail from '../../config/heroDetailConfig';

import { useSelector, useDispatch } from 'react-redux';
import { removeHero, addHero } from '../../redux/actions/heroesAction';

import { GET_HERO } from '../../graphql/quieries/heroQueries';
import { ADD_FAVORITE, REMOVE_FAVORITE } from '../../graphql/mutations/heroMutations';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import LazyLoad from 'react-lazy-load';

import SideChoose from '../SideChoose';

import { FiUserPlus, FiUserMinus } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';
import styles from './index.module.scss';

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

  const films = [1, 2, 3, 4, 5];
  const rndChoose = films[Math.floor(Math.random() * films.length)];
  useEffect(() => {
    console.log('výběrr:', rndChoose);
  }, []);

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

  const episodesOrder = [4, 5, 6, 1, 2, 3];

  function formatEpisodeName(url) {
    const episodeNumber = url?.replace('https://swapi.dev/api/films/', '').replace('/', '');
    let episodeName;
    switch (episodeNumber) {
      case '4':
        episodeName = 'Episode I - The Phantom Menace';
        break;
      case '5':
        episodeName = 'Episode II - Attack of the Clones';
        break;
      case '6':
        episodeName = 'Episode III - Revenge of the Sith';
        break;
      case '1':
        episodeName = 'Episode IV - A New Hope';
        break;
      case '2':
        episodeName = 'Episode V - The Empire Strikes Back';
        break;
      case '3':
        episodeName = 'Episode VI - Return of the Jedi';
        break;
    }
    return episodeName;
  }

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
                      images[content.name] ||
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
                  {heroDetail.map(({ key, value, unit }, index) => (
                    <li key={index}>
                      <b>{key}: </b>
                      {content[value]} {unit}
                    </li>
                  ))}
                  <br />
                  <b>Films in which {content.name} has appeared:</b>
                  {episodesOrder.map((episodeIndex) => (
                    <li key={episodeIndex}>
                      {formatEpisodeName(content.films.find((film) => film === `https://swapi.dev/api/films/${episodeIndex}/`))}
                    </li>
                  ))}
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
