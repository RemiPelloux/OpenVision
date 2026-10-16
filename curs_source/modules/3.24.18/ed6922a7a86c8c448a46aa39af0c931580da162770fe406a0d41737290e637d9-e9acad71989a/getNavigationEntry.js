import { x } from "./tslib.es6.js";
import { by, fK } from "./types.js";
var WLt;
export { WLt };
var __wakaru_ypi_initialized = false;
export function ypi() {
if (__wakaru_ypi_initialized) return;
__wakaru_ypi_initialized = true;
"use strict";
x(), fK(), WLt = (e = !0)=>{
    const t = by.performance?.getEntriesByType?.("navigation")[0];
    if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t;
};

}
