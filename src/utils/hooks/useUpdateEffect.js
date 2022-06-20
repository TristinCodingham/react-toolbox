import { useEffect, useRef } from 'react';

export default function useUpdateEffect(callback, deps) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    return callback();
  }, [...deps, callback]);
}
