import { useReducer } from 'react';
import initialState from '../../context/initialState';
import reducer from '../../context/reducer';

export default function useStateReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}
