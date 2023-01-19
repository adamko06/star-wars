import Swal from 'sweetalert2';
import { swalWrapper } from '../../helpers/mainHelper.js';

const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDHERO':
      const favObtained = state.favorites.find((fav) => fav.name === action.favorite.name);
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
    // return state - 1;

    case 'RESETHEROES':
      // alert('reset');
      // return [];
      // /*reset ?
      const filtered2 = state.favorites.filter((fav) => {
        console.log('favoriiiiit: ', fav);
        console.log('favoriiiiit name: ', fav.name);
        console.log('favoriiiiit action.favorite: ', action.favorite.name);
        console.log('favoriiiiit action: ', action);
        fav.name !== action.favorite.name;
      });
      console.log('filtered: sdijnfsjkdnfisdnf', filtered2);
      return { favorites: filtered2 };
    // */
    default:
      return state;
  }
};
export default favoriteReducer;
