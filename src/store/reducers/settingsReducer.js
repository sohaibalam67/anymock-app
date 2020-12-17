import {CHANGE_THEME} from '../actions/actionTypes';

const INITIAL_STATE = {
  isDarkModeActive: true,
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        isDarkModeActive: !!action.value,
      };

    default:
      return state;
  }
};

export default settingsReducer;
