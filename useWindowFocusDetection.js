import { useState } from "https://cdn.skypack.dev/preact/hooks";
import { useEventListener } from "./useEventListener.js";

export const useWindowFocusDetection = () => {
  const [hasFocus, setHasFocus] = useState(true);

  useEventListener("focus", () => { setHasFocus(true) });
  useEventListener("blur", () => { setHasFocus(false) });

  return hasFocus;
};
