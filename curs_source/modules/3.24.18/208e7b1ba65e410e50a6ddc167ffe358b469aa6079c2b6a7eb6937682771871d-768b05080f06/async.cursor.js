import { le } from "./async.js";
import { Ve } from "./errors.js";
import { j } from "./lifecycle.js";
import { h } from "./tslib.es6.js";
var AG;
export { AG };
var __wakaru_D7e_initialized = false;
export function D7e() {
if (__wakaru_D7e_initialized) return;
__wakaru_D7e_initialized = true;
"use strict";
h(), le(), Ve(), j(), AG = class extends Error {
    constructor(e, t){
        super(t ?? `Request did not settle within ${e}ms`), this.name = "RequestDeadlineError", this.timeoutMs = e, this.cause = new DOMException(this.message, "TimeoutError");
    }
};

}
