const filterByMovieReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CURRENT_EPISODE':
      return state = action;
    default:
      return state;
  }
};
export default filterByMovieReducer;
