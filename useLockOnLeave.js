import { useEffect, useState } from "https://cdn.skypack.dev/preact/hooks";
import { useWindowFocusDetection } from "./useWindowFocusDetection.js";

export const useLockOnLeave = () => {
  const [isLocked, setIsLocked] = useState(false);
  const hasFocus = useWindowFocusDetection()

  useEffect(() => {
    if (!hasFocus) {
      setIsLocked(true);
    }
  }, [hasFocus]);

  const unlock = () => setIsLocked(false);

  return [isLocked, unlock];
};
