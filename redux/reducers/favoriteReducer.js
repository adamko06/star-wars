import { swalWrapper } from '../../helpers/mainHelper.js';

const initialState = {
  favorites: [],
};

let favObtained;

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDHERO':
      favObtained = state.favorites?.find((fav) => fav.name === action.favorite.name);
      if (!favObtained) {
        swalWrapper('success', 'Hero Succesfully Added');
        return { favorites: state.favorites.concat(action.favorite) };
      }

      swalWrapper('error', 'This Hero Is Already Added');
      return { favorites: state.favorites };

    case 'REMOVEHERO':
      const filtered = state.favorites.filter((fav) => fav.name !== action.favorite.name);
      swalWrapper('success', 'Hero Succesfully Removed');
      return { favorites: filtered };

    case 'RESETHEROES':
      swalWrapper('success', 'Fvorites Succesfully Reseted');
      return { favorites: [] };

    case 'ADDHEROSIDE':
      const updatedFavorites = state.favorites.map((hero) => {
        return hero.heroIndex === action.favorite.heroIndex ? { ...hero, side: action.favorite.side } : { ...hero };
      });
      return { favorites: updatedFavorites };
    default:
      return state;
  }
};
export default favoriteReducer;
