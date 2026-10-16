import { TFn } from "./limits.ts";
import { x } from "./tslib.es6.js";
var hgh;
export { hgh };
var __wakaru_pgh_initialized = false;
export function pgh() {
if (__wakaru_pgh_initialized) return;
__wakaru_pgh_initialized = true;
"use strict";
x(), TFn(), hgh = class extends Error {
    constructor(e){
        super(`Hook additional_context for ${e.hookEventName} is ${e.actualLength} chars (max ${e.maxLength}).`), this.name = "HookAdditionalContextTooLargeError", this.hookEventName = e.hookEventName, this.actualLength = e.actualLength, this.maxLength = e.maxLength;
    }
};

}
