export const addHero = ({id, name}) => {
  return {
    type: 'ADDHERO',
    hero: { id, name, isFavorite: true, side: "noSide" },
  };
};

export const removeHero = (id) => {
  return {
    type: 'REMOVEHERO',
    hero: { id, isFavorite: false, side: "noSide" },
  };
};

export const resetHeroes = () => {
  return {
    type: 'RESETHEROES',
  };
};

export const addHeroSide = (id, side) => {
  return {
    type: 'ADDHEROSIDE',
    hero: { id, side },
  };
};

export const setHeroes = (heroes) => {
  return {
    type: 'SETHEROES',
    heroes: { heroes },
  };
};
