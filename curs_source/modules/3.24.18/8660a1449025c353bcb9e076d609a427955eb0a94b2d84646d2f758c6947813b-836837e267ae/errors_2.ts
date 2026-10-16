import { ITi } from "./limits.ts";
import { E } from "./tslib.es6.js";
var Meg;
export { Meg };
var __wakaru_Deg_initialized = false;
export function Deg() {
if (__wakaru_Deg_initialized) return;
__wakaru_Deg_initialized = true;
"use strict";
E(), ITi(), Meg = class extends Error {
    constructor(t){
        super(`Hook additional_context for ${t.hookEventName} is ${t.actualLength} chars (max ${t.maxLength}).`), this.name = "HookAdditionalContextTooLargeError", this.hookEventName = t.hookEventName, this.actualLength = t.actualLength, this.maxLength = t.maxLength;
    }
};

}
