const filterByMovieReducer = (state = 0, action) => {
  switch (action.type) {
    case 'CURRENTEPISODE':
      return state = action;
    default:
      return state;
  }
};
export default filterByMovieReducer;
