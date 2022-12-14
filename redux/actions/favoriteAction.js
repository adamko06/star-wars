export const addHero = (hero, heroIndex) => {
  return {
    type: 'ADDHERO',
    favorite: { ...hero, heroIndex },
  };
};

export const removeHero = () => {
  return {
    type: 'REMOVEHERO',
  };
};

export const resetHeroes = () => {
  return {
    type: 'RESETHEROES',
  };
};
