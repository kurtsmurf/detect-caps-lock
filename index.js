import { h, render } from "https://cdn.skypack.dev/preact";
import { useCapsLockDetection } from "./useCapsLockDetection.js";
import { useWindowEventListener } from "./useEventListener.js";
import { useLockOnLeave } from "./useLockOnLeave.js";

const CapsLockIndicator = ({ capsLockIsOn }) => {
  return h(
    "div",
    {},
    "caps lock is ",
    h("strong", {}, capsLockIsOn ? "ON" : "OFF"),
  );
};

const UnlockPrompt = ({ unlock }) => {
  useWindowEventListener("keypress", unlock)

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
