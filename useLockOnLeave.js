import { useEffect, useState } from "https://cdn.skypack.dev/preact/hooks";
import { useVisibilityDetection } from "./useVisibilityDetection";

export const useLockOnLeave = () => {
  const [isLocked, setIsLocked] = useState(false);
  const isVisible = useVisibilityDetection();

  useEffect(() => {
    if (!isVisible) {
      setIsLocked(true);
    }
  }, [isVisible]);

  const unlock = () => setIsLocked(false);

  return [isLocked, unlock];
};
