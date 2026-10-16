import { gt, tt } from "./debug-build.js";
import { Ke, lt } from "./debug-logger.js";
import { CC, fn } from "./is.js";
import { OC } from "./merge.js";
import { es } from "./misc.js";
import { oo } from "./propagationContext.js";
import { dk } from "./session.js";
import { Sc, gk } from "./spanOnScope.js";
import { Cp } from "./spanUtils.js";
import { Ui } from "./string.js";
import { DC, us } from "./time.js";
import { h } from "./tslib.es6.js";
import { Ot } from "./worldwide.js";
function bC(e, t) {
    return CC.call(e) === `[object ${t}]`;
}
function ok(e) {
    return bC(e, "Object");
}
function ao(e, t, n) {
    try {
        Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        });
    } catch  {
        tt && lt.log(`Failed to add non-enumerable property "${t}" to object`, e);
    }
}
function AC(e, t = 0) {
    return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function _3e() {
    const e = Ot;
    return e.crypto || e.msCrypto;
}
function v3e() {
    return Math.random() * 16;
}
function md(e = _3e()) {
    try {
        if (e?.randomUUID) return e.randomUUID().replace(/-/g, "");
    } catch  {}
    return PC || (PC = "10000000100040008000" + 1e11), PC.replace(/[018]/g, (t)=>(t ^ (v3e() & 15) >> t / 4).toString(16));
}
var PC;
function NC() {
    return Date.now() / DC;
}
function k3e(e, t = {}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || Cp(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : md()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
    else if (typeof t.duration == "number") e.duration = t.duration;
    else {
        const n = e.timestamp - e.started;
        e.duration = n >= 0 ? n : 0;
    }
    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function uk(e, t, n = 2) {
    if (!t || typeof t != "object" || n <= 0) return t;
    if (e && Object.keys(t).length === 0) return e;
    const r = {
        ...e
    };
    for(const s in t)Object.prototype.hasOwnProperty.call(t, s) && (r[s] = uk(r[s], t[s], n - 1));
    return r;
}
function mk() {
    return md();
}
function hk(e, t) {
    t ? ao(e, gk, t) : delete e[gk];
}
function Ip(e) {
    return e[gk];
}
var E8, yc;
export { AC, E8, Ip, NC, PC, _3e, ao, bC, hk, k3e, md, mk, ok, uk, v3e, yc };
var __wakaru_Ap_initialized = false;
export function Ap() {
if (__wakaru_Ap_initialized) return;
__wakaru_Ap_initialized = true;
"use strict";
h(), gt(), dk(), Ke(), fn(), OC(), es(), oo(), Sc(), Ui(), us(), E8 = 100, yc = class bx {
    constructor(){
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: mk(),
            sampleRand: Math.random()
        };
    }
    clone() {
        const t = new bx;
        return t._breadcrumbs = [
            ...this._breadcrumbs
        ], t._tags = {
            ...this._tags
        }, t._extra = {
            ...this._extra
        }, t._contexts = {
            ...this._contexts
        }, this._contexts.flags && (t._contexts.flags = {
            values: [
                ...this._contexts.flags.values
            ]
        }), t._user = this._user, t._level = this._level, t._session = this._session, t._transactionName = this._transactionName, t._fingerprint = this._fingerprint, t._eventProcessors = [
            ...this._eventProcessors
        ], t._attachments = [
            ...this._attachments
        ], t._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        }, t._propagationContext = {
            ...this._propagationContext
        }, t._client = this._client, t._lastEventId = this._lastEventId, hk(t, Ip(this)), t;
    }
    setClient(t) {
        this._client = t;
    }
    setLastEventId(t) {
        this._lastEventId = t;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(t) {
        this._scopeListeners.push(t);
    }
    addEventProcessor(t) {
        return this._eventProcessors.push(t), this;
    }
    setUser(t) {
        return this._user = t || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        }, this._session && k3e(this._session, {
            user: t
        }), this._notifyScopeListeners(), this;
    }
    getUser() {
        return this._user;
    }
    setTags(t) {
        return this._tags = {
            ...this._tags,
            ...t
        }, this._notifyScopeListeners(), this;
    }
    setTag(t, n) {
        return this._tags = {
            ...this._tags,
            [t]: n
        }, this._notifyScopeListeners(), this;
    }
    setExtras(t) {
        return this._extra = {
            ...this._extra,
            ...t
        }, this._notifyScopeListeners(), this;
    }
    setExtra(t, n) {
        return this._extra = {
            ...this._extra,
            [t]: n
        }, this._notifyScopeListeners(), this;
    }
    setFingerprint(t) {
        return this._fingerprint = t, this._notifyScopeListeners(), this;
    }
    setLevel(t) {
        return this._level = t, this._notifyScopeListeners(), this;
    }
    setTransactionName(t) {
        return this._transactionName = t, this._notifyScopeListeners(), this;
    }
    setContext(t, n) {
        return n === null ? delete this._contexts[t] : this._contexts[t] = n, this._notifyScopeListeners(), this;
    }
    setSession(t) {
        return t ? this._session = t : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(t) {
        if (!t) return this;
        const n = typeof t == "function" ? t(this) : t, r = n instanceof bx ? n.getScopeData() : ok(n) ? t : void 0, { tags: s, extra: i, user: a, contexts: o, level: l, fingerprint: d = [], propagationContext: u } = r || {};
        return this._tags = {
            ...this._tags,
            ...s
        }, this._extra = {
            ...this._extra,
            ...i
        }, this._contexts = {
            ...this._contexts,
            ...o
        }, a && Object.keys(a).length && (this._user = a), l && (this._level = l), d.length && (this._fingerprint = d), u && (this._propagationContext = u), this;
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, hk(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: mk(),
            sampleRand: Math.random()
        }), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(t, n) {
        const r = typeof n == "number" ? n : E8;
        if (r <= 0) return this;
        const s = {
            timestamp: NC(),
            ...t,
            message: t.message ? AC(t.message, 2048) : t.message
        };
        return this._breadcrumbs.push(s), this._breadcrumbs.length > r && (this._breadcrumbs = this._breadcrumbs.slice(-r), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(t) {
        return this._attachments.push(t), this;
    }
    clearAttachments() {
        return this._attachments = [], this;
    }
    getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: Ip(this)
        };
    }
    setSDKProcessingMetadata(t) {
        return this._sdkProcessingMetadata = uk(this._sdkProcessingMetadata, t, 2), this;
    }
    setPropagationContext(t) {
        return this._propagationContext = t, this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(t, n) {
        const r = n?.event_id || md();
        if (!this._client) return tt && lt.warn("No client configured on scope - will not capture exception!"), r;
        const s = new Error("Sentry syntheticException");
        return this._client.captureException(t, {
            originalException: t,
            syntheticException: s,
            ...n,
            event_id: r
        }, this), r;
    }
    captureMessage(t, n, r) {
        const s = r?.event_id || md();
        if (!this._client) return tt && lt.warn("No client configured on scope - will not capture message!"), s;
        const i = new Error(t);
        return this._client.captureMessage(t, n, {
            originalException: t,
            syntheticException: i,
            ...r,
            event_id: s
        }, this), s;
    }
    captureEvent(t, n) {
        const r = n?.event_id || md();
        return this._client ? (this._client.captureEvent(t, {
            ...n,
            event_id: r
        }, this), r) : (tt && lt.warn("No client configured on scope - will not capture event!"), r);
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t)=>{
            t(this);
        }), this._notifyingListeners = !1);
    }
};

}
