import { h, render } from "https://cdn.skypack.dev/preact";
import { useEffect } from "https://cdn.skypack.dev/preact/hooks";
import { useCapsLockDetection } from "./useCapsLockDetection";
import { useLockOnLeave } from "./useLockOnLeave";

const CapsLockIndicator = ({ capsLockIsOn }) => {
  return h(
    "div",
    {},
    "caps lock is ",
    h("strong", {}, capsLockIsOn ? "ON" : "OFF"),
  );
};

const UnlockPrompt = ({ unlock }) => {
  useEffect(() => {
    document.addEventListener("keypress", unlock);
    return () => document.removeEventListener("keypress", unlock);
  });

  return h("div", {}, "Press any key to continue");
};

const App = () => {
  const capsLockIsOn = useCapsLockDetection();
  const [isLocked, unlock] = useLockOnLeave();

  return isLocked
    ? h(UnlockPrompt, { unlock })
    : h(CapsLockIndicator, { capsLockIsOn });
};

render(h(App), document.getElementById("app"));
