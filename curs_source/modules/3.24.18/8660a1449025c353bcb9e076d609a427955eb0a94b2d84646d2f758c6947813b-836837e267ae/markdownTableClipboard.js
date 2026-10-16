import { PPh } from "./markdownTableContextMenu.js";
import { E } from "./tslib.es6.js";
var Bdi, MPh, DPh, NPh;
export { Bdi, DPh, MPh, NPh };
var __wakaru_LPh_initialized = false;
export function LPh() {
if (__wakaru_LPh_initialized) return;
__wakaru_LPh_initialized = true;
"use strict";
E(), PPh(), Bdi = new WeakMap, MPh = new Set([
    "href",
    "src",
    "alt",
    "colspan",
    "rowspan",
    "align"
]), DPh = new Set([
    "colspan",
    "rowspan"
]), NPh = new Set([
    "left",
    "center",
    "right"
]);

}
