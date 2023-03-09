import { swalWrapper } from '../../helpers/mainHelper.js';

const initialState = [];

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HERO':
      const addedHeroes = state.map((hero) => {
        if (hero._id === action.hero._id && hero.isFavorite === false) {
          swalWrapper('success', 'Hero Successfully Added');
          return { ...hero, isFavorite: true };
        }
        if (hero._id === action.hero._id && hero.isFavorite === true) {
          swalWrapper('error', 'This Hero Is Already Added');
          return { ...hero };
        } else {
          return { ...hero };
        }
      });
      return addedHeroes;

    case 'REMOVE_HERO':
      const removedHeroes = state.map((hero) => {
        if (hero._id === action.hero._id && hero.isFavorite === true) {
          swalWrapper('success', 'Hero Successfully Removed');
          return { ...hero, isFavorite: false, side: "noSide" };
        }
        if (hero._id === action.hero._id && hero.isFavorite === false) {
          swalWrapper('error', 'This Hero Is Already Removed');
          return { ...hero };
        } else {
          return { ...hero };
        }
      });
      return removedHeroes;

    case 'RESET_HEROES':
      const resetHeroes = state.map((hero) => {
        return { ...hero, isFavorite: false, side: 'noSide' };
      });
      swalWrapper('success', 'Favorites Successfully Reseted');
      return resetHeroes;

    case 'ADD_HERO_SIDE':
      const updatedHeroes = state.map((hero) => {
        return hero._id === action.hero._id ? { ...hero, side: action.hero.side } : { ...hero };
      });
      return updatedHeroes;

    case 'SET_HEROES':
      const reducedFavorites = action.heroes?.map(({ _id, name, isFavorite, side, films }) => ({
        _id,
        name,
        isFavorite,
        side,
        films,
      }));
      return reducedFavorites;

    default:
      return state;
  }
};
export default heroesReducer;
