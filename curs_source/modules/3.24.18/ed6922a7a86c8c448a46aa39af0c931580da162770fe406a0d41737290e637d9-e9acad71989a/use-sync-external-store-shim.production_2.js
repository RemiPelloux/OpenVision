import { r$ } from "./_commonjsHelpers.js";
import { UCi } from "./_react.js";
import { x } from "./tslib.es6.js";
import { GAg } from "./use-sync-external-store-shim.production.js";
var __wakaru_qAg_initialized = false;
export function qAg() {
if (__wakaru_qAg_initialized) return;
__wakaru_qAg_initialized = true;
x(), r$(), GAg(), UCi();

}
