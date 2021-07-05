import { useState } from "https://cdn.skypack.dev/preact/hooks";
import { useEventListener } from "./useEventListener";

export const useVisibilityDetection = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onVisibilityChange = () => {
    setIsVisible(!document.hidden);
  };

  useEventListener("visibilitychange", onVisibilityChange);

  return isVisible;
};
