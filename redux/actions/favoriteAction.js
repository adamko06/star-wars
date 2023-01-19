export const addHero = (hero, heroIndex) => {
  return {
    type: 'ADDHERO',
    favorite: { ...hero, heroIndex },
  };
};

export const removeHero = (hero, heroIndex) => {
  return {
    type: 'REMOVEHERO',
    favorite: { ...hero, heroIndex },
  };
};

export const resetHeroes = () => {
  return {
    type: 'RESETHEROES',
  };
};
