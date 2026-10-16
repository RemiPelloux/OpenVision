import { Oyc, u__ } from "./collapsed-apps-rail-rows.js";
import { Mt } from "./index_197.js";
import { MTe } from "./keepAliveLayoutMeasure.js";
import { E } from "./tslib.es6.js";
import { createContext as mUC } from "./react-runtime/react/esm-index-production.js";
var _6s;
export { _6s };
var __wakaru_jyc_initialized = false;
export function jyc() {
if (__wakaru_jyc_initialized) return;
__wakaru_jyc_initialized = true;
"use strict";
E(), Mt(), MTe(), u__(), _6s = mUC({
    canExpand: !1,
    compactHidden: !1,
    iconOnly: !1,
    minimized: !1,
    onMinimizedChange: ()=>{},
    setCompactHidden: ()=>{},
    sidecarLayout: Oyc
});

}
