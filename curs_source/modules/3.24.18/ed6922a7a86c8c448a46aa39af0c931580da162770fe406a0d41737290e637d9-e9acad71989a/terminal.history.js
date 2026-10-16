import { S } from "./HVr.js";
import { rt } from "./nls.js";
import { x } from "./tslib.es6.js";
var TMh, EMh;
export { EMh, TMh };
var __wakaru_Pr__initialized = false;
export function Pr_() {
if (__wakaru_Pr__initialized) return;
__wakaru_Pr__initialized = true;
"use strict";
x(), rt(), TMh = [
    "workbench.action.terminal.goToRecentDirectory",
    "workbench.action.terminal.runRecentCommand"
], EMh = {
    "terminal.integrated.shellIntegration.history": {
        restricted: !0,
        markdownDescription: S(10761, null),
        type: "number",
        default: 100
    }
};

}
