import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var xMh;
export { xMh };
var __wakaru_Lr__initialized = false;
export function Lr_() {
if (__wakaru_Lr__initialized) return;
__wakaru_Lr__initialized = true;
"use strict";
x(), rt(), xMh = {
    "terminal.integrated.enableNotifications": {
        description: S(10793, null),
        type: "boolean",
        default: !0
    }
};

}
