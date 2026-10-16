import { qZS } from "./index_177.js";
import { E } from "./tslib.es6.js";
import * as c7r from "./react-runtime/react/esm-index-production.js";
var gTa;
export { gTa };
var __wakaru_YZS_initialized = false;
export function YZS() {
if (__wakaru_YZS_initialized) return;
__wakaru_YZS_initialized = true;
E(), qZS(), gTa = typeof document < "u" ? c7r.useLayoutEffect : c7r.useEffect;

}
