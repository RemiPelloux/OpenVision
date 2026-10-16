import { x } from "./tslib.es6.js";
import { TD } from "./useBaseUiId.js";
import { af } from "./useIsoLayoutEffect.js";
var __wakaru__Pg_initialized = false;
export function _Pg() {
if (__wakaru__Pg_initialized) return;
__wakaru__Pg_initialized = true;
x(), af(), TD();

}
