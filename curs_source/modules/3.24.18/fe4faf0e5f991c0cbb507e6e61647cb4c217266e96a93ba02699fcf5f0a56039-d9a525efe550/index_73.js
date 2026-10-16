import { i } from "./plugin-brand-icon.js";
function Dfe(r, e, a) {
    const s = [];
    let l = -1;
    for(; ++l < r.length;){
        const u = r[l].resolveAll;
        u && !s.includes(u) && (e = u(e, a), s.push(u));
    }
    return e;
}
export { Dfe };
var __wakaru_QNe_initialized = false;
export function QNe() {
if (__wakaru_QNe_initialized) return;
__wakaru_QNe_initialized = true;
i(Dfe, "resolveAll");

}
