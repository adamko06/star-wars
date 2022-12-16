const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case 'NEXTPAGE':
      return state + 1;
    case 'PREVIOUSPAGE':
      return state - 1;
    case 'DEFAULTPAGE':
      return 1;
    default:
      return state;
  }
};
export default pageReducer;
