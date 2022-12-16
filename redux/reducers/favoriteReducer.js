const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDHERO':
      return { favorites: state.favorites.concat(action.favorite) };
    case 'REMOVEHERO':
      return state - 1;
    case 'RESETHEROES':
      return 0;
    default:
      return state;
  }
};
export default favoriteReducer;
