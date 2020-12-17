import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import settingsReducer from './reducers/settingsReducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunkMiddleware));
};

export default configureStore;
