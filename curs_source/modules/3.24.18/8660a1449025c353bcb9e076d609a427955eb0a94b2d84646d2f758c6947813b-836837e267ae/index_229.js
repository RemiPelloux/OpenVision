import { oPv } from "./index_228.js";
import { E } from "./tslib.es6.js";
import * as VPs from "./react-runtime/react/esm-index-production.js";
var jtc;
export { jtc };
var __wakaru_$tc_initialized = false;
export function $tc() {
if (__wakaru_$tc_initialized) return;
__wakaru_$tc_initialized = true;
E(), oPv(), oPv(), jtc = typeof document < "u" ? VPs.useLayoutEffect : VPs.useEffect;

}
