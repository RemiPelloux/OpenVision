import { AEs } from "./to-json-schema.js";
import { x } from "./tslib.es6.js";
import { cv } from "./util.js";
var __wakaru_REs_initialized = false;
export function REs() {
if (__wakaru_REs_initialized) return;
__wakaru_REs_initialized = true;
x(), AEs(), cv();

}
