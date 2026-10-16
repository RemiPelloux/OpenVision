import { Gfg, Ifn, K3c, QAe, Wfg, Wge, Y3c, mJr, mre, qn, r_i, uu, wle } from "./qIc.js";
import { x } from "./tslib.es6.js";
var Rfn, Lpt, JAe, TJr, Z3c, s_i, Dfn, EJr;
export { Dfn, EJr, JAe, Lpt, Rfn, TJr, Z3c, s_i };
var __wakaru_jS_initialized = false;
export function jS() {
if (__wakaru_jS_initialized) return;
__wakaru_jS_initialized = true;
x(), qn(), Rfn = Symbol("store-raw"), Lpt = Symbol("store-node"), JAe = Symbol("store-has"), TJr = Symbol("store-self"), Z3c = {
    get (e, t, n) {
        if (t === Rfn) return e;
        if (t === Wge) return n;
        if (t === wle) return Y3c(e), n;
        const i = r_i(e, Lpt), r = i[t];
        let s = r ? r() : e[t];
        if (t === Lpt || t === JAe || t === "__proto__") return s;
        if (!r) {
            const o = Object.getOwnPropertyDescriptor(e, t);
            mJr() && (typeof s != "function" || e.hasOwnProperty(t)) && !(o && o.get) && (s = Ifn(i, t, s)());
        }
        return QAe(s) ? K3c(s) : s;
    },
    has (e, t) {
        return t === Rfn || t === Wge || t === wle || t === Lpt || t === JAe || t === "__proto__" ? !0 : (mJr() && Ifn(r_i(e, JAe), t)(), t in e);
    },
    set () {
        return !0;
    },
    deleteProperty () {
        return !0;
    },
    ownKeys: Gfg,
    getOwnPropertyDescriptor: Wfg
}, s_i = Symbol("store-root"), Dfn = new WeakMap, EJr = {
    get (e, t) {
        if (t === Rfn) return e;
        const n = e[t];
        let i;
        return QAe(n) ? Dfn.get(n) || (Dfn.set(n, i = new Proxy(n, EJr)), i) : n;
    },
    set (e, t, n) {
        return mre(e, t, uu(n)), !0;
    },
    deleteProperty (e, t) {
        return mre(e, t, void 0, !0), !0;
    }
};

}
