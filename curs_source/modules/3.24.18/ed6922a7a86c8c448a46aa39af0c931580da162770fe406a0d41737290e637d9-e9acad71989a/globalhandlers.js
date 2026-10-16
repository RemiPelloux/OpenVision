import { JQ } from "./HVr.js";
import { Wce } from "./client.js";
import { wsr } from "./client_2.js";
import { _Z, kg } from "./debug-build_3.js";
import { zr } from "./debug-logger.js";
import { M9n } from "./eventbuilder_2.js";
import { Q$, Ssr } from "./helpers.js";
import { $u } from "./index_10.js";
import { Gce } from "./index_216.js";
import { Qdi, Xce, ehi } from "./qIc.js";
import { Pu } from "./spanUtils.js";
import { K4 } from "./stacktrace.js";
import { x } from "./tslib.es6.js";
function gjh() {
    return Ssr > 0;
}
function xS_(e) {
    Qdi((t)=>{
        const { stackParser: n, attachStacktrace: i } = aqh();
        if (Pu() !== e || gjh()) return;
        const { msg: r, url: s, line: o, column: a, error: c } = t, l = AS_(wsr(n, c || r, void 0, i, !1), s, o, a);
        l.level = "error", Xce(l, {
            originalException: c,
            mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onerror"
            }
        });
    });
}
function IS_(e) {
    ehi((t)=>{
        const { stackParser: n, attachStacktrace: i } = aqh();
        if (Pu() !== e || gjh()) return;
        const r = rqh(t), s = Wce(r) ? sqh(r) : wsr(n, r, void 0, i, !0);
        s.level = "error", Xce(s, {
            originalException: r,
            mechanism: {
                handled: !1,
                type: "auto.browser.global_handlers.onunhandledrejection"
            }
        });
    });
}
function rqh(e) {
    if (Wce(e)) return e;
    try {
        if ("reason" in e) return e.reason;
        if ("detail" in e && "reason" in e.detail) return e.detail.reason;
    } catch  {}
    return e;
}
function sqh(e) {
    return {
        exception: {
            values: [
                {
                    type: "UnhandledRejection",
                    value: `Non-Error promise rejection captured with value: ${String(e)}`
                }
            ]
        }
    };
}
function AS_(e, t, n, i) {
    const r = e.exception = e.exception || {}, s = r.values = r.values || [], o = s[0] = s[0] || {}, a = o.stacktrace = o.stacktrace || {}, c = a.frames = a.frames || [], l = i, u = n, h = RS_(t) ?? Gce();
    return c.length === 0 && c.push({
        colno: l,
        filename: h,
        function: K4,
        in_app: !0,
        lineno: u
    }), e;
}
function oqh(e) {
    kg && zr.log(`Global Handler attached: ${e}`);
}
function aqh() {
    return Pu()?.getOptions() || {
        stackParser: ()=>[],
        attachStacktrace: !1
    };
}
function RS_(e) {
    if (!(!JQ(e) || e.length === 0)) {
        if (e.startsWith("data:")) {
            const t = e.match(/^data:([^;]+)/), n = t ? t[1] : "text/javascript", i = e.includes("base64,");
            return `<data:${n}${i ? ",base64" : ""}>`;
        }
        return e;
    }
}
var cqh, lqh, I2o;
export { AS_, I2o, IS_, RS_, aqh, cqh, gjh, lqh, oqh, rqh, sqh, xS_ };
var __wakaru_A2o_initialized = false;
export function A2o() {
if (__wakaru_A2o_initialized) return;
__wakaru_A2o_initialized = true;
x(), $u(), _Z(), M9n(), Q$(), cqh = "GlobalHandlers", lqh = ((e = {})=>{
    const t = {
        onerror: !0,
        onunhandledrejection: !0,
        ...e
    };
    return {
        name: cqh,
        setupOnce () {
            Error.stackTraceLimit = 50;
        },
        setup (n) {
            t.onerror && (xS_(n), oqh("onerror")), t.onunhandledrejection && (IS_(n), oqh("onunhandledrejection"));
        }
    };
}), I2o = lqh;

}
