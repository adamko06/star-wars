const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return state + 1;
    case 'PREVIOUS_PAGE':
      return state - 1;
    case 'DEFAULT_PAGE':
      return 1;
    default:
      return state;
  }
};
export default pageReducer;
