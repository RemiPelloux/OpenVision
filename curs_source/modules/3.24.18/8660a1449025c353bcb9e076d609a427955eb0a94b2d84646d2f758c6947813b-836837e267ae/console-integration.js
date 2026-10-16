import { aet, dgy, ugy, xwo } from "./Iwo.js";
import { $je, ZWu } from "./SZu.js";
import { _Ft, _M } from "./client.js";
import { $hr, Uun } from "./console.js";
import { XWu } from "./constants_2.js";
import { JA } from "./currentScopes.js";
import { qR, rg } from "./debug-build.js";
import { JC, so, vun } from "./debug-logger.js";
import { xko } from "./errors.js";
import { hQ } from "./integration.js";
import { lXn } from "./internal.js";
import { wun } from "./scope.js";
import { KE, QH } from "./semanticAttributes.js";
import { Kb, M3, ah } from "./spanUtils.js";
import { dve } from "./traceLifecycleProfiler.js";
import { E } from "./tslib.es6.js";
import { Izu } from "./utils_2.js";
function thy(t) {
    switch(typeof t){
        case "number":
            return Number.isInteger(t) ? {
                value: t,
                type: "integer"
            } : {
                value: t,
                type: "double"
            };
        case "boolean":
            return {
                value: t,
                type: "boolean"
            };
        case "string":
            return {
                value: t,
                type: "string"
            };
        default:
            {
                let e = "";
                try {
                    e = JSON.stringify(t) ?? "";
                } catch  {}
                return {
                    value: e,
                    type: "string"
                };
            }
    }
}
function Kje(t, e, n, i = !0) {
    n && (!t[e] || i) && (t[e] = n);
}
function Dun(t, e = Kb(), n = ZWu) {
    const i = e?.getClient() ?? ah();
    if (!i) {
        rg && so.warn("No client available to capture log.");
        return;
    }
    const { release: r, environment: s, enableLogs: o = !1, beforeSendLog: a } = i.getOptions();
    if (!o) {
        rg && so.warn("logging option not enabled, log will not be captured.");
        return;
    }
    const [, l] = xko(i, e), c = {
        ...t.attributes
    }, { user: { id: u, email: d, username: h } } = nhy(e);
    Kje(c, "user.id", u, !1), Kje(c, "user.email", d, !1), Kje(c, "user.name", h, !1), Kje(c, "sentry.release", r), Kje(c, "sentry.environment", s);
    const { name: p, version: g } = i.getSdkMetadata()?.sdk ?? {};
    Kje(c, "sentry.sdk.name", p), Kje(c, "sentry.sdk.version", g);
    const f = i.getIntegrationByName("Replay"), _ = f?.getReplayId(!0);
    Kje(c, "sentry.replay_id", _), _ && f?.getRecordingMode() === "buffer" && Kje(c, "sentry._internal.replay_is_buffering", !0);
    const b = t.message;
    if (_Ft(b)) {
        const { __sentry_template_string__: M, __sentry_template_values__: O = [] } = b;
        O?.length && (c["sentry.message.template"] = M), O.forEach((N, U)=>{
            c[`sentry.message.parameter.${U}`] = N;
        });
    }
    const y = wun(e);
    Kje(c, "sentry.trace.parent_span_id", y?.spanContext().spanId);
    const S = {
        ...t,
        attributes: c
    };
    i.emit("beforeCaptureLog", S);
    const k = a ? $je(()=>a(S)) : S;
    if (!k) {
        i.recordDroppedEvent("before_send", "log_item", 1), rg && so.warn("beforeSendLog returned null, log will not be captured.");
        return;
    }
    const { level: C, message: T, attributes: I = {}, severityNumber: A } = k, P = {
        timestamp: M3(),
        level: C,
        body: T,
        trace_id: l?.trace_id,
        severity_number: A ?? XWu[C],
        attributes: Object.keys(I).reduce((M, O)=>(M[O] = thy(I[O]), M), {})
    };
    n(i, P), i.emit("afterCaptureLog", k);
}
function nhy(t) {
    const e = dve().getScopeData();
    return aet(e, _M().getScopeData()), aet(e, t.getScopeData()), e;
}
var xzu, Awo, Azu, npr;
export { Awo, Azu, Dun, Kje, nhy, npr, thy, xzu };
var __wakaru_hgy_initialized = false;
export function hgy() {
if (__wakaru_hgy_initialized) return;
__wakaru_hgy_initialized = true;
"use strict";
E(), JA(), qR(), $hr(), hQ(), QH(), JC(), lXn(), Izu(), xzu = "ConsoleLogs", Awo = {
    [KE]: "auto.log.console"
}, Azu = ((t = {})=>{
    const e = t.levels || vun;
    return {
        name: xzu,
        setup (n) {
            const { enableLogs: i, normalizeDepth: r = 3, normalizeMaxBreadth: s = 1e3 } = n.getOptions();
            if (!i) {
                rg && so.warn("`enableLogs` is not enabled, ConsoleLogs integration disabled");
                return;
            }
            Uun(({ args: o, level: a })=>{
                if (ah() !== n || !e.includes(a)) return;
                const l = o[0], c = o.slice(1);
                if (a === "assert") {
                    if (!l) {
                        const p = c.length > 0 ? `Assertion failed: ${xwo(c, r, s)}` : "Assertion failed";
                        Dun({
                            level: "error",
                            message: p,
                            attributes: Awo
                        });
                    }
                    return;
                }
                const u = a === "log", d = o.length > 1 && typeof o[0] == "string" && !ugy(o[0]), h = {
                    ...Awo,
                    ...d ? dgy(l, c) : {}
                };
                Dun({
                    level: u ? "info" : a,
                    message: xwo(o, r, s),
                    severityNumber: u ? 10 : void 0,
                    attributes: h
                });
            });
        }
    };
}), npr = Azu;

}
