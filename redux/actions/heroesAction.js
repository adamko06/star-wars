export const addHero = ({_id, name}) => {
  return {
    type: 'ADDHERO',
    hero: { _id, name, isFavorite: true, side: "noSide" },
  };
};

export const removeHero = (_id) => {
  return {
    type: 'REMOVEHERO',
    hero: { _id, isFavorite: false, side: "noSide" },
  };
};

export const resetHeroes = () => {
  return {
    type: 'RESETHEROES',
  };
};

export const addHeroSide = (_id, side) => {
  return {
    type: 'ADDHEROSIDE',
    hero: { _id, side },
  };
};

export const setHeroes = (heroes) => {
  return {
    type: 'SETHEROES',
    heroes: { heroes },
  };
};
