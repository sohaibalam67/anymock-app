import React from 'react';
import Editor from './pages/Editor';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Editor />
    </Provider>
  );
}

export default App;
