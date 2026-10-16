import { bun, lQ } from "./Iwo.js";
import { qR, rg } from "./debug-build.js";
import { JC, so } from "./debug-logger.js";
import { _j } from "./is.js";
import { k1o } from "./merge.js";
import { uve } from "./misc.js";
import { bvt } from "./propagationContext.js";
import { ihr } from "./session.js";
import { rhr, yFt } from "./spanOnScope.js";
import { M3 } from "./spanUtils.js";
import { Wje } from "./string.js";
import { pke, y1o } from "./time.js";
import { E } from "./tslib.es6.js";
import { o_ } from "./worldwide.js";
function xse(t) {
    return bun(t, "Object");
}
function kun(t, e = 0) {
    return typeof t != "string" || e === 0 || t.length <= e ? t : `${t.slice(0, e)}...`;
}
function Wuy() {
    const t = o_;
    return t.crypto || t.msCrypto;
}
function Guy() {
    return Math.random() * 16;
}
function vM(t = Wuy()) {
    try {
        if (t?.randomUUID) return t.randomUUID().replace(/-/g, "");
    } catch  {}
    return b1o || (b1o = "10000000100040008000" + 1e11), b1o.replace(/[018]/g, (e)=>(e ^ (Guy() & 15) >> e / 4).toString(16));
}
var b1o;
function Gje() {
    return Date.now() / y1o;
}
function bFt(t, e = {}) {
    if (e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), !t.did && !e.did && (t.did = e.user.id || e.user.email || e.user.username)), t.timestamp = e.timestamp || M3(), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = e.sid.length === 32 ? e.sid : vM()), e.init !== void 0 && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), typeof e.started == "number" && (t.started = e.started), t.ignoreDuration) t.duration = void 0;
    else if (typeof e.duration == "number") t.duration = e.duration;
    else {
        const n = t.timestamp - t.started;
        t.duration = n >= 0 ? n : 0;
    }
    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), typeof e.errors == "number" && (t.errors = e.errors), e.status && (t.status = e.status);
}
function BYn(t, e, n = 2) {
    if (!e || typeof e != "object" || n <= 0) return e;
    if (t && Object.keys(e).length === 0) return t;
    const i = {
        ...t
    };
    for(const r in e)Object.prototype.hasOwnProperty.call(e, r) && (i[r] = BYn(i[r], e[r], n - 1));
    return i;
}
function mke() {
    return vM();
}
function Hxe(t, e) {
    e ? lQ(t, rhr, e) : delete t[rhr];
}
function wun(t) {
    return t[rhr];
}
var VHu, SOe;
export { BYn, Gje, Guy, Hxe, SOe, VHu, Wuy, b1o, bFt, kun, mke, vM, wun, xse };
var __wakaru_UYn_initialized = false;
export function UYn() {
if (__wakaru_UYn_initialized) return;
__wakaru_UYn_initialized = true;
"use strict";
E(), qR(), ihr(), JC(), _j(), k1o(), uve(), bvt(), yFt(), Wje(), pke(), VHu = 100, SOe = class LQc {
    constructor(){
        this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._attachments = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}, this._sdkProcessingMetadata = {}, this._propagationContext = {
            traceId: mke(),
            sampleRand: Math.random()
        };
    }
    clone() {
        const e = new LQc;
        return e._breadcrumbs = [
            ...this._breadcrumbs
        ], e._tags = {
            ...this._tags
        }, e._extra = {
            ...this._extra
        }, e._contexts = {
            ...this._contexts
        }, this._contexts.flags && (e._contexts.flags = {
            values: [
                ...this._contexts.flags.values
            ]
        }), e._user = this._user, e._level = this._level, e._session = this._session, e._transactionName = this._transactionName, e._fingerprint = this._fingerprint, e._eventProcessors = [
            ...this._eventProcessors
        ], e._attachments = [
            ...this._attachments
        ], e._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        }, e._propagationContext = {
            ...this._propagationContext
        }, e._client = this._client, e._lastEventId = this._lastEventId, Hxe(e, wun(this)), e;
    }
    setClient(e) {
        this._client = e;
    }
    setLastEventId(e) {
        this._lastEventId = e;
    }
    getClient() {
        return this._client;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addScopeListener(e) {
        this._scopeListeners.push(e);
    }
    addEventProcessor(e) {
        return this._eventProcessors.push(e), this;
    }
    setUser(e) {
        return this._user = e || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        }, this._session && bFt(this._session, {
            user: e
        }), this._notifyScopeListeners(), this;
    }
    getUser() {
        return this._user;
    }
    setTags(e) {
        return this._tags = {
            ...this._tags,
            ...e
        }, this._notifyScopeListeners(), this;
    }
    setTag(e, n) {
        return this._tags = {
            ...this._tags,
            [e]: n
        }, this._notifyScopeListeners(), this;
    }
    setExtras(e) {
        return this._extra = {
            ...this._extra,
            ...e
        }, this._notifyScopeListeners(), this;
    }
    setExtra(e, n) {
        return this._extra = {
            ...this._extra,
            [e]: n
        }, this._notifyScopeListeners(), this;
    }
    setFingerprint(e) {
        return this._fingerprint = e, this._notifyScopeListeners(), this;
    }
    setLevel(e) {
        return this._level = e, this._notifyScopeListeners(), this;
    }
    setTransactionName(e) {
        return this._transactionName = e, this._notifyScopeListeners(), this;
    }
    setContext(e, n) {
        return n === null ? delete this._contexts[e] : this._contexts[e] = n, this._notifyScopeListeners(), this;
    }
    setSession(e) {
        return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this;
    }
    getSession() {
        return this._session;
    }
    update(e) {
        if (!e) return this;
        const n = typeof e == "function" ? e(this) : e, i = n instanceof LQc ? n.getScopeData() : xse(n) ? e : void 0, { tags: r, extra: s, user: o, contexts: a, level: l, fingerprint: c = [], propagationContext: u } = i || {};
        return this._tags = {
            ...this._tags,
            ...r
        }, this._extra = {
            ...this._extra,
            ...s
        }, this._contexts = {
            ...this._contexts,
            ...a
        }, o && Object.keys(o).length && (this._user = o), l && (this._level = l), c.length && (this._fingerprint = c), u && (this._propagationContext = u), this;
    }
    clear() {
        return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._session = void 0, Hxe(this, void 0), this._attachments = [], this.setPropagationContext({
            traceId: mke(),
            sampleRand: Math.random()
        }), this._notifyScopeListeners(), this;
    }
    addBreadcrumb(e, n) {
        const i = typeof n == "number" ? n : VHu;
        if (i <= 0) return this;
        const r = {
            timestamp: Gje(),
            ...e,
            message: e.message ? kun(e.message, 2048) : e.message
        };
        return this._breadcrumbs.push(r), this._breadcrumbs.length > i && (this._breadcrumbs = this._breadcrumbs.slice(-i), this._client?.recordDroppedEvent("buffer_overflow", "log_item")), this._notifyScopeListeners(), this;
    }
    getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    clearBreadcrumbs() {
        return this._breadcrumbs = [], this._notifyScopeListeners(), this;
    }
    addAttachment(e) {
        return this._attachments.push(e), this;
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
            span: wun(this)
        };
    }
    setSDKProcessingMetadata(e) {
        return this._sdkProcessingMetadata = BYn(this._sdkProcessingMetadata, e, 2), this;
    }
    setPropagationContext(e) {
        return this._propagationContext = e, this;
    }
    getPropagationContext() {
        return this._propagationContext;
    }
    captureException(e, n) {
        const i = n?.event_id || vM();
        if (!this._client) return rg && so.warn("No client configured on scope - will not capture exception!"), i;
        const r = new Error("Sentry syntheticException");
        return this._client.captureException(e, {
            originalException: e,
            syntheticException: r,
            ...n,
            event_id: i
        }, this), i;
    }
    captureMessage(e, n, i) {
        const r = i?.event_id || vM();
        if (!this._client) return rg && so.warn("No client configured on scope - will not capture message!"), r;
        const s = new Error(e);
        return this._client.captureMessage(e, n, {
            originalException: e,
            syntheticException: s,
            ...i,
            event_id: r
        }, this), r;
    }
    captureEvent(e, n) {
        const i = n?.event_id || vM();
        return this._client ? (this._client.captureEvent(e, {
            ...n,
            event_id: i
        }, this), i) : (rg && so.warn("No client configured on scope - will not capture event!"), i);
    }
    _notifyScopeListeners() {
        this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((e)=>{
            e(this);
        }), this._notifyingListeners = !1);
    }
};

}
