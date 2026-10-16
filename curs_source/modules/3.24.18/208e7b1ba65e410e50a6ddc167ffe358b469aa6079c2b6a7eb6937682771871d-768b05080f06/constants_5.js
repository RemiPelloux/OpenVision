import { h } from "./tslib.es6.js";
var BB, B8e;
export { B8e, BB };
var __wakaru_xk_initialized = false;
export function xk() {
if (__wakaru_xk_initialized) return;
__wakaru_xk_initialized = true;
"use strict";
h(), BB = [
    "response.output_item.added",
    "response.function_call_arguments.delta",
    "response.function_call_arguments.done",
    "response.output_item.done"
], B8e = [
    "response.created",
    "response.in_progress",
    "response.failed",
    "response.completed",
    "response.incomplete",
    "response.queued",
    "response.output_text.delta",
    ...BB
];

}
