import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var SMh, kMh;
export { SMh, kMh };
var __wakaru_wMh_initialized = false;
export function wMh() {
if (__wakaru_wMh_initialized) return;
__wakaru_wMh_initialized = true;
"use strict";
x(), rt(), SMh = "terminal.integrated.shellIntegration", kMh = {
    "terminal.integrated.shellIntegration.showCommandGuide": {
        restricted: !0,
        markdownDescription: S(10689, null),
        type: "boolean",
        default: !0
    }
};

}
