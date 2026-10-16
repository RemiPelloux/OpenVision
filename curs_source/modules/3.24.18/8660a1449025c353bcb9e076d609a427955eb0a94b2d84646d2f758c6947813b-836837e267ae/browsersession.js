import { eZ, i1 } from "./BA.js";
import { KFt } from "./Iwo.js";
import { oXn, qHu, qWu } from "./SZu.js";
import { _M } from "./client.js";
import { qv, uce } from "./debug-build_3.js";
import { so } from "./debug-logger.js";
import { fh } from "./index_10.js";
import { pQ } from "./index_11.js";
import { bFt } from "./scope.js";
import { Kb } from "./spanUtils.js";
import { E } from "./tslib.es6.js";
import { o_ } from "./worldwide.js";
function RFt(t) {
    const e = _M(), n = Kb(), { userAgent: i } = o_.navigator || {}, r = qHu({
        user: n.getUser() || e.getUser(),
        ...i && {
            userAgent: i
        },
        ...t
    }), s = e.getSession();
    return s?.status === "ok" && bFt(s, {
        status: "exited"
    }), oXn(), e.setSession(r), r;
}
function PFt(t = !1) {
    if (t) {
        oXn();
        return;
    }
    qWu();
}
var e7l;
export { PFt, RFt, e7l };
var __wakaru_fHf_initialized = false;
export function fHf() {
if (__wakaru_fHf_initialized) return;
__wakaru_fHf_initialized = true;
E(), fh(), pQ(), uce(), eZ(), e7l = ()=>({
        name: "BrowserSession",
        setupOnce () {
            if (typeof i1.document > "u") {
                qv && so.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                return;
            }
            RFt({
                ignoreDuration: !0
            }), PFt(), KFt(({ from: t, to: e })=>{
                t !== void 0 && t !== e && (RFt({
                    ignoreDuration: !0
                }), PFt());
            });
        }
    });

}
