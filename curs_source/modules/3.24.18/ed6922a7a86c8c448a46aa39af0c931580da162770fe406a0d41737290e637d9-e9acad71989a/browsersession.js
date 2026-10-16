import { Qdt } from "./HVr.js";
import { fI } from "./client.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { XH } from "./index_11.js";
import { $hn, Ckc, Cwc } from "./qIc.js";
import { wdt } from "./scope.js";
import { nv } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
function Ldt(e) {
    const t = fI(), n = nv(), { userAgent: i } = Og.navigator || {}, r = Ckc({
        user: n.getUser() || t.getUser(),
        ...i && {
            userAgent: i
        },
        ...e
    }), s = t.getSession();
    return s?.status === "ok" && wdt(s, {
        status: "exited"
    }), $hn(), t.setSession(r), r;
}
function Ndt(e = !1) {
    if (e) {
        $hn();
        return;
    }
    Cwc();
}
var x2o;
export { Ldt, Ndt, x2o };
var __wakaru_iqh_initialized = false;
export function iqh() {
if (__wakaru_iqh_initialized) return;
__wakaru_iqh_initialized = true;
x(), $u(), XH(), _Z(), Q$(), x2o = ()=>({
        name: "BrowserSession",
        setupOnce () {
            if (typeof z_.document > "u") {
                kg && zr.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                return;
            }
            Ldt({
                ignoreDuration: !0
            }), Ndt(), Qdt(({ from: e, to: t })=>{
                e !== void 0 && e !== t && (Ldt({
                    ignoreDuration: !0
                }), Ndt());
            });
        }
    });

}
