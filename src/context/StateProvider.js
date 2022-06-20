import React, { useReducer, useContext, createContext } from 'react';
import initialState from './initialState';

const AppContext = createContext(initialState);

export default function StateProvider({reducer, initialState, children}) {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AppContext.Provider>
  )
}

export const useStateValue = () => useContext(AppContext);
