import { x } from "./tslib.es6.js";
import { OWh, pb_ } from "./visualizationD3Runtime.gen.js";
import { XWh, YWh, mb_ } from "./visualizationKit.js";
import { zWh } from "./visualizationKitCharts.js";
import { VWh } from "./visualizationKitRuntime.js";
var QWh;
export { QWh };
var __wakaru_gb__initialized = false;
export function gb_() {
if (__wakaru_gb__initialized) return;
__wakaru_gb__initialized = true;
"use strict";
x(), pb_(), mb_(), QWh = {
    d3Js: OWh,
    kitCss: YWh,
    kitChartsJs: zWh,
    kitRuntimeJs: VWh,
    formsRuntimeJs: XWh
};

}
