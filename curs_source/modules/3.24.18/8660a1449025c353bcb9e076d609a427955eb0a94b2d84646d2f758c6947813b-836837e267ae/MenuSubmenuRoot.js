import { rma } from "./MenuRoot.js";
import { F_e } from "./MenuRootContext.js";
import { ima } from "./MenuSubmenuRootContext.js";
import { E } from "./tslib.es6.js";
var __wakaru_oSS_initialized = false;
export function oSS() {
if (__wakaru_oSS_initialized) return;
__wakaru_oSS_initialized = true;
E(), rma(), F_e(), ima();

}
