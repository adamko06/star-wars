import { loadChars } from '../../services/charService';

const prefix = 'CHAR';

export const onLoadChars = () => {
  return async (dispatch) => {
    const chars = await loadChars();
    dispatch({
      type: `${prefix}/CHARS_LOADED`,
      payload: chars,
    });
  };
};
