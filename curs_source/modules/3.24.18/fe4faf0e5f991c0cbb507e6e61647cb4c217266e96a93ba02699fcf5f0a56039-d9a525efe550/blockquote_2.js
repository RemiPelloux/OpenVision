import { i } from "./plugin-brand-icon.js";
function Qfr(r, e) {
    const a = {
        type: "element",
        tagName: "blockquote",
        properties: {},
        children: r.wrap(r.all(e), !0)
    };
    return r.patch(e, a), r.applyData(e, a);
}
export { Qfr };
var __wakaru_zxi_initialized = false;
export function zxi() {
if (__wakaru_zxi_initialized) return;
__wakaru_zxi_initialized = true;
"";
i(Qfr, "blockquote");

}
