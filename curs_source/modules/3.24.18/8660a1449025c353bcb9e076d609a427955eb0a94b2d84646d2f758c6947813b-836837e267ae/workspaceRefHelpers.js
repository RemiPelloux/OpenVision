import { qn } from "./async.js";
import { E } from "./tslib.es6.js";
var $il;
export { $il };
var __wakaru_OJ_initialized = false;
export function OJ() {
if (__wakaru_OJ_initialized) return;
__wakaru_OJ_initialized = true;
"use strict";
E(), qn(), $il = class extends Error {
    constructor(t){
        super(`Timed out resolving the agent workspace after ${t}ms`), this.timeoutMs = t, this.name = "WorkspaceResolutionTimeoutError";
    }
};

}
