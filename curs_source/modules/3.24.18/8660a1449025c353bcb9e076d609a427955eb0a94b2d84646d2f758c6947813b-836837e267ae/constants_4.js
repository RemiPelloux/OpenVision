import { E } from "./tslib.es6.js";
var Wwo, lVu, cVu, uVu;
export { Wwo, cVu, lVu, uVu };
var __wakaru_hpr_initialized = false;
export function hpr() {
if (__wakaru_hpr_initialized) return;
__wakaru_hpr_initialized = true;
"use strict";
E(), Wwo = "OpenAI", lVu = [
    "responses.create",
    "chat.completions.create"
], cVu = [
    "response.output_item.added",
    "response.function_call_arguments.delta",
    "response.function_call_arguments.done",
    "response.output_item.done"
], uVu = [
    "response.created",
    "response.in_progress",
    "response.failed",
    "response.completed",
    "response.incomplete",
    "response.queued",
    "response.output_text.delta",
    ...cVu
];

}
