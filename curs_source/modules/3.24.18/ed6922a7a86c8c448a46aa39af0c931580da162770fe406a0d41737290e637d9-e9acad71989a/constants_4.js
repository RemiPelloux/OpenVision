import { x } from "./tslib.es6.js";
var ijr, H1c, W1c, G1c;
export { G1c, H1c, W1c, ijr };
var __wakaru_fpi_initialized = false;
export function fpi() {
if (__wakaru_fpi_initialized) return;
__wakaru_fpi_initialized = true;
"use strict";
x(), ijr = "OpenAI", H1c = [
    "responses.create",
    "chat.completions.create"
], W1c = [
    "response.output_item.added",
    "response.function_call_arguments.delta",
    "response.function_call_arguments.done",
    "response.output_item.done"
], G1c = [
    "response.created",
    "response.in_progress",
    "response.failed",
    "response.completed",
    "response.incomplete",
    "response.queued",
    "response.output_text.delta",
    ...W1c
];

}
