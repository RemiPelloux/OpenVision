import { fMi } from "./checks.js";
import { bMi } from "./registries.js";
import { _Mi } from "./schemas.js";
import { x } from "./tslib.es6.js";
import { cv } from "./util.js";
var __wakaru_p1n_initialized = false;
export function p1n() {
if (__wakaru_p1n_initialized) return;
__wakaru_p1n_initialized = true;
x(), fMi(), bMi(), _Mi(), cv();

}
