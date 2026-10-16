import { Cx, qn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { $e, Doo } from "./web.js";
var i2h, qIo, KBn, zIo, KIo, dTe, r2h;
export { KBn, KIo, dTe, i2h, qIo, r2h, zIo };
var __wakaru_Vs_initialized = false;
export function Vs() {
if (__wakaru_Vs_initialized) return;
__wakaru_Vs_initialized = true;
"use strict";
x(), qn(), $e(), Doo.clear(), i2h = [
    "queryBuilder",
    "symbolsQuickAccessProvider",
    "editorQuickAccessProvider",
    "quickAccessController",
    "anythingQuickAccessProvider"
], qIo = Symbol("allowedServices"), KBn = Symbol("serviceCache"), zIo = Symbol("resolveService"), KIo = new WeakMap, dTe = Cx(), r2h = Cx();

}
