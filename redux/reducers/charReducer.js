const initialState = [];
const prefix = 'CHAR';

const charReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${prefix}/CHARS_LOADED`:
      return action.payload;
    default:
      return state;
  }
};
export default charReducer;
