import { swalWrapper } from '../../helpers/mainHelper.js';

const initialState = [];

let favObtained;

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDHERO':

      const addedHeroes = state.map((hero) => {
        if (hero.id === action.hero.id && hero.isFavorite === false) {
          swalWrapper('success', 'Hero Successfully Added');
          return { ...hero, isFavorite: true };
        }
        if (hero.id === action.hero.id && hero.isFavorite === true) {
          swalWrapper('error', 'This Hero Is Already Added');
          return { ...hero };
        } else {
          return { ...hero };
        }
      });
      return addedHeroes;

    case 'REMOVEHERO':
      const removedHeroes = state.map((hero) => {
        if (hero.id === action.hero.id && hero.isFavorite === true) {
          swalWrapper('success', 'Hero Successfully Removed');
          return { ...hero, isFavorite: false, side: "noSide" };
        }
        if (hero.id === action.hero.id && hero.isFavorite === false) {
          swalWrapper('error', 'This Hero Is Already Removed');
          return { ...hero };
        } else {
          return { ...hero };
        }
      });
      return removedHeroes;

    case 'RESETHEROES':
      const resetHeroes = state.map((hero) => {
        return { ...hero, isFavorite: false, side: 'noSide' };
      });
      swalWrapper('success', 'Favorites Successfully Reseted');
      return resetHeroes;

    case 'ADDHEROSIDE':
      const updatedFavorites = state.map((hero) => {
        return hero.id === action.hero.id ? { ...hero, side: action.hero.side } : { ...hero };
      });
      return updatedFavorites;

    case 'SETHEROES':
      const reducedFavorites = action.heroes?.map(({ id, name, isFavorite, side, films }) => ({
        id,
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
