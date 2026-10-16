import { i } from "./plugin-brand-icon.js";
function Jcr(r, e) {
    return !!(e.options.fences === !1 && r.value && !r.lang && /[^ \r\n]/.test(r.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(r.value));
}
export { Jcr };
var __wakaru_Vvi_initialized = false;
export function Vvi() {
if (__wakaru_Vvi_initialized) return;
__wakaru_Vvi_initialized = true;
i(Jcr, "formatCodeAsIndented");

}
