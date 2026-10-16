import { E } from "./tslib.es6.js";
import { M0r, MPy, PPy, Qve, Wu, a7d, fAe, kPo, o7d, pi, rsi, uHe, v4 } from "./ze.js";
var osi, rBt, dHe, C$o, c7d, D0r, asi, T$o;
export { C$o, D0r, T$o, asi, c7d, dHe, osi, rBt };
var __wakaru_v1_initialized = false;
export function v1() {
if (__wakaru_v1_initialized) return;
__wakaru_v1_initialized = true;
E(), pi(), osi = Symbol("store-raw"), rBt = Symbol("store-node"), dHe = Symbol("store-has"), C$o = Symbol("store-self"), c7d = {
    get (t, e, n) {
        if (e === osi) return t;
        if (e === fAe) return n;
        if (e === v4) return a7d(t), n;
        const i = M0r(t, rBt), r = i[e];
        let s = r ? r() : t[e];
        if (e === rBt || e === dHe || e === "__proto__") return s;
        if (!r) {
            const o = Object.getOwnPropertyDescriptor(t, e);
            kPo() && (typeof s != "function" || t.hasOwnProperty(e)) && !(o && o.get) && (s = rsi(i, e, s)());
        }
        return uHe(s) ? o7d(s) : s;
    },
    has (t, e) {
        return e === osi || e === fAe || e === v4 || e === rBt || e === dHe || e === "__proto__" ? !0 : (kPo() && rsi(M0r(t, dHe), e)(), e in t);
    },
    set () {
        return !0;
    },
    deleteProperty () {
        return !0;
    },
    ownKeys: MPy,
    getOwnPropertyDescriptor: PPy
}, D0r = Symbol("store-root"), asi = new WeakMap, T$o = {
    get (t, e) {
        if (e === osi) return t;
        const n = t[e];
        let i;
        return uHe(n) ? asi.get(n) || (asi.set(n, i = new Proxy(n, T$o)), i) : n;
    },
    set (t, e, n) {
        return Qve(t, e, Wu(n)), !0;
    },
    deleteProperty (t, e) {
        return Qve(t, e, void 0, !0), !0;
    }
};

}
