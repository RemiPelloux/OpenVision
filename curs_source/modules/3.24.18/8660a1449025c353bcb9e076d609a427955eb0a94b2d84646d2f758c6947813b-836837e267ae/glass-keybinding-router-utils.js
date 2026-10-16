import { rW, x_ } from "./contextkeys.js";
import { cg, si } from "./editorContextKeys.js";
import { Gv, Iye } from "./glassContextKeys.js";
import { E } from "./tslib.es6.js";
var nIf;
export { nIf };
var __wakaru_Tcw_initialized = false;
export function Tcw() {
if (__wakaru_Tcw_initialized) return;
__wakaru_Tcw_initialized = true;
"use strict";
E(), cg(), x_(), Gv(), nIf = Object.freeze([
    [
        Iye.key,
        !0
    ],
    [
        si.focus.key,
        !1
    ],
    [
        si.editorTextFocus.key,
        !1
    ],
    [
        si.textInputFocus.key,
        !0
    ],
    [
        rW.key,
        !0
    ]
]);

}
