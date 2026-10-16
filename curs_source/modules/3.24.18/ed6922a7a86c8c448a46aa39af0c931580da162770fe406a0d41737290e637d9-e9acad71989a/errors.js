import { qke } from "./HVr.js";
import { Xwc } from "./checkin.js";
import { FWr, Kwc, Vhn, fI, kdt, yhi, zce } from "./client.js";
import { NT } from "./currentScopes.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { tVr } from "./eventbuilder.js";
import { KH } from "./index_2.js";
import { mD } from "./inp.js";
import { eVr } from "./linkederrors.js";
import { Mie } from "./misc.js";
import { JGr, KWr, Mhn, Qdi, dkc, ehi, gLt, nqe, qH, shi, ukc } from "./qIc.js";
import { gI, mK } from "./scope.js";
import { Kce, pD, zH } from "./spanUtils.js";
import { SLt, w0 } from "./spanstatus.js";
import { Ehi, Fhn } from "./syncpromise.js";
import { GGr } from "./trace-info.js";
import { XB } from "./trace.js";
import { x } from "./tslib.es6.js";
import { Pig } from "./userAgent.js";
import { eJ } from "./utils_29.js";
function Dhn() {
    if (nGr) return;
    function e() {
        const t = mD(), n = t && pD(t);
        if (n) {
            const i = "internal_error";
            Qh && zr.log(`[Tracing] Root span: ${i} -> Global error occurred`), n.setStatus({
                code: w0,
                message: i
            });
        }
    }
    e.tag = "sentry_tracingErrorCallback", nGr = !0, Qdi(e), ehi(e);
}
var nGr;
function U3e(e) {
    return new Ehi((t)=>{
        t(e);
    });
}
function WGr(e, t) {
    return t ? XB(t, ()=>{
        const n = mD(), i = n ? KWr(n) : FWr(t);
        return [
            n ? Kce(n) : yhi(e, t),
            i
        ];
    }) : [
        void 0,
        void 0
    ];
}
function Ywc(e, t, n, i, r) {
    const s = {
        sent_at: new Date().toISOString()
    };
    n?.sdk && (s.sdk = {
        name: n.sdk.name,
        version: n.sdk.version
    }), i && r && (s.dsn = zce(r)), t && (s.trace = t);
    const o = Dig(e);
    return eJ(s, [
        o
    ]);
}
function Dig(e) {
    return [
        {
            type: "check_in"
        },
        e
    ];
}
function Mig(e) {
    const t = e._metadata?.sdk, n = t?.name && t?.version ? `${t?.name}/${t?.version}` : void 0;
    e.transportOptions = {
        ...e.transportOptions,
        headers: {
            ...n && {
                "user-agent": n
            },
            ...e.transportOptions?.headers
        }
    };
}
function Lig(e) {
    for(const t in e)if (Object.prototype.hasOwnProperty.call(e, t)) {
        const n = e[t];
        if (n instanceof Error) return n;
    }
}
function Nig(e) {
    if ("name" in e && typeof e.name == "string") {
        let i = `'${e.name}' captured as exception`;
        return "message" in e && typeof e.message == "string" && (i += ` with message '${e.message}'`), i;
    } else if ("message" in e && typeof e.message == "string") return e.message;
    const t = shi(e);
    if (gLt(e)) return `Event \`ErrorEvent\` captured as exception with message \`${e.message}\``;
    const n = Oig(e);
    return `${n && n !== "Object" ? `'${n}'` : "Object"} captured as exception with keys: ${t}`;
}
function Oig(e) {
    try {
        const t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0;
    } catch  {}
}
function Fig(e, t, n, i) {
    if (qke(n)) return [
        n,
        void 0
    ];
    if (t.synthetic = !0, mK(n)) {
        const s = e?.getOptions().normalizeDepth, o = {
            __serialized__: Mhn(n, s)
        }, a = Lig(n);
        if (a) return [
            a,
            o
        ];
        const c = Nig(n), l = i?.syntheticException || new Error(c);
        return l.message = c, [
            l,
            o
        ];
    }
    const r = i?.syntheticException || new Error(n);
    return r.message = `${n}`, [
        r,
        void 0
    ];
}
function Zwc(e, t, n, i) {
    const s = i?.data && i.data.mechanism || {
        handled: !0,
        type: "generic"
    }, [o, a] = Fig(e, s, n, i), c = {
        exception: {
            values: [
                eVr(t, o)
            ]
        }
    };
    return a && (c.extra = a), nqe(c, void 0, void 0), qH(c, s), {
        ...c,
        event_id: i?.event_id
    };
}
function Qwc(e, t, n = "info", i, r) {
    const s = {
        event_id: i?.event_id,
        level: n
    };
    if (r && i?.syntheticException) {
        const o = JGr(e, i.syntheticException);
        o.length && (s.exception = {
            values: [
                {
                    value: t,
                    stacktrace: {
                        frames: o
                    }
                }
            ]
        }, qH(s, {
            synthetic: !0
        }));
    }
    if (kdt(t)) {
        const { __sentry_template_string__: o, __sentry_template_values__: a } = t;
        return s.logentry = {
            message: o,
            params: a
        }, s;
    }
    return s.message = t, s;
}
function Jwc(e) {
    const t = fI().getScopeData().sdkProcessingMetadata.requestSession;
    if (t) {
        const n = e?.mechanism?.handled ?? !0;
        n && t.status !== "crashed" ? t.status = "errored" : n || (t.status = "crashed");
    }
}
var eCc;
export { Dhn, Dig, Fig, Jwc, Lig, Mig, Nig, Oig, Qwc, U3e, WGr, Ywc, Zwc, eCc, nGr };
var __wakaru_Eng_initialized = false;
export function Eng() {
if (__wakaru_Eng_initialized) return;
__wakaru_Eng_initialized = true;
"use strict";
x(), kE(), ukc(), dkc(), Xk(), zH(), SLt(), nGr = !1;

}
var __wakaru_Big_initialized = false;
export function Big() {
if (__wakaru_Big_initialized) return;
__wakaru_Big_initialized = true;
"use strict";
x(), Xwc(), Kwc(), NT(), kE(), KH(), Pig(), Xk(), tVr(), Mie(), Fhn(), GGr(), eCc = class extends Vhn {
    constructor(e){
        Dhn(), Mig(e), super(e);
    }
    eventFromException(e, t) {
        const n = Zwc(this, this._options.stackParser, e, t);
        return n.level = "error", U3e(n);
    }
    eventFromMessage(e, t = "info", n) {
        return U3e(Qwc(this._options.stackParser, e, t, n, this._options.attachStacktrace));
    }
    captureException(e, t, n) {
        return Jwc(t), super.captureException(e, t, n);
    }
    captureEvent(e, t, n) {
        return !e.type && e.exception?.values && e.exception.values.length > 0 && Jwc(t), super.captureEvent(e, t, n);
    }
    captureCheckIn(e, t, n) {
        const i = "checkInId" in e && e.checkInId ? e.checkInId : gI();
        if (!this._isEnabled()) return Qh && zr.warn("SDK not enabled, will not capture check-in."), i;
        const r = this.getOptions(), { release: s, environment: o, tunnel: a } = r, c = {
            check_in_id: i,
            monitor_slug: e.monitorSlug,
            status: e.status,
            release: s,
            environment: o
        };
        "duration" in e && (c.duration = e.duration), t && (c.monitor_config = {
            schedule: t.schedule,
            checkin_margin: t.checkinMargin,
            max_runtime: t.maxRuntime,
            timezone: t.timezone,
            failure_issue_threshold: t.failureIssueThreshold,
            recovery_threshold: t.recoveryThreshold
        });
        const [l, u] = WGr(this, n);
        u && (c.contexts = {
            trace: u
        });
        const h = Ywc(c, l, this.getSdkMetadata(), a, this.getDsn());
        return Qh && zr.log("Sending checkin:", e.monitorSlug, e.status), this.sendEnvelope(h), i;
    }
    _prepareEvent(e, t, n, i) {
        return this._options.platform && (e.platform = e.platform || this._options.platform), this._options.runtime && (e.contexts = {
            ...e.contexts,
            runtime: e.contexts?.runtime || this._options.runtime
        }), this._options.serverName && (e.server_name = e.server_name || this._options.serverName), super._prepareEvent(e, t, n, i);
    }
};

}
