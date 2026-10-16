import { jH, mLt } from "./HVr.js";
import { Qh, kE } from "./debug-build.js";
import { Xk, zr } from "./debug-logger.js";
import { YB } from "./is.js";
import { OWr } from "./merge.js";
import { Mie } from "./misc.js";
import { iqe } from "./propagationContext.js";
import { ahi } from "./session.js";
import { Cdt, chi } from "./spanOnScope.js";
import { sR } from "./spanUtils.js";
import { oAe } from "./string.js";
import { LWr, Vce } from "./time.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
function mK(e) {
    return mLt(e, "Object");
}
function vLt(e, t = 0) {
    return typeof e != "string" || t === 0 || e.length <= t ? e : `${e.slice(0, t)}...`;
}
function ing() {
    const e = Og;
    return e.crypto || e.msCrypto;
}
function rng() {
    return Math.random() * 16;
}
function gI(e = ing()) {
    try {
        if (e?.randomUUID) return e.randomUUID().replace(/-/g, "");
    } catch  {}
    return PWr || (PWr = "10000000100040008000" + 1e11), PWr.replace(/[018]/g, (t)=>(t ^ (rng() & 15) >> t / 4).toString(16));
}
var PWr;
function aAe() {
    return Date.now() / LWr;
}
function wdt(e, t = {}) {
    if (t.user && (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address), !e.did && !t.did && (e.did = t.user.id || t.user.email || t.user.username)), e.timestamp = t.timestamp || sR(), t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism), t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration), t.sid && (e.sid = t.sid.length === 32 ? t.sid : gI()), t.init !== void 0 && (e.init = t.init), !e.did && t.did && (e.did = `${t.did}`), typeof t.started == "number" && (e.started = t.started), e.ignoreDuration) e.duration = void 0;
    else if (typeof t.duration == "number") e.duration = t.duration;
    else {
        const n = e.timestamp - e.started;
        e.duration = n >= 0 ? n : 0;
    }
    t.release && (e.release = t.release), t.environment && (e.environment = t.environment), !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress), !e.userAgent && t.userAgent && (e.userAgent = t.userAgent), typeof t.errors == "number" && (e.errors = t.errors), t.status && (e.status = t.status);
}
function _hn(e, t, n = 2) {
    if (!t || typeof t != "object" || n <= 0) return t;
    if (e && Object.keys(t).length === 0) return e;
    const i = {
        ...e
    };
    for(const r in t)Object.prototype.hasOwnProperty.call(t, r) && (i[r] = _hn(i[r], t[r], n - 1));
    return i;
}
function jce() {
    return gI();
}
function nge(e, t) {
    t ? jH(e, chi, t) : delete e[chi];
}
function _Lt(e) {
    return e[chi];
}
var Ekc, zke;
export { Ekc, PWr, _Lt, _hn, aAe, gI, ing, jce, mK, nge, rng, vLt, wdt, zke };
var __wakaru_bhn_initialized = false;
export function bhn() {
if (__wakaru_bhn_initialized) return;
__wakaru_bhn_initialized = true;
"use strict";
x(), kE(), ahi(), Xk(), YB(), OWr(), Mie(), iqe(), Cdt(), oAe(), Vce(), Ekc = 100, zke = class eIa {
    constructor(){
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: jce(),
            sampleRand: Math.random()
        };
    }
    clone() {
        const t = new eIa;
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
        }, t._client = this._client, t._lastEventId = this._lastEventId, nge(t, _Lt(this)), t;
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
        }, this._session && wdt(this._session, {
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
        const n = typeof t == "function" ? t(this) : t, i = n instanceof eIa ? n.getScopeData() : mK(n) ? t : void 0, { tags: r, extra: s, user: o, contexts: a, level: c, fingerprint: l = [], propagationContext: u } = i || {};
        return this._tags = {
            ...this._tags,
            ...r
        }, this._extra = {
            ...this._extra,
            ...s
        }, this._contexts = {
            ...this._contexts,
            ...a
        }, o && Object.keys(o).length && (this._user = o), c && (this._level = c), l.length && (this._fingerprint = l), u && (this._propagationContext = u), this;
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, nge(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: jce(),
            sampleRand: Math.random()
        }), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(t, n) {
        const i = typeof n == "number" ? n : Ekc;
        if (i <= 0) return this;
        const r = {
            timestamp: aAe(),
            ...t,
            message: t.message ? vLt(t.message, 2048) : t.message
        };
        return this._breadcrumbs.push(r), this._breadcrumbs.length > i && (this._breadcrumbs = this._breadcrumbs.slice(-i), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
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
            span: _Lt(this)
        };
    }
    setSDKProcessingMetadata(t) {
        return this._sdkProcessingMetadata = _hn(this._sdkProcessingMetadata, t, 2), this;
    }
    setPropagationContext(t) {
        return this._propagationContext = t, this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(t, n) {
        const i = n?.event_id || gI();
        if (!this._client) return Qh && zr.warn("No client configured on scope - will not capture exception!"), i;
        const r = new Error("Sentry syntheticException");
        return this._client.captureException(t, {
            originalException: t,
            syntheticException: r,
            ...n,
            event_id: i
        }, this), i;
    }
    captureMessage(t, n, i) {
        const r = i?.event_id || gI();
        if (!this._client) return Qh && zr.warn("No client configured on scope - will not capture message!"), r;
        const s = new Error(t);
        return this._client.captureMessage(t, n, {
            originalException: t,
            syntheticException: s,
            ...i,
            event_id: r
        }, this), r;
    }
    captureEvent(t, n) {
        const i = n?.event_id || gI();
        return this._client ? (this._client.captureEvent(t, {
            ...n,
            event_id: i
        }, this), i) : (Qh && zr.warn("No client configured on scope - will not capture event!"), i);
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((t)=>{
            t(this);
        }), this._notifyingListeners = !1);
    }
};

}
