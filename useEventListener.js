import { useEffect } from "https://cdn.skypack.dev/preact/hooks";

export const useEventListener = (event, listener) => {
  useEffect(() => {
    window.addEventListener(event, listener);
    return () => window.removeEventListener(event, listener);
  }, []);
};
