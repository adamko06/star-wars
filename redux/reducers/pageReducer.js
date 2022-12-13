const pageReducer = (state = 1, action) => {
  console.log(state);

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};
export default pageReducer;
