export const addHero = ({_id, name}) => {
  return {
    type: 'ADD_HERO',
    hero: { _id, name, isFavorite: true, side: "noSide" },
  };
};

export const removeHero = (_id) => {
  return {
    type: 'REMOVE_HERO',
    hero: { _id, isFavorite: false, side: "noSide" },
  };
};

export const resetHeroes = () => {
  return {
    type: 'RESET_HEROES',
  };
};

export const addHeroSide = (_id, side) => {
  return {
    type: 'ADD_HERO_SIDE',
    hero: { _id, side },
  };
};

export const setHeroes = (heroes) => {
  return {
    type: 'SET_HEROES',
    heroes,
  };
};
