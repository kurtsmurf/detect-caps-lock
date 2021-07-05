import { useState } from "https://cdn.skypack.dev/preact/hooks";
import { useEventListener } from "./useEventListener";

export const useCapsLockDetection = () => {
  const [capsLockIsOn, setCapsLockIsOn] = useState(false);

  const onKeyDown = (e) => {
    const isCapsLockModifier = e.getModifierState("CapsLock");
    const isCapsLockKey = e.key === "CapsLock";

    setCapsLockIsOn(isCapsLockModifier !== isCapsLockKey);
  };

  useEventListener("keydown", onKeyDown);

  return capsLockIsOn;
};
