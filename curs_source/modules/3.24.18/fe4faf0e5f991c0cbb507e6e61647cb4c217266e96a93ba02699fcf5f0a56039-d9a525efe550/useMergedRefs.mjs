import { i } from "./plugin-brand-icon.js";
import { C0, eg } from "./useRefWithInit.mjs";
function Q_(r, e, a, s) {
    const l = eg(CTt).current;
    return fQn(l, r, e, a, s) && STt(l, [
        r,
        e,
        a,
        s
    ]), l.callback;
}
function mQn(r) {
    const e = eg(CTt).current;
    return hQn(e, r) && STt(e, r), e.callback;
}
function CTt() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    };
}
function fQn(r, e, a, s, l) {
    return r.refs[0] !== e || r.refs[1] !== a || r.refs[2] !== s || r.refs[3] !== l;
}
function hQn(r, e) {
    return r.refs.length !== e.length || r.refs.some((a, s)=>a !== e[s]);
}
function STt(r, e) {
    if (r.refs = e, e.every((a)=>a == null)) {
        r.callback = null;
        return;
    }
    r.callback = (a)=>{
        if (r.cleanup && (r.cleanup(), r.cleanup = null), a != null) {
            const s = Array(e.length).fill(null);
            for(let l = 0; l < e.length; l += 1){
                const u = e[l];
                if (u != null) switch(typeof u){
                    case "function":
                        {
                            const p = u(a);
                            typeof p == "function" && (s[l] = p);
                            break;
                        }
                    case "object":
                        {
                            u.current = a;
                            break;
                        }
                    default:
                }
            }
            r.cleanup = ()=>{
                for(let l = 0; l < e.length; l += 1){
                    const u = e[l];
                    if (u != null) switch(typeof u){
                        case "function":
                            {
                                const p = s[l];
                                typeof p == "function" ? p() : u(null);
                                break;
                            }
                        case "object":
                            {
                                u.current = null;
                                break;
                            }
                        default:
                    }
                }
            };
        }
    };
}
export { CTt, Q_, STt, fQn, hQn, mQn };
var __wakaru_mC_initialized = false;
export function mC() {
if (__wakaru_mC_initialized) return;
__wakaru_mC_initialized = true;
C0(), i(Q_, "useMergedRefs"), i(mQn, "useMergedRefsN"), i(CTt, "createForkRef"), i(fQn, "didChange"), i(hQn, "didChangeN"), i(STt, "update");

}
