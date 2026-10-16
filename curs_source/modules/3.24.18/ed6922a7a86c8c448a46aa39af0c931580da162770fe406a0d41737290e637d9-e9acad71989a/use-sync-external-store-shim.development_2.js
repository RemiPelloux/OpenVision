import { r$ } from "./_commonjsHelpers.js";
import { UCi } from "./_react.js";
import { x } from "./tslib.es6.js";
import { zAg } from "./use-sync-external-store-shim.development.js";
var __wakaru_XAg_initialized = false;
export function XAg() {
if (__wakaru_XAg_initialized) return;
__wakaru_XAg_initialized = true;
x(), r$(), zAg(), UCi();

}
