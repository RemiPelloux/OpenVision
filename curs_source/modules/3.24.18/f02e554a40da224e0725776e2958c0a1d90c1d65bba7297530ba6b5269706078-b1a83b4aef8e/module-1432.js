"use strict";
var n = this && this.__importDefault || function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PrivateInferenceHttpGuard = exports.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = exports.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = exports.PrivateInferenceEgressRefusedError = exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = void 0, exports.isPrivateInferenceEgressRefusedError = function(t) {
    return t instanceof Error && "code" in t && t.code === exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
}, exports.isCursorControlPlanePath = d, exports.installPrivateInferenceHttpGuard = function(t = {}) {
    const e = globalThis, r = e[h];
    if (void 0 !== r) return r.contribute(t), r;
    const n = new g(t);
    return e[h] = n, n.install(), n;
}, exports.getPrivateInferenceHttpGuard = function() {
    return globalThis[h];
}, exports.combinePrivateInferenceEnablements = _;
const s = n(require("./module-7067.js")), i = n(require("./module-2467.js")), o = n(require("./module-4708.js")), a = require("./module-8995.js"), u = require("./module-2642.js"), c = require("./module-5218.js");
exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = "ERR_PRIVATE_INFERENCE_EGRESS_REFUSED";
class l extends Error {
    constructor(t, r){
        super(void 0 === t ? `private inference lockdown: ${r} egress to an unparseable target is refused` : `private inference lockdown: ${r} egress to ${t} is refused`), this.host = t, this.initiator = r, this.name = "PrivateInferenceEgressRefusedError", this.code = exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
    }
}
exports.PrivateInferenceEgressRefusedError = l, exports.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = {
    downloads: "downloads.cursor.com",
    marketplace: "marketplace.cursorapi.com"
};
const m = /^\/([a-z][a-z0-9_]*(?:\.[a-z0-9_]+)*\.[A-Z][A-Za-z0-9_]*)\/([A-Z][A-Za-z0-9_]*)$/;
function d(t, e = "enabled") {
    const r = m.exec(t);
    if (null === r) return !1;
    const [, n, s] = r;
    return void 0 !== n && void 0 !== s && (0, c.isPrivateInferenceRpcAllowedInState)(e, n, s);
}
exports.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = "CURSOR_PRIVATE_INFERENCE_ALLOW_HOSTS";
const f = new Set([
    "data:",
    "blob:",
    "file:"
]), p = {
    "http:": "80",
    "ws:": "80",
    "https:": "443",
    "wss:": "443"
}, h = Symbol.for("anysphere.cursor-network.privateInferenceHttpGuard");
class g {
    constructor(t = {}){
        this.lockdownSources = [], this.lockdownSubscriptions = [], this.cursorBackendUrlProviders = [], this.allowedHosts = new Set, this.logs = [], this.refusalListeners = [], this.loggedRefusals = new Set, this.allowLoopback = t.allowLoopback ?? !0;
        const r = t.env ?? process.env;
        for (const t of (r[exports.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV] ?? "").split(","))this.allowHost(t);
        this.contribute(t);
    }
    contribute(t) {
        void 0 === t.enablement || this.lockdownSources.includes(t.enablement) || (this.lockdownSources.push(t.enablement), this.lockdownSubscriptions.push(t.enablement.onDidChange(()=>this.logStateIfChanged())), this.logStateIfChanged()), void 0 !== t.cursorBackendUrls && this.cursorBackendUrlProviders.push(t.cursorBackendUrls);
        for (const e of t.optionalHosts ?? [])this.allowHost(e);
        void 0 === t.log || this.logs.includes(t.log) || this.logs.push(t.log), void 0 !== t.onRefused && this.refusalListeners.push(t.onRefused);
    }
    get lockdownState() {
        return _(this.lockdownSources.map((t)=>t.state));
    }
    isActive() {
        return (0, u.isPrivateInferenceLockedDown)(this.lockdownState);
    }
    logStateIfChanged() {
        const t = this.lockdownState;
        t !== this.lastLoggedState && (this.lastLoggedState = t, this.info(`[PrivateInferenceHttpGuard] lockdown ${t}`));
    }
    allowBaseUrl(t) {
        const e = J(S(t));
        void 0 !== e && this.allowedHosts.add(e);
    }
    allowHost(t) {
        const e = t.trim();
        if (0 === e.length) return;
        if (/:\d+$/.test(e) && !e.startsWith("[")) {
            const t = J(S(`https://${e}/`));
            return void (void 0 !== t && this.allowedHosts.add(t));
        }
        for (const t of [
            "http:",
            "https:"
        ]){
            const r = J(S(`${t}//${e}/`));
            void 0 !== r && this.allowedHosts.add(r);
        }
    }
    allowsTarget(t, e = {}) {
        const r = void 0 === t ? void 0 : S(t);
        if (void 0 === r) return !1;
        if (f.has(r.protocol)) return !0;
        const n = J(r);
        return void 0 !== n && (!!(this.allowLoopback && (i = n, s = i.slice(0, i.lastIndexOf(":")), "localhost" === s || s.endsWith(".localhost") || "::1" === s || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s))) || !!this.allowedHosts.has(n) || !!this.isCursorBackendHost(n) && (!1 === e.pathKnown || d(r.pathname, this.lockdownState)));
        var s, i;
    }
    isCursorBackendHost(t) {
        for (const e of this.cursorBackendUrlProviders)for (const r of e())if (void 0 !== r && J(S(r)) === t) return !0;
        return !1;
    }
    check(t, e) {
        if (!this.isActive() || this.allowsTarget(t, {
            pathKnown: "http2.connect" !== e
        })) return;
        const r = void 0 === t ? void 0 : S(t), n = void 0 === r ? void 0 : J(r);
        throw this.reportRefusal({
            host: n,
            initiator: e,
            stackHint: E()
        }), new l(n, e);
    }
    install() {
        if (void 0 !== this.restore) return;
        const t = [], e = globalThis.fetch, r = (t, r)=>{
            try {
                this.check(function(t) {
                    if ("string" == typeof t || t instanceof URL) return t;
                    if (null !== t && "object" == typeof t && "url" in t && "string" == typeof t.url) return t.url;
                    return;
                }(t), "fetch");
            } catch (t) {
                return Promise.reject(t);
            }
            return e.call(globalThis, t, r);
        };
        globalThis.fetch = r, t.push(()=>{
            globalThis.fetch === r && (globalThis.fetch = e);
        }), t.push(this.patchHttpModule(s.default, "http")), t.push(this.patchHttpModule(o.default, "https"));
        const n = i.default.connect, u = (t, e, r)=>{
            const s = "string" == typeof t || t instanceof URL ? t : void 0;
            this.check(s, "http2.connect");
            const o = n.call(i.default, t, e, r);
            return this.guardHttp2Session(o, s), o;
        };
        i.default.connect = u, t.push(()=>{
            i.default.connect === u && (i.default.connect = n);
        }), (0, a.syncBuiltinESMExports)(), this.restore = ()=>{
            for (const e of t)e();
            (0, a.syncBuiltinESMExports)();
        }, this.info(`[PrivateInferenceHttpGuard] installed (lockdown ${this.lockdownState})`);
    }
    dispose() {
        this.restore?.(), this.restore = void 0;
        for (const t of this.lockdownSubscriptions)t.dispose();
        this.lockdownSubscriptions.length = 0;
        const t = globalThis;
        t[h] === this && delete t[h];
    }
    guardHttp2Session(t, e) {
        const r = void 0 === e ? void 0 : S(e);
        if (void 0 === r) return;
        const n = t.request;
        t.request = (e, s)=>{
            const i = function(t) {
                if (Array.isArray(t)) {
                    for(let e = 0; e + 1 < t.length; e += 2)if (":path" === t[e] && "string" == typeof t[e + 1]) return t[e + 1];
                    return;
                }
                if (null !== t && "object" == typeof t) {
                    const e = t[":path"];
                    return "string" == typeof e ? e : void 0;
                }
                return;
            }(e);
            let o;
            if ("string" == typeof i) try {
                o = new URL(i, r);
            } catch  {
                o = void 0;
            }
            return this.check(o, "http2.request"), n.call(t, e, s);
        };
    }
    patchHttpModule(t, e) {
        const r = `${e}:`, n = t.request, s = t.get, i = (...s)=>(this.check(w(s, r), `${e}.request`), n.apply(t, s)), o = (...n)=>(this.check(w(n, r), `${e}.get`), s.apply(t, n));
        return t.request = i, t.get = o, ()=>{
            t.request === i && (t.request = n), t.get === o && (t.get = s);
        };
    }
    reportRefusal(t) {
        const e = `${t.initiator} ${t.host ?? "<unparseable>"}`, r = `[PrivateInferenceHttpGuard] refused host=${t.host ?? "<unparseable>"} initiator=${t.initiator} from=${t.stackHint ?? "?"}`;
        if (this.loggedRefusals.has(e)) for (const t of this.logs)t.trace(r);
        else {
            this.loggedRefusals.add(e);
            for (const t of this.logs)t.warn(`${r} (further refusals of this target are logged at trace level)`);
        }
        for (const e of this.refusalListeners)try {
            e(t);
        } catch  {}
    }
    info(t) {
        for (const e of this.logs)e.info(t);
    }
}
exports.PrivateInferenceHttpGuard = g;
const A = {
    disabled: 0,
    pending: 1,
    enabled: 2
};
function _(t) {
    let e = "disabled";
    for (const r of t)A[r] > A[e] && (e = r);
    return e;
}
function y(t) {
    return null !== t && "object" == typeof t && !(t instanceof URL);
}
function w(t, e) {
    const [r, n] = t;
    let s, i;
    if ("string" == typeof r || r instanceof URL) {
        if (s = S(r), void 0 === s) return;
        y(n) && (i = n);
    } else {
        if (!y(r)) return;
        i = r;
    }
    return void 0 === i ? s : function(t, e, r) {
        void 0 === e && "string" == typeof t.href && (e = S(t.href));
        const n = "string" == typeof t.protocol && t.protocol.length > 0 ? t.protocol : e?.protocol ?? r;
        let s, i;
        if ("string" == typeof t.hostname && t.hostname.length > 0) s = t.hostname;
        else if ("string" == typeof t.host && t.host.length > 0) {
            const e = S(`${n}//${t.host}`);
            if (void 0 === e) return;
            s = e.hostname, i = e.port.length > 0 ? e.port : void 0;
        } else void 0 !== e && (s = e.hostname, i = e.port.length > 0 ? e.port : void 0);
        "string" != typeof t.port && "number" != typeof t.port || (i = String(t.port));
        if (void 0 === s || 0 === s.length) return;
        let o = "/";
        if ("string" == typeof t.path) {
            if (!t.path.startsWith("/")) return;
            o = t.path;
        } else void 0 !== e && (o = `${e.pathname}${e.search}`);
        const a = s.includes(":") ? `[${s}]` : s;
        return S(`${n}//${a}${void 0 !== i ? `:${i}` : ""}${o}`);
    }(i, s, e);
}
function S(t) {
    if (t instanceof URL) return t;
    try {
        return new URL(t);
    } catch  {
        return;
    }
}
function J(t) {
    if (void 0 === t) return;
    const e = t.hostname.toLowerCase().replace(/^\[|\]$/g, "");
    if (0 === e.length) return;
    const r = t.port.length > 0 ? t.port : p[t.protocol];
    return void 0 !== r ? `${e.replace(/\.$/, "")}:${r}` : void 0;
}
const B = /\b(?:PrivateInferenceHttpGuard\.|callerStackHint|guarded(?:Fetch|Request|Get|Connect|SessionRequest))\b/;
function E() {
    const t = (new Error).stack;
    if (void 0 !== t) for (const e of t.split("\n").slice(1)){
        const t = e.trim();
        if (!t.startsWith("at ") || B.test(t) || t.includes("node:internal") || t.includes("node:http") || t.includes("node:https") || t.includes("node:http2")) continue;
        return /\(([^()]+)\)$/.exec(t)?.[1] ?? t.slice(3);
    }
}
