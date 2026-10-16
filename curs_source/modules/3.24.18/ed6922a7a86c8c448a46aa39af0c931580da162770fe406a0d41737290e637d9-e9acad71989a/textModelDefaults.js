import { x } from "./tslib.es6.js";
var tU;
export { tU };
var __wakaru_uvi_initialized = false;
export function uvi() {
if (__wakaru_uvi_initialized) return;
__wakaru_uvi_initialized = true;
"use strict";
x(), tU = {
    tabSize: 4,
    indentSize: 4,
    insertSpaces: !0,
    detectIndentation: !0,
    trimAutoWhitespace: !0,
    largeFileOptimizations: !0,
    bracketPairColorizationOptions: {
        enabled: !0,
        independentColorPoolPerBracketType: !1
    }
};

}
