import { i } from "./plugin-brand-icon.js";
import { useEffect as Pui } from "./react-runtime/react/esm-index-production.js";
import { c as Rui } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useRef as jui } from "./react-runtime/react/esm-index-production.js";
function ntr() {
    const r = Rui(5), e = jui(void 0);
    let a;
    r[0] === Symbol.for("react.memo_cache_sentinel") ? (a = i(()=>{
        const g = e.current;
        g !== void 0 && (e.current = void 0, cancelAnimationFrame(g));
    }, "t0"), r[0] = a) : a = r[0];
    const s = a;
    let l;
    r[1] === Symbol.for("react.memo_cache_sentinel") ? (l = i((g)=>{
        s(), e.current = requestAnimationFrame((_)=>{
            e.current = void 0, g(_);
        });
    }, "t1"), r[1] = l) : l = r[1];
    const u = l;
    let p, m;
    r[2] === Symbol.for("react.memo_cache_sentinel") ? (p = i(()=>s, "t2"), m = [
        s
    ], r[2] = p, r[3] = m) : (p = r[2], m = r[3]), Pui(p, m);
    let b;
    return r[4] === Symbol.for("react.memo_cache_sentinel") ? (b = {
        dispose: s,
        request: u
    }, r[4] = b) : b = r[4], b;
}
export { ntr };
var __wakaru_kki_initialized = false;
export function kki() {
if (__wakaru_kki_initialized) return;
__wakaru_kki_initialized = true;
"use strict";
i(ntr, "useAnimationFrame");

}
