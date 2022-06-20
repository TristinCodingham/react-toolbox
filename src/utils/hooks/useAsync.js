import { useCallback, useEffect, useRef, useState } from 'react';

export default function useAsync(callback, deps) {
  const [value, setValue] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const asyncCallback = useCallback(() => {
    setIsLoading(true);
    setError(undefined);
    setValue(undefined);
    callbackRef
      .current()
      .then(setValue)
      .catch(setError)
      .finally(() => setIsLoading(false));
  }, [...deps, callbackRef]);

  useEffect(() => {
    asyncCallback();
  }, [asyncCallback]);

  return { value, isLoading, error };
}
