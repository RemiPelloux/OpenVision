import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var bMh;
export { bMh };
var __wakaru_Rr__initialized = false;
export function Rr_() {
if (__wakaru_Rr__initialized) return;
__wakaru_Rr__initialized = true;
"use strict";
x(), rt(), bMh = {
    "terminal.integrated.accessibleViewPreserveCursorPosition": {
        markdownDescription: S(10671, null),
        type: "boolean",
        default: !1
    },
    "terminal.integrated.accessibleViewFocusOnCommandExecution": {
        markdownDescription: S(10672, null),
        type: "boolean",
        default: !1
    }
};

}
