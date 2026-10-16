import { bn } from "./async.js";
import { x } from "./tslib.es6.js";
var Ffh;
export { Ffh };
var __wakaru_XPe_initialized = false;
export function XPe() {
if (__wakaru_XPe_initialized) return;
__wakaru_XPe_initialized = true;
"use strict";
x(), bn(), Ffh = class extends Error {
    constructor(e){
        super(`Timed out resolving the agent workspace after ${e}ms`), this.timeoutMs = e, this.name = "WorkspaceResolutionTimeoutError";
    }
};

}
