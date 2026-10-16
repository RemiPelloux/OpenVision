import { Qs, qt } from "./range.js";
import { E } from "./tslib.es6.js";
var Tk;
export { Tk };
var __wakaru_Oj_initialized = false;
export function Oj() {
if (__wakaru_Oj_initialized) return;
__wakaru_Oj_initialized = true;
"use strict";
E(), Qs(), Tk = class {
    static insert(t, e) {
        return {
            range: new qt(t.lineNumber, t.column, t.lineNumber, t.column),
            text: e,
            forceMoveMarkers: !0
        };
    }
    static delete(t) {
        return {
            range: t,
            text: null
        };
    }
    static replace(t, e) {
        return {
            range: t,
            text: e
        };
    }
    static replaceMove(t, e) {
        return {
            range: t,
            text: e,
            forceMoveMarkers: !0
        };
    }
};

}
