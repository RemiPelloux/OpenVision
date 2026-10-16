import { D } from "./Iwo.js";
import { Bt } from "./nls.js";
import { E } from "./tslib.es6.js";
var cyg;
export { cyg };
var __wakaru_U0k_initialized = false;
export function U0k() {
if (__wakaru_U0k_initialized) return;
__wakaru_U0k_initialized = true;
"use strict";
E(), Bt(), cyg = {
    "terminal.integrated.accessibleViewPreserveCursorPosition": {
        markdownDescription: D(10671, null),
        type: "boolean",
        default: !1
    },
    "terminal.integrated.accessibleViewFocusOnCommandExecution": {
        markdownDescription: D(10672, null),
        type: "boolean",
        default: !1
    }
};

}
