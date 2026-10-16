import { dt, qi } from "./range.js";
import { x } from "./tslib.es6.js";
var Dv;
export { Dv };
var __wakaru_hR_initialized = false;
export function hR() {
if (__wakaru_hR_initialized) return;
__wakaru_hR_initialized = true;
"use strict";
x(), qi(), Dv = class {
    static insert(e, t) {
        return {
            range: new dt(e.lineNumber, e.column, e.lineNumber, e.column),
            text: t,
            forceMoveMarkers: !0
        };
    }
    static delete(e) {
        return {
            range: e,
            text: null
        };
    }
    static replace(e, t) {
        return {
            range: e,
            text: t
        };
    }
    static replaceMove(e, t) {
        return {
            range: e,
            text: t,
            forceMoveMarkers: !0
        };
    }
};

}
