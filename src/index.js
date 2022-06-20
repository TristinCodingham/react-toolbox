import React from 'react';
import * as ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import StateProvider from './context/StateProvider';
import reducer from './context/reducer';
import initialState from './context/initialState';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
