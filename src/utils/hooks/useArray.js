import { useState } from 'react';

export default function useArray(initialState) {
  const [array, setArray] = useState(initialState);

  function set(value) {
    setArray(value);
    return value;
  }
  function pushEnd(value) {
    const newArray = Array.from(array);
    newArray.push(value);
    setArray(newArray);
    return newArray;
  }
  function pushStart(value) {
    const newArray = Array.from(array);
    newArray.unshift(value);
    setArray(newArray);
    return newArray;
  }
  function insert(index, value) {
    const newArray = Array.from(array);
    newArray.splice(index, 0, value);
    setArray(newArray);
    return newArray;
  }
  function update(index, value) {
    const newArray = Array.from(array);
    newArray.splice(index, 1, value);
    setArray(newArray);
    return newArray;
  }
  function reorder(prevIndex, nextIndex) {
    const newArray = Array.from(array);
    const item = newArray[prevIndex];
    newArray.splice(prevIndex, 1);
    newArray.splice(nextIndex, 0, item);
    setArray(newArray);
    return newArray;
  }
  function filter(callback) {
    const newArray = Array.from(array).filter(callback);
    setArray(newArray);
    return newArray;
  }
  function sort(callback) {
    const newArray = Array.from(array).sort(callback);
    setArray(newArray);
    return newArray;
  }
  function reverse() {
    const newArray = Array.from(array);
    newArray.reverse();
    setArray(newArray);
    return newArray;
  }
  function remove(index, count) {
    const newArray = Array.from(array);
    newArray.splice(index, count || 1);
    setArray(newArray);
    return newArray;
  }
  function reset() {
    const newArray = Array.from(initialState);
    setArray(newArray);
    return newArray;
  }
  function clear() {
    setArray([]);
    return [];
  }

  return {
    array,
    set,
    pushStart,
    pushEnd,
    insert,
    update,
    reorder,
    filter,
    sort,
    reverse,
    remove,
    reset,
    clear,
  };
}
