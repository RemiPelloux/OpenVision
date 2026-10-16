import { KCr, VCr, XCr, ZCr, wje } from "./f6r.js";
import { i } from "./plugin-brand-icon.js";
var BP;
export { BP };
var __wakaru_nCi_initialized = false;
export function nCi() {
if (__wakaru_nCi_initialized) return;
__wakaru_nCi_initialized = true;
BP = i((function(r) {
    if (r == null) return KCr;
    if (typeof r == "string") return VCr(r);
    if (typeof r == "object") return ZCr(r);
    if (typeof r == "function") return wje(r);
    throw new Error("Expected function, string, or array as `test`");
}), "convertElement"), i(ZCr, "anyFactory"), i(VCr, "tagNameFactory"), i(wje, "castFactory"), i(KCr, "element"), i(XCr, "looksLikeAnElement");

}
