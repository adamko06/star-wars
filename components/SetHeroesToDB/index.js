import { ADD_HERO } from '../../graphql/mutations/heroMutations';

import { useMutation } from '@apollo/client';

import { useState } from 'react';

import { loadChars } from '../../services/charService';

const TestGetHeroes = () => {
  const [content, setContent] = useState([]);

  const [addHero] = useMutation(ADD_HERO);
  const handleClick = () => {
    // content.forEach((hero) => {
    //   addHero({
    //     variables: {
    //       name: hero.name,
    //       side: hero.side,
    //       gender: hero.gender,
    //       height: hero.height,
    //       mass: hero.mass,
    //       hair_color: hero.hair_color,
    //       skin_color: hero.skin_color,
    //       films: hero.films,
    //       isFavorite: false,
    //     },
    //   });
    // });
    (async () => {
      const chars = await loadChars();
      setContent(chars);
    })();
    console.log(content);
  };

  return <button onClick={handleClick}>Add Heroes</button>;
};

export default TestGetHeroes;
