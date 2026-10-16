import { K3w, V3w, X3w, Y3w, Z3w, eZ, z3w } from "./BA.js";
import { KFt, WFt, edn, w0o } from "./Iwo.js";
import { Uun } from "./console.js";
import { uce } from "./debug-build_3.js";
import { fh } from "./index_10.js";
import { pQ } from "./index_11.js";
import { E } from "./tslib.es6.js";
var QNi, lHf, cHf, Q8l;
export { Q8l, QNi, cHf, lHf };
var __wakaru_uHf_initialized = false;
export function uHf() {
if (__wakaru_uHf_initialized) return;
__wakaru_uHf_initialized = true;
E(), fh(), pQ(), uce(), eZ(), QNi = 1024, lHf = "Breadcrumbs", cHf = ((t = {})=>{
    const e = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...t
    };
    return {
        name: lHf,
        setup (n) {
            e.console && Uun(K3w(n)), e.dom && w0o(V3w(n, e.dom)), e.xhr && edn(Y3w(n)), e.fetch && WFt(X3w(n)), e.history && KFt(Z3w(n)), e.sentry && n.on("beforeSendEvent", z3w(n));
        }
    };
}), Q8l = cHf;

}
