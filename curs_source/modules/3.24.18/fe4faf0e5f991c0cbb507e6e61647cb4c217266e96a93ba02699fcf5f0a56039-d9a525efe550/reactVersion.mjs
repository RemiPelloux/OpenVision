import { i } from "./plugin-brand-icon.js";
import * as pui from "./react-runtime/react/esm-index-production.js";
function aIe(r) {
    return $Qn >= r;
}
var $Qn;
export { $Qn, aIe };
var __wakaru_MTt_initialized = false;
export function MTt() {
if (__wakaru_MTt_initialized) return;
__wakaru_MTt_initialized = true;
$Qn = parseInt(pui.version, 10), i(aIe, "isReactVersionAtLeast");

}
