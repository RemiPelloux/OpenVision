import { $3e, Cog, Tog, WVr } from "./HVr.js";
import { fI, kdt } from "./client.js";
import { LLt, jhi } from "./console.js";
import { Awc } from "./constants_2.js";
import { NT } from "./currentScopes.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, hLt, zr } from "./debug-logger.js";
import { WGr } from "./errors.js";
import { YH } from "./integration.js";
import { Whn } from "./internal.js";
import { Rwc, rAe } from "./qIc.js";
import { _Lt } from "./scope.js";
import { W9, jC } from "./semanticAttributes.js";
import { Pu, nv, sR } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { o1c } from "./utils_2.js";
import { Pie } from "./utils_29.js";
function gig(e) {
    switch(typeof e){
        case "number":
            return Number.isInteger(e) ? {
                value: e,
                type: "integer"
            } : {
                value: e,
                type: "double"
            };
        case "boolean":
            return {
                value: e,
                type: "boolean"
            };
        case "string":
            return {
                value: e,
                type: "string"
            };
        default:
            {
                let t = "";
                try {
                    t = JSON.stringify(e) ?? "";
                } catch  {}
                return {
                    value: t,
                    type: "string"
                };
            }
    }
}
function dAe(e, t, n, i = !0) {
    n && (!e[t] || i) && (e[t] = n);
}
function ILt(e, t = nv(), n = Rwc) {
    const i = t?.getClient() ?? Pu();
    if (!i) {
        Qh && zr.warn("No client available to capture log.");
        return;
    }
    const { release: r, environment: s, enableLogs: o = !1, beforeSendLog: a } = i.getOptions();
    if (!o) {
        Qh && zr.warn("logging option not enabled, log will not be captured.");
        return;
    }
    const [, c] = WGr(i, t), l = {
        ...e.attributes
    }, { user: { id: u, email: h, username: p } } = fig(t);
    dAe(l, "user.id", u, !1), dAe(l, "user.email", h, !1), dAe(l, "user.name", p, !1), dAe(l, "sentry.release", r), dAe(l, "sentry.environment", s);
    const { name: g, version: f } = i.getSdkMetadata()?.sdk ?? {};
    dAe(l, "sentry.sdk.name", g), dAe(l, "sentry.sdk.version", f);
    const v = i.getIntegrationByName("Replay"), b = v?.getReplayId(!0);
    dAe(l, "sentry.replay_id", b), b && v?.getRecordingMode() === "buffer" && dAe(l, "sentry._internal.replay_is_buffering", !0);
    const y = e.message;
    if (kdt(y)) {
        const { __sentry_template_string__: F, __sentry_template_values__: H = [] } = y;
        H?.length && (l["sentry.message.template"] = F), H.forEach(($, W)=>{
            l[`sentry.message.parameter.${W}`] = $;
        });
    }
    const T = _Lt(t);
    dAe(l, "sentry.trace.parent_span_id", T?.spanContext().spanId);
    const E = {
        ...e,
        attributes: l
    };
    i.emit("beforeCaptureLog", E);
    const A = a ? rAe(()=>a(E)) : E;
    if (!A) {
        i.recordDroppedEvent("before_send", "log_item", 1), Qh && zr.warn("beforeSendLog returned null, log will not be captured.");
        return;
    }
    const { level: R, message: D, attributes: P = {}, severityNumber: N } = A, O = {
        timestamp: sR(),
        level: R,
        body: D,
        trace_id: c?.trace_id,
        severity_number: N ?? Awc[R],
        attributes: Object.keys(P).reduce((F, H)=>(F[H] = gig(P[H]), F), {})
    };
    n(i, O), i.emit("afterCaptureLog", A);
}
function fig(e) {
    const t = Pie().getScopeData();
    return $3e(t, fI().getScopeData()), $3e(t, e.getScopeData()), t;
}
var a1c, GVr, c1c, opi;
export { GVr, ILt, a1c, c1c, dAe, fig, gig, opi };
var __wakaru_Eog_initialized = false;
export function Eog() {
if (__wakaru_Eog_initialized) return;
__wakaru_Eog_initialized = true;
"use strict";
x(), NT(), kE(), jhi(), YH(), W9(), Xk(), Whn(), o1c(), a1c = "ConsoleLogs", GVr = {
    [jC]: "auto.log.console"
}, c1c = ((e = {})=>{
    const t = e.levels || hLt;
    return {
        name: a1c,
        setup (n) {
            const { enableLogs: i, normalizeDepth: r = 3, normalizeMaxBreadth: s = 1e3 } = n.getOptions();
            if (!i) {
                Qh && zr.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
                return;
            }
            LLt(({ args: o, level: a })=>{
                if (Pu() !== n || !t.includes(a)) return;
                const c = o[0], l = o.slice(1);
                if (a === "assert") {
                    if (!c) {
                        const g = l.length > 0 ? `Assertion failed: ${WVr(l, r, s)}` : "Assertion failed";
                        ILt({
                            level: "error",
                            message: g,
                            attributes: GVr
                        });
                    }
                    return;
                }
                const u = a === "log", h = o.length > 1 && typeof o[0] == "string" && !Cog(o[0]), p = {
                    ...GVr,
                    ...h ? Tog(c, l) : {}
                };
                ILt({
                    level: u ? "info" : a,
                    message: WVr(o, r, s),
                    severityNumber: u ? 10 : void 0,
                    attributes: p
                });
            });
        }
    };
}), opi = c1c;

}
