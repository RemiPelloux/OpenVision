import { x } from "./tslib.es6.js";
import { KWh, qWh } from "./visualizationKitCharts.js";
import { HWh, WWh } from "./visualizationKitComponents.js";
import { BWh, FWh } from "./visualizationKitCore.js";
import { $Wh, UWh } from "./visualizationKitForms.js";
import { GWh, jWh } from "./visualizationKitRuntime.js";
var YWh, XWh;
export { XWh, YWh };
var __wakaru_mb__initialized = false;
export function mb_() {
if (__wakaru_mb__initialized) return;
__wakaru_mb__initialized = true;
"use strict";
x(), BWh(), $Wh(), WWh(), jWh(), KWh(), BWh(), $Wh(), WWh(), jWh(), KWh(), YWh = `${FWh}
${UWh}
${HWh}
${GWh}
${qWh}`, XWh = `
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
