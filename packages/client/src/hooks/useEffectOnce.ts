import { useEffect, useRef } from 'react';

export const useEffectOnce = (cb: VoidFunction) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      cb();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
