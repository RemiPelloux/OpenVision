import { i } from "./plugin-brand-icon.js";
function ik(r, e, a, s) {
    const l = r.length;
    let u = 0, p;
    if (e < 0 ? e = -e > l ? 0 : l + e : e = e > l ? l : e, a = a > 0 ? a : 0, s.length < 1e4) p = Array.from(s), p.unshift(e, a), r.splice(...p);
    else for(a && r.splice(e, a); u < s.length;)p = s.slice(u, u + 1e4), p.unshift(e, 0), r.splice(...p), u += 1e4, e += 1e4;
}
function l3(r, e) {
    return r.length > 0 ? (ik(r, r.length, 0, e), r) : e;
}
export { ik, l3 };
var __wakaru_vP_initialized = false;
export function vP() {
if (__wakaru_vP_initialized) return;
__wakaru_vP_initialized = true;
i(ik, "splice"), i(l3, "push");

}
