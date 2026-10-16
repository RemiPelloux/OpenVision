import { require_code } from "../code.js";
import { require_connect_error } from "../connect-error.js";
var __wakaru_require_signals_cache;
export function require_signals() {
if (__wakaru_require_signals_cache) return __wakaru_require_signals_cache;
var exports2 = {};
__wakaru_require_signals_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createLinkedAbortController = createLinkedAbortController2;
exports2.createDeadlineSignal = createDeadlineSignal2;
exports2.getAbortSignalReason = getAbortSignalReason2;
var connect_error_js_1 = require_connect_error();
var code_js_1 = require_code();
function createLinkedAbortController2(...signals) {
    const controller = new AbortController();
    const sa = signals.filter((s3)=>s3 !== void 0).concat(controller.signal);
    for (const signal of sa){
        if (signal.aborted) {
            onAbort.apply(signal);
            break;
        }
        signal.addEventListener("abort", onAbort);
    }
    function onAbort() {
        if (!controller.signal.aborted) {
            controller.abort(getAbortSignalReason2(this));
        }
        for (const signal of sa){
            signal.removeEventListener("abort", onAbort);
        }
    }
    return controller;
}
function createDeadlineSignal2(timeoutMs) {
    const controller = new AbortController();
    const listener = ()=>{
        controller.abort(new connect_error_js_1.ConnectError("the operation timed out", code_js_1.Code.DeadlineExceeded));
    };
    let timeoutId;
    if (timeoutMs !== void 0) {
        if (timeoutMs <= 0) listener();
        else timeoutId = setTimeout(listener, timeoutMs);
    }
    return {
        signal: controller.signal,
        cleanup: ()=>clearTimeout(timeoutId)
    };
}
function getAbortSignalReason2(signal) {
    if (!signal.aborted) {
        return void 0;
    }
    if (signal.reason !== void 0) {
        return signal.reason;
    }
    const e = new Error("This operation was aborted");
    e.name = "AbortError";
    return e;
}

return exports2;
}
