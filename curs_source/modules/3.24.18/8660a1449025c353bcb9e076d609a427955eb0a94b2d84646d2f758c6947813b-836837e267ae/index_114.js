import { mWe } from "./default.js";
import { dtS } from "./footer.js";
import { vtS } from "./state.js";
import { E } from "./tslib.es6.js";
var __wakaru__tS_initialized = false;
export function _tS() {
if (__wakaru__tS_initialized) return;
__wakaru__tS_initialized = true;
E(), mWe(), dtS(), vtS();

}
