"use strict";
var n = this && this.__importDefault || function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.PrivateInferenceHttpGuard = exports.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = exports.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = exports.PrivateInferenceEgressRefusedError = exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = void 0, exports.isPrivateInferenceEgressRefusedError = function(e) {
    return e instanceof Error && "code" in e && e.code === exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
}, exports.isCursorControlPlanePath = p, exports.installPrivateInferenceHttpGuard = function(e = {}) {
    const t = globalThis, r = t[f];
    if (void 0 !== r) return r.contribute(e), r;
    const n = new g(e);
    return t[f] = n, n.install(), n;
}, exports.getPrivateInferenceHttpGuard = function() {
    return globalThis[f];
}, exports.combinePrivateInferenceEnablements = w;
const s = n(require("./module-37067.js")), o = n(require("./module-32467.js")), i = n(require("./module-44708.js")), a = require("./module-98995.js"), c = require("./module-22642.js"), l = require("./module-15218.js");
exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE = "ERR_PRIVATE_INFERENCE_EGRESS_REFUSED";
class u extends Error {
    constructor(e, r){
        super(void 0 === e ? `private inference lockdown: ${r} egress to an unparseable target is refused` : `private inference lockdown: ${r} egress to ${e} is refused`), this.host = e, this.initiator = r, this.name = "PrivateInferenceEgressRefusedError", this.code = exports.PRIVATE_INFERENCE_EGRESS_REFUSED_CODE;
    }
}
exports.PrivateInferenceEgressRefusedError = u, exports.OPTIONAL_PRIVATE_INFERENCE_CURSOR_HOSTS = {
    downloads: "downloads.cursor.com",
    marketplace: "marketplace.cursorapi.com"
};
const d = /^\/([a-z][a-z0-9_]*(?:\.[a-z0-9_]+)*\.[A-Z][A-Za-z0-9_]*)\/([A-Z][A-Za-z0-9_]*)$/;
function p(e, t = "enabled") {
    const r = d.exec(e);
    if (null === r) return !1;
    const [, n, s] = r;
    return void 0 !== n && void 0 !== s && (0, l.isPrivateInferenceRpcAllowedInState)(t, n, s);
}
exports.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV = "CURSOR_PRIVATE_INFERENCE_ALLOW_HOSTS";
const m = new Set([
    "data:",
    "blob:",
    "file:"
]), h = {
    "http:": "80",
    "ws:": "80",
    "https:": "443",
    "wss:": "443"
}, f = Symbol.for("anysphere.cursor-network.privateInferenceHttpGuard");
class g {
    constructor(e = {}){
        this.lockdownSources = [], this.lockdownSubscriptions = [], this.cursorBackendUrlProviders = [], this.allowedHosts = new Set, this.logs = [], this.refusalListeners = [], this.loggedRefusals = new Set, this.allowLoopback = e.allowLoopback ?? !0;
        const r = e.env ?? process.env;
        for (const e of (r[exports.PRIVATE_INFERENCE_ALLOW_HOSTS_ENV] ?? "").split(","))this.allowHost(e);
        this.contribute(e);
    }
    contribute(e) {
        void 0 === e.enablement || this.lockdownSources.includes(e.enablement) || (this.lockdownSources.push(e.enablement), this.lockdownSubscriptions.push(e.enablement.onDidChange(()=>this.logStateIfChanged())), this.logStateIfChanged()), void 0 !== e.cursorBackendUrls && this.cursorBackendUrlProviders.push(e.cursorBackendUrls);
        for (const t of e.optionalHosts ?? [])this.allowHost(t);
        void 0 === e.log || this.logs.includes(e.log) || this.logs.push(e.log), void 0 !== e.onRefused && this.refusalListeners.push(e.onRefused);
    }
    get lockdownState() {
        return w(this.lockdownSources.map((e)=>e.state));
    }
    isActive() {
        return (0, c.isPrivateInferenceLockedDown)(this.lockdownState);
    }
    logStateIfChanged() {
        const e = this.lockdownState;
        e !== this.lastLoggedState && (this.lastLoggedState = e, this.info(`[PrivateInferenceHttpGuard] lockdown ${e}`));
    }
    allowBaseUrl(e) {
        const t = S(A(e));
        void 0 !== t && this.allowedHosts.add(t);
    }
    allowHost(e) {
        const t = e.trim();
        if (0 === t.length) return;
        if (/:\d+$/.test(t) && !t.startsWith("[")) {
            const e = S(A(`https://${t}/`));
            return void (void 0 !== e && this.allowedHosts.add(e));
        }
        for (const e of [
            "http:",
            "https:"
        ]){
            const r = S(A(`${e}//${t}/`));
            void 0 !== r && this.allowedHosts.add(r);
        }
    }
    allowsTarget(e, t = {}) {
        const r = void 0 === e ? void 0 : A(e);
        if (void 0 === r) return !1;
        if (m.has(r.protocol)) return !0;
        const n = S(r);
        return void 0 !== n && (!!(this.allowLoopback && (o = n, s = o.slice(0, o.lastIndexOf(":")), "localhost" === s || s.endsWith(".localhost") || "::1" === s || /^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(s))) || !!this.allowedHosts.has(n) || !!this.isCursorBackendHost(n) && (!1 === t.pathKnown || p(r.pathname, this.lockdownState)));
        var s, o;
    }
    isCursorBackendHost(e) {
        for (const t of this.cursorBackendUrlProviders)for (const r of t())if (void 0 !== r && S(A(r)) === e) return !0;
        return !1;
    }
    check(e, t) {
        if (!this.isActive() || this.allowsTarget(e, {
            pathKnown: "http2.connect" !== t
        })) return;
        const r = void 0 === e ? void 0 : A(e), n = void 0 === r ? void 0 : S(r);
        throw this.reportRefusal({
            host: n,
            initiator: t,
            stackHint: E()
        }), new u(n, t);
    }
    install() {
        if (void 0 !== this.restore) return;
        const e = [], t = globalThis.fetch, r = (e, r)=>{
            try {
                this.check(function(e) {
                    if ("string" == typeof e || e instanceof URL) return e;
                    if (null !== e && "object" == typeof e && "url" in e && "string" == typeof e.url) return e.url;
                    return;
                }(e), "fetch");
            } catch (e) {
                return Promise.reject(e);
            }
            return t.call(globalThis, e, r);
        };
        globalThis.fetch = r, e.push(()=>{
            globalThis.fetch === r && (globalThis.fetch = t);
        }), e.push(this.patchHttpModule(s.default, "http")), e.push(this.patchHttpModule(i.default, "https"));
        const n = o.default.connect, c = (e, t, r)=>{
            const s = "string" == typeof e || e instanceof URL ? e : void 0;
            this.check(s, "http2.connect");
            const i = n.call(o.default, e, t, r);
            return this.guardHttp2Session(i, s), i;
        };
        o.default.connect = c, e.push(()=>{
            o.default.connect === c && (o.default.connect = n);
        }), (0, a.syncBuiltinESMExports)(), this.restore = ()=>{
            for (const t of e)t();
            (0, a.syncBuiltinESMExports)();
        }, this.info(`[PrivateInferenceHttpGuard] installed (lockdown ${this.lockdownState})`);
    }
    dispose() {
        this.restore?.(), this.restore = void 0;
        for (const e of this.lockdownSubscriptions)e.dispose();
        this.lockdownSubscriptions.length = 0;
        const e = globalThis;
        e[f] === this && delete e[f];
    }
    guardHttp2Session(e, t) {
        const r = void 0 === t ? void 0 : A(t);
        if (void 0 === r) return;
        const n = e.request;
        e.request = (t, s)=>{
            const o = function(e) {
                if (Array.isArray(e)) {
                    for(let t = 0; t + 1 < e.length; t += 2)if (":path" === e[t] && "string" == typeof e[t + 1]) return e[t + 1];
                    return;
                }
                if (null !== e && "object" == typeof e) {
                    const t = e[":path"];
                    return "string" == typeof t ? t : void 0;
                }
                return;
            }(t);
            let i;
            if ("string" == typeof o) try {
                i = new URL(o, r);
            } catch  {
                i = void 0;
            }
            return this.check(i, "http2.request"), n.call(e, t, s);
        };
    }
    patchHttpModule(e, t) {
        const r = `${t}:`, n = e.request, s = e.get, o = (...s)=>(this.check(_(s, r), `${t}.request`), n.apply(e, s)), i = (...n)=>(this.check(_(n, r), `${t}.get`), s.apply(e, n));
        return e.request = o, e.get = i, ()=>{
            e.request === o && (e.request = n), e.get === i && (e.get = s);
        };
    }
    reportRefusal(e) {
        const t = `${e.initiator} ${e.host ?? "<unparseable>"}`, r = `[PrivateInferenceHttpGuard] refused host=${e.host ?? "<unparseable>"} initiator=${e.initiator} from=${e.stackHint ?? "?"}`;
        if (this.loggedRefusals.has(t)) for (const e of this.logs)e.trace(r);
        else {
            this.loggedRefusals.add(t);
            for (const e of this.logs)e.warn(`${r} (further refusals of this target are logged at trace level)`);
        }
        for (const t of this.refusalListeners)try {
            t(e);
        } catch  {}
    }
    info(e) {
        for (const t of this.logs)t.info(e);
    }
}
exports.PrivateInferenceHttpGuard = g;
const y = {
    disabled: 0,
    pending: 1,
    enabled: 2
};
function w(e) {
    let t = "disabled";
    for (const r of e)y[r] > y[t] && (t = r);
    return t;
}
function v(e) {
    return null !== e && "object" == typeof e && !(e instanceof URL);
}
function _(e, t) {
    const [r, n] = e;
    let s, o;
    if ("string" == typeof r || r instanceof URL) {
        if (s = A(r), void 0 === s) return;
        v(n) && (o = n);
    } else {
        if (!v(r)) return;
        o = r;
    }
    return void 0 === o ? s : function(e, t, r) {
        void 0 === t && "string" == typeof e.href && (t = A(e.href));
        const n = "string" == typeof e.protocol && e.protocol.length > 0 ? e.protocol : t?.protocol ?? r;
        let s, o;
        if ("string" == typeof e.hostname && e.hostname.length > 0) s = e.hostname;
        else if ("string" == typeof e.host && e.host.length > 0) {
            const t = A(`${n}//${e.host}`);
            if (void 0 === t) return;
            s = t.hostname, o = t.port.length > 0 ? t.port : void 0;
        } else void 0 !== t && (s = t.hostname, o = t.port.length > 0 ? t.port : void 0);
        "string" != typeof e.port && "number" != typeof e.port || (o = String(e.port));
        if (void 0 === s || 0 === s.length) return;
        let i = "/";
        if ("string" == typeof e.path) {
            if (!e.path.startsWith("/")) return;
            i = e.path;
        } else void 0 !== t && (i = `${t.pathname}${t.search}`);
        const a = s.includes(":") ? `[${s}]` : s;
        return A(`${n}//${a}${void 0 !== o ? `:${o}` : ""}${i}`);
    }(o, s, t);
}
function A(e) {
    if (e instanceof URL) return e;
    try {
        return new URL(e);
    } catch  {
        return;
    }
}
function S(e) {
    if (void 0 === e) return;
    const t = e.hostname.toLowerCase().replace(/^\[|\]$/g, "");
    if (0 === t.length) return;
    const r = e.port.length > 0 ? e.port : h[e.protocol];
    return void 0 !== r ? `${t.replace(/\.$/, "")}:${r}` : void 0;
}
const b = /\b(?:PrivateInferenceHttpGuard\.|callerStackHint|guarded(?:Fetch|Request|Get|Connect|SessionRequest))\b/;
function E() {
    const e = (new Error).stack;
    if (void 0 !== e) for (const t of e.split("\n").slice(1)){
        const e = t.trim();
        if (!e.startsWith("at ") || b.test(e) || e.includes("node:internal") || e.includes("node:http") || e.includes("node:https") || e.includes("node:http2")) continue;
        return /\(([^()]+)\)$/.exec(e)?.[1] ?? e.slice(3);
    }
}
