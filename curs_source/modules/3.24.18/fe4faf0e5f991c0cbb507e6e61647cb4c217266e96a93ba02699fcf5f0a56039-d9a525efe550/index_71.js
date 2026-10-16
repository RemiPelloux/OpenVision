import { I0, Zl } from "./index_41.js";
import { i } from "./plugin-brand-icon.js";
function MB(r) {
    const e = [];
    let a = -1, s = 0, l = 0;
    for(; ++a < r.length;){
        const u = r.charCodeAt(a);
        let p = "";
        if (u === 37 && I0(r.charCodeAt(a + 1)) && I0(r.charCodeAt(a + 2))) l = 2;
        else if (u < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) || (p = String.fromCharCode(u));
        else if (u > 55295 && u < 57344) {
            const m = r.charCodeAt(a + 1);
            u < 56320 && m > 56319 && m < 57344 ? (p = String.fromCharCode(u, m), l = 1) : p = "\uFFFD";
        } else p = String.fromCharCode(u);
        p && (e.push(r.slice(s, a), encodeURIComponent(p)), s = a + l + 1, p = ""), l && (a += l, l = 0);
    }
    return e.join("") + r.slice(s);
}
export { MB };
var __wakaru_vJ_initialized = false;
export function vJ() {
if (__wakaru_vJ_initialized) return;
__wakaru_vJ_initialized = true;
Zl(), i(MB, "normalizeUri");

}
