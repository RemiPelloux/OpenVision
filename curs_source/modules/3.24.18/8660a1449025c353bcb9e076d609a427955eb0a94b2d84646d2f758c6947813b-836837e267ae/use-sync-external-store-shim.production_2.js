import { LY } from "./_commonjsHelpers.js";
import { UAr } from "./_react.js";
import { E } from "./tslib.es6.js";
import { a8y } from "./use-sync-external-store-shim.production.js";
var __wakaru_u8y_initialized = false;
export function u8y() {
if (__wakaru_u8y_initialized) return;
__wakaru_u8y_initialized = true;
E(), LY(), a8y(), UAr();

}
