import { xlr } from "./index_57.js";
import { b3i } from "./index_58.js";
import { i } from "./plugin-brand-icon.js";
function Clr(r, e, a, s) {
    return (r.children.some(function(p) {
        return xlr(p);
    }) ? a.containerPhrasing : a.containerFlow).call(a, r, s);
}
export { Clr };
var __wakaru_y3i_initialized = false;
export function y3i() {
if (__wakaru_y3i_initialized) return;
__wakaru_y3i_initialized = true;
b3i(), i(Clr, "root");

}
