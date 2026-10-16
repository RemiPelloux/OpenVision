import { Jje, _jr, qke } from "./HVr.js";
import { Ghn, Hhn, Vhn, kdt } from "./client.js";
import { U3e } from "./errors.js";
import { M9n } from "./eventbuilder_2.js";
import { Q$, z_ } from "./helpers.js";
import { $u } from "./index_10.js";
import { g2o, ksr } from "./linkederrors_2.js";
import { Mhn, TWr, fhn, gLt, nqe, qH, shi } from "./qIc.js";
import { mK } from "./scope.js";
import { Pu } from "./spanUtils.js";
import { x } from "./tslib.es6.js";
import { Vke } from "./version.js";
function uVr(e) {
    "aggregates" in e ? e.attrs?.ip_address === void 0 && (e.attrs = {
        ...e.attrs,
        ip_address: "{{auto}}"
    }) : e.ipAddress === void 0 && (e.ipAddress = "{{auto}}");
}
function dVr(e, t, n = [
    t
], i = "npm") {
    const r = e._metadata || {};
    r.sdk || (r.sdk = {
        name: `sentry.javascript.${t}`,
        packages: n.map((s)=>({
                name: `${i}:@sentry/${s}`,
                version: Vke
            })),
        version: Vke
    }), e._metadata = r;
}
function iS_(e, t, n, i) {
    const s = Pu()?.getOptions().normalizeDepth, o = uS_(t), a = {
        __serialized__: Mhn(t, s)
    };
    if (o) return {
        exception: {
            values: [
                ksr(e, o)
            ]
        },
        extra: a
    };
    const c = {
        exception: {
            values: [
                {
                    type: Jje(t) ? t.constructor.name : i ? "UnhandledRejection" : "Error",
                    value: cS_(t, {
                        isUnhandledRejection: i
                    })
                }
            ]
        },
        extra: a
    };
    if (n) {
        const l = g2o(e, n);
        l.length && (c.exception.values[0].stacktrace = {
            frames: l
        });
    }
    return c;
}
function m2o(e, t) {
    return {
        exception: {
            values: [
                ksr(e, t)
            ]
        }
    };
}
function Sjh(e, t, n, i) {
    const r = n?.syntheticException || void 0, s = wsr(e, t, r, i);
    return qH(s), s.level = "error", n?.event_id && (s.event_id = n.event_id), U3e(s);
}
function kjh(e, t, n = "info", i, r) {
    const s = i?.syntheticException || void 0, o = f2o(e, t, s, r);
    return o.level = n, i?.event_id && (o.event_id = i.event_id), U3e(o);
}
function wsr(e, t, n, i, r) {
    let s;
    if (gLt(t) && t.error) return m2o(e, t.error);
    if (fhn(t) || TWr(t)) {
        const o = t;
        if ("stack" in t) s = m2o(e, t);
        else {
            const a = o.name || (fhn(o) ? "DOMError" : "DOMException"), c = o.message ? `${a}: ${o.message}` : a;
            s = f2o(e, c, n, i), nqe(s, c);
        }
        return "code" in o && (s.tags = {
            ...s.tags,
            "DOMException.code": `${o.code}`
        }), s;
    }
    return qke(t) ? m2o(e, t) : mK(t) || Jje(t) ? (s = iS_(e, t, n, r), qH(s, {
        synthetic: !0
    }), s) : (s = f2o(e, t, n, i), nqe(s, `${t}`, void 0), qH(s, {
        synthetic: !0
    }), s);
}
function f2o(e, t, n, i) {
    const r = {};
    if (i && n) {
        const s = g2o(e, n);
        s.length && (r.exception = {
            values: [
                {
                    value: t,
                    stacktrace: {
                        frames: s
                    }
                }
            ]
        }), qH(r, {
            synthetic: !0
        });
    }
    if (kdt(t)) {
        const { __sentry_template_string__: s, __sentry_template_values__: o } = t;
        return r.logentry = {
            message: s,
            params: o
        }, r;
    }
    return r.message = t, r;
}
function cS_(e, { isUnhandledRejection: t }) {
    const n = shi(e), i = t ? "promise rejection" : "exception";
    return gLt(e) ? `Event \`ErrorEvent\` captured as ${i} with message \`${e.message}\`` : Jje(e) ? `Event \`${lS_(e)}\` (type=${e.type}) captured as ${i}` : `Object captured as ${i} with keys: ${n}`;
}
function lS_(e) {
    try {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0;
    } catch  {}
}
function uS_(e) {
    for(const t in e)if (Object.prototype.hasOwnProperty.call(e, t)) {
        const n = e[t];
        if (n instanceof Error) return n;
    }
}
function dS_(e) {
    return {
        release: typeof __SENTRY_RELEASE__ == "string" ? __SENTRY_RELEASE__ : z_.SENTRY_RELEASE?.id,
        sendClientReports: !0,
        parentSpanIsAlwaysRootSpan: !0,
        ...e
    };
}
var v2o;
export { Sjh, cS_, dS_, dVr, f2o, iS_, kjh, lS_, m2o, uS_, uVr, v2o, wsr };
var __wakaru_Cjh_initialized = false;
export function Cjh() {
if (__wakaru_Cjh_initialized) return;
__wakaru_Cjh_initialized = true;
x(), $u(), M9n(), Q$(), v2o = class extends Vhn {
    constructor(e){
        const t = dS_(e), n = z_.SENTRY_SDK_SOURCE || _jr();
        dVr(t, "browser", [
            "browser"
        ], n), t._metadata?.sdk && (t._metadata.sdk.settings = {
            infer_ip: t.sendDefaultPii ? "auto" : "never",
            ...t._metadata.sdk.settings
        }), super(t);
        const { sendDefaultPii: i, sendClientReports: r, enableLogs: s, _experiments: o, enableMetrics: a } = this._options, c = a ?? o?.enableMetrics ?? !0;
        z_.document && (r || s || c) && z_.document.addEventListener("visibilitychange", ()=>{
            z_.document.visibilityState === "hidden" && (r && this._flushOutcomes(), s && Hhn(this), c && Ghn(this));
        }), i && this.on("beforeSendSession", uVr);
    }
    eventFromException(e, t) {
        return Sjh(this._options.stackParser, e, t, this._options.attachStacktrace);
    }
    eventFromMessage(e, t = "info", n) {
        return kjh(this._options.stackParser, e, t, n, this._options.attachStacktrace);
    }
    _prepareEvent(e, t, n, i) {
        return e.platform = e.platform || "javascript", super._prepareEvent(e, t, n, i);
    }
};

}
