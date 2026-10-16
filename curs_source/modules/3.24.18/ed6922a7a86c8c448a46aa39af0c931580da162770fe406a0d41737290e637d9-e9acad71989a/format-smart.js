import { sjg } from "./to-decimal.js";
import { ijg } from "./to-hexadecimal.js";
import { ujg } from "./to-named.js";
import { x } from "./tslib.es6.js";
var __wakaru_hjg_initialized = false;
export function hjg() {
if (__wakaru_hjg_initialized) return;
__wakaru_hjg_initialized = true;
x(), ijg(), sjg(), ujg();

}
