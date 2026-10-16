import { lNe } from "./index_4.js";
import { ZNe } from "./index_55.js";
import { KMt } from "./index_56.js";
import { R4 } from "./index_6.js";
import { ffe } from "./index_7.js";
import { i } from "./plugin-brand-icon.js";
function clr(r, e) {
    let a = !1;
    return R4(r, function(s) {
        if ("value" in s && /\r?\n|\r/.test(s.value) || s.type === "break") return a = !0, lNe;
    }), !!((!r.depth || r.depth < 3) && ZNe(r) && (e.options.setext || a));
}
export { clr };
var __wakaru_t3i_initialized = false;
export function t3i() {
if (__wakaru_t3i_initialized) return;
__wakaru_t3i_initialized = true;
ffe(), KMt(), i(clr, "formatHeadingAsSetext");

}
