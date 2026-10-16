import { _f, y_e } from "./environmentVariable.js";
import { oe } from "./platform.js";
import { h } from "./tslib.es6.js";
var wet;
export { wet };
var __wakaru_Eet_initialized = false;
export function Eet() {
if (__wakaru_Eet_initialized) return;
__wakaru_Eet_initialized = true;
"use strict";
h(), oe(), y_e(), wet = new Map([
    [
        _f.Append,
        "APPEND"
    ],
    [
        _f.Prepend,
        "PREPEND"
    ],
    [
        _f.Replace,
        "REPLACE"
    ]
]);

}
