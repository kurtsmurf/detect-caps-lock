import { useState } from "https://cdn.skypack.dev/preact/hooks";
import { useWindowEventListener } from "./useEventListener.js";

export const useCapsLockDetection = () => {
  const [capsLockIsOn, setCapsLockIsOn] = useState(false);

  const onKeyDown = (e) => {
    const isCapsLockModifier = e.getModifierState("CapsLock");
    const isCapsLockKey = e.key === "CapsLock";

    setCapsLockIsOn(isCapsLockModifier !== isCapsLockKey);
  };

  useWindowEventListener("keydown", onKeyDown);

  return capsLockIsOn;
};
