import { useEffect, useRef, useState } from 'react';

const EVENTS = {};
export default function useEventListener(type, callback, element = window) {
  const callbackRef = useRef(callback);
  const [value, setValue] = useState(0);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e) => setValue(callbackRef.current(e));
    element.addEventListener(type, handler);
    return () => {
      element.removeEventListener(type, handler);
      setValue(undefined);
    };
  }, [type, element]);

  return { value };
}
