import { cvr, lvr, svr } from "./Iwr.js";
import { i } from "./plugin-brand-icon.js";
var uvr, dvr, pvr, mvr, _Ft;
export { _Ft, dvr, mvr, pvr, uvr };
var __wakaru_u5i_initialized = false;
export function u5i() {
if (__wakaru_u5i_initialized) return;
__wakaru_u5i_initialized = true;
uvr = /["&'<>`]/g, dvr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, pvr = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g, mvr = /[|\\{}()[\]^$+*?.]/g, _Ft = new WeakMap, i(svr, "core"), i(cvr, "charactersToExpressionCached"), i(lvr, "charactersToExpression");

}
