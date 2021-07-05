import { useEffect } from "https://cdn.skypack.dev/preact/hooks";

export const useEventListener = (event, listener) => {
  useEffect(() => {
    document.addEventListener(event, listener);
    return () => document.removeEventListener(event, listener);
  }, []);
};
