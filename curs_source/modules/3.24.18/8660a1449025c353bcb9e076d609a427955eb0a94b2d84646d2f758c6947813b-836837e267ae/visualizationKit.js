import { E } from "./tslib.es6.js";
import { T4f, w4f } from "./visualizationKitCharts.js";
import { _4f, b4f } from "./visualizationKitComponents.js";
import { g4f, m4f } from "./visualizationKitCore.js";
import { f4f, v4f } from "./visualizationKitForms.js";
import { k4f, y4f } from "./visualizationKitRuntime.js";
var E4f, I4f;
export { E4f, I4f };
var __wakaru_Zxw_initialized = false;
export function Zxw() {
if (__wakaru_Zxw_initialized) return;
__wakaru_Zxw_initialized = true;
"use strict";
E(), g4f(), v4f(), b4f(), k4f(), T4f(), g4f(), v4f(), b4f(), k4f(), T4f(), E4f = `${m4f}
${f4f}
${_4f}
${y4f}
${w4f}`, I4f = `
(() => {
  const isRange = (el) =>
    el instanceof HTMLInputElement &&
    el.type === "range" &&
    el.classList.contains("vis-form-range");
  const sync = (el) => {
    if (!isRange(el)) {
      return;
    }
    const min = Number(el.min === "" ? 0 : el.min);
    const max = Number(el.max === "" ? 100 : el.max);
    const value = Number(el.value);
    const pct = max === min ? 0 : ((value - min) / (max - min)) * 100;
    el.style.setProperty("--value", pct + "%");
  };
  const syncAll = (root) => {
    root.querySelectorAll("input.vis-form-range[type='range']").forEach(sync);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => syncAll(document), {
      once: true,
    });
  } else {
    syncAll(document);
  }
  document.addEventListener(
    "input",
    (event) => {
      sync(event.target);
    },
    true
  );
  document.addEventListener(
    "change",
    (event) => {
      sync(event.target);
    },
    true
  );
})();
`.trim();

}
