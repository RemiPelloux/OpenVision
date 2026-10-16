import { yOe } from "./Iwo.js";
import { Kdr, MHu, N1o, PHu, QYn, Uko, Xdr, _vt, cQ, thr, yun } from "./SZu.js";
import { vGu } from "./checkin.js";
import { _Ft, _M, fhr, fke, gGu, uXn, w1o } from "./client.js";
import { JA } from "./currentScopes.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { $ko } from "./eventbuilder.js";
import { dQ } from "./index_2.js";
import { eL } from "./inp.js";
import { jko } from "./linkederrors.js";
import { uve } from "./misc.js";
import { vM, xse } from "./scope.js";
import { JN, uQ, vke } from "./spanUtils.js";
import { Eun, TI } from "./spanstatus.js";
import { iXn, khr } from "./syncpromise.js";
import { Ako } from "./trace-info.js";
import { s7 } from "./trace.js";
import { Cde } from "./traceLifecycleProfiler.js";
import { E } from "./tslib.es6.js";
import { bhy } from "./userAgent.js";
function ZYn() {
    if (H1o) return;
    function t() {
        const e = eL(), n = e && JN(e);
        if (n) {
            const i = "internal_error";
            rg && so.log(`[Tracing] Root span: ${i} -> Global error occurred`), n.setStatus({
                code: TI,
                message: i
            });
        }
    }
    t.tag = "sentry_tracingErrorCallback", H1o = !0, Kdr(t), Xdr(t);
}
var H1o;
function oet(t) {
    return new khr((e)=>{
        e(t);
    });
}
function xko(t, e) {
    return e ? s7(e, ()=>{
        const n = eL(), i = n ? N1o(n) : w1o(e);
        return [
            n ? vke(n) : fhr(t, e),
            i
        ];
    }) : [
        void 0,
        void 0
    ];
}
function fGu(t, e, n, i, r) {
    const s = {
        sent_at: new Date().toISOString()
    };
    n?.sdk && (s.sdk = {
        name: n.sdk.name,
        version: n.sdk.version
    }), i && r && (s.dsn = fke(r)), e && (s.trace = e);
    const o = vhy(t);
    return Cde(s, [
        o
    ]);
}
function vhy(t) {
    return [
        {
            type: "check_in"
        },
        t
    ];
}
function _hy(t) {
    const e = t._metadata?.sdk, n = e?.name && e?.version ? `${e?.name}/${e?.version}` : void 0;
    t.transportOptions = {
        ...t.transportOptions,
        headers: {
            ...n && {
                "user-agent": n
            },
            ...t.transportOptions?.headers
        }
    };
}
function yhy(t) {
    for(const e in t)if (Object.prototype.hasOwnProperty.call(t, e)) {
        const n = t[e];
        if (n instanceof Error) return n;
    }
}
function Shy(t) {
    if ("name" in t && typeof t.name == "string") {
        let i = `'${t.name}' captured as exception`;
        return "message" in t && typeof t.message == "string" && (i += ` with message '${t.message}'`), i;
    } else if ("message" in t && typeof t.message == "string") return t.message;
    const e = thr(t);
    if (yun(t)) return `Event \`ErrorEvent\` captured as exception with message \`${t.message}\``;
    const n = khy(t);
    return `${n && n !== "Object" ? `'${n}'` : "Object"} captured as exception with keys: ${e}`;
}
function khy(t) {
    try {
        const e = Object.getPrototypeOf(t);
        return e ? e.constructor.name : void 0;
    } catch  {}
}
function why(t, e, n, i) {
    if (yOe(n)) return [
        n,
        void 0
    ];
    if (e.synthetic = !0, xse(n)) {
        const s = t?.getOptions().normalizeDepth, o = {
            __serialized__: QYn(n, s)
        }, a = yhy(n);
        if (a) return [
            a,
            o
        ];
        const l = Shy(n), c = i?.syntheticException || new Error(l);
        return c.message = l, [
            c,
            o
        ];
    }
    const r = i?.syntheticException || new Error(n);
    return r.message = `${n}`, [
        r,
        void 0
    ];
}
function _Gu(t, e, n, i) {
    const s = i?.data && i.data.mechanism || {
        handled: !0,
        type: "generic"
    }, [o, a] = why(t, s, n, i), l = {
        exception: {
            values: [
                jko(e, o)
            ]
        }
    };
    return a && (l.extra = a), _vt(l, void 0, void 0), cQ(l, s), {
        ...l,
        event_id: i?.event_id
    };
}
function bGu(t, e, n = "info", i, r) {
    const s = {
        event_id: i?.event_id,
        level: n
    };
    if (r && i?.syntheticException) {
        const o = Uko(t, i.syntheticException);
        o.length && (s.exception = {
            values: [
                {
                    value: e,
                    stacktrace: {
                        frames: o
                    }
                }
            ]
        }, cQ(s, {
            synthetic: !0
        }));
    }
    if (_Ft(e)) {
        const { __sentry_template_string__: o, __sentry_template_values__: a } = e;
        return s.logentry = {
            message: o,
            params: a
        }, s;
    }
    return s.message = e, s;
}
function yGu(t) {
    const e = _M().getScopeData().sdkProcessingMetadata.requestSession;
    if (e) {
        const n = t?.mechanism?.handled ?? !0;
        n && e.status !== "crashed" ? e.status = "errored" : n || (e.status = "crashed");
    }
}
var SGu;
export { H1o, SGu, Shy, ZYn, _Gu, _hy, bGu, fGu, khy, oet, vhy, why, xko, yGu, yhy };
var __wakaru_hdy_initialized = false;
export function hdy() {
if (__wakaru_hdy_initialized) return;
__wakaru_hdy_initialized = true;
"use strict";
E(), qR(), PHu(), MHu(), JC(), uQ(), Eun(), H1o = !1;

}
var __wakaru_Chy_initialized = false;
export function Chy() {
if (__wakaru_Chy_initialized) return;
__wakaru_Chy_initialized = true;
"use strict";
E(), vGu(), gGu(), JA(), qR(), dQ(), bhy(), JC(), $ko(), uve(), iXn(), Ako(), SGu = class extends uXn {
    constructor(t){
        ZYn(), _hy(t), super(t);
    }
    eventFromException(t, e) {
        const n = _Gu(this, this._options.stackParser, t, e);
        return n.level = "error", oet(n);
    }
    eventFromMessage(t, e = "info", n) {
        return oet(bGu(this._options.stackParser, t, e, n, this._options.attachStacktrace));
    }
    captureException(t, e, n) {
        return yGu(e), super.captureException(t, e, n);
    }
    captureEvent(t, e, n) {
        return !t.type && t.exception?.values && t.exception.values.length > 0 && yGu(e), super.captureEvent(t, e, n);
    }
    captureCheckIn(t, e, n) {
        const i = "checkInId" in t && t.checkInId ? t.checkInId : vM();
        if (!this._isEnabled()) return rg && so.warn("SDK not enabled, will not capture check-in."), i;
        const r = this.getOptions(), { release: s, environment: o, tunnel: a } = r, l = {
            check_in_id: i,
            monitor_slug: t.monitorSlug,
            status: t.status,
            release: s,
            environment: o
        };
        "duration" in t && (l.duration = t.duration), e && (l.monitor_config = {
            schedule: e.schedule,
            checkin_margin: e.checkinMargin,
            max_runtime: e.maxRuntime,
            timezone: e.timezone,
            failure_issue_threshold: e.failureIssueThreshold,
            recovery_threshold: e.recoveryThreshold
        });
        const [c, u] = xko(this, n);
        u && (l.contexts = {
            trace: u
        });
        const d = fGu(l, c, this.getSdkMetadata(), a, this.getDsn());
        return rg && so.log("Sending checkin:", t.monitorSlug, t.status), this.sendEnvelope(d), i;
    }
    _prepareEvent(t, e, n, i) {
        return this._options.platform && (t.platform = t.platform || this._options.platform), this._options.runtime && (t.contexts = {
            ...t.contexts,
            runtime: t.contexts?.runtime || this._options.runtime
        }), this._options.serverName && (t.server_name = t.server_name || this._options.serverName), super._prepareEvent(t, e, n, i);
    }
};

}
