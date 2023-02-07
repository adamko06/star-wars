export const addHero = (hero, heroIndex) => {
  return {
    type: 'ADDHERO',
    favorite: { ...hero, heroIndex, isFavorite: true },
  };
};

export const removeHero = (hero, heroIndex) => {
  return {
    type: 'REMOVEHERO',
    favorite: { ...hero, heroIndex, isFavorite: false },
  };
};

export const resetHeroes = () => {
  return {
    type: 'RESETHEROES',
    favorite: {},
  };
};

export const addHeroSide = (heroIndex, side) => {
  return {
    type: 'ADDHEROSIDE',
    favorite: { heroIndex, side },
  };
};
