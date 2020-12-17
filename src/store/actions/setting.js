import {CHANGE_THEME} from './actionTypes';

export const setDarkMode = (value) => {
  return {
    type: CHANGE_THEME,
    value,
  };
};
