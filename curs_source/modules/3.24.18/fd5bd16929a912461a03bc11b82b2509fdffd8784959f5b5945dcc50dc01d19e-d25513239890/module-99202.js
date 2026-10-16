"use strict";
require.r(exports), require.d(exports, {
    DEFAULT_REQUEST_TIMEOUT: ()=>n.w,
    NodeHttp2Handler: ()=>g,
    NodeHttpHandler: ()=>n.$,
    streamCollector: ()=>m.streamCollector
});
var n = require("./module-41741.js"), s = require(73931), i = require("./module-94804.js"), o = require("./module-86639.js"), a = require(32467), c = ()=>a && a.__esModule ? a.default : a;
const l = new Uint16Array(1);
class u {
    id = l[0]++;
    total = 0;
    max = 0;
    session;
    refs = 0;
    constructor(e){
        e.unref(), this.session = e;
    }
    retain() {
        if (this.session.destroyed) throw new Error("@smithy/node-http-handler - cannot acquire reference to destroyed session.");
        this.refs += 1, this.total += 1, this.max = Math.max(this.refs, this.max), this.session.ref();
    }
    free() {
        if (!this.session.destroyed && (this.refs -= 1, 0 === this.refs && this.session.unref(), this.refs < 0)) throw new Error("@smithy/node-http-handler - ClientHttp2Session refcount at zero, cannot decrement.");
    }
    deref() {
        return this.session;
    }
    close() {
        this.session.closed || this.session.close();
    }
    destroy() {
        this.refs = 0, this.session.destroyed || this.session.destroy();
    }
    useCount() {
        return this.refs;
    }
}
class d {
    sessions = [];
    maxConcurrency = 0;
    constructor(e){
        this.sessions = (e ?? []).map((e)=>new u(e));
    }
    poll() {
        let e = !1;
        for (const t of this.sessions)if (t.deref().destroyed) e = !0;
        else if (!this.maxConcurrency || t.useCount() < this.maxConcurrency) return t;
        if (e) for (const e of this.sessions)e.deref().destroyed && this.remove(e);
    }
    offerLast(e) {
        this.sessions.push(e);
    }
    remove(e) {
        const t = this.sessions.indexOf(e);
        t > -1 && this.sessions.splice(t, 1);
    }
    [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
    }
    setMaxConcurrency(e) {
        this.maxConcurrency = e;
    }
    destroy(e) {
        this.remove(e), e.destroy();
    }
}
class h {
    config;
    connectOptions;
    connectionPools = new Map;
    constructor(e){
        if (this.config = e, this.config.maxConcurrency && this.config.maxConcurrency <= 0) throw new RangeError("maxConcurrency must be greater than zero.");
    }
    lease(e, t) {
        const r = this.getUrlString(e), n = this.getPool(r);
        if (!this.config.disableConcurrency && !t.isEventStream) {
            const e = n.poll();
            if (e) return e.retain(), e;
        }
        const s = new u(this.connect(r)), i = s.deref();
        this.config.maxConcurrency && i.settings({
            maxConcurrentStreams: this.config.maxConcurrency
        }, (t)=>{
            if (t) throw new Error("Fail to set maxConcurrentStreams to " + this.config.maxConcurrency + "when creating new session for " + e.destination.toString());
        });
        const o = ()=>{
            this.removeFromPoolAndCheckedDestroy(r, s);
        };
        return i.on("goaway", ()=>{
            this.removeFromPoolAndClose(r, s);
        }), i.on("error", o), i.on("frameError", o), i.on("close", o), t.requestTimeout && i.setTimeout(t.requestTimeout, o), n.offerLast(s), s.retain(), s;
    }
    release(e, t) {
        t.free();
    }
    createIsolatedSession(e, t) {
        const r = this.getUrlString(e), n = new u(this.connect(r)), s = n.deref();
        s.settings({
            maxConcurrentStreams: 1
        });
        const i = ()=>{
            n.destroy();
        };
        return s.on("error", i), s.on("frameError", i), s.on("close", i), t.requestTimeout && s.setTimeout(t.requestTimeout, i), n.retain(), n;
    }
    destroy() {
        for (const [e, t] of this.connectionPools){
            for (const e of [
                ...t
            ])e.destroy();
            this.connectionPools.delete(e);
        }
    }
    setMaxConcurrentStreams(e) {
        if (e && e <= 0) throw new RangeError("maxConcurrentStreams must be greater than zero.");
        this.config.maxConcurrency = e;
        for (const t of this.connectionPools.values())t.setMaxConcurrency(e);
    }
    setDisableConcurrentStreams(e) {
        this.config.disableConcurrency = e;
    }
    setNodeHttp2ConnectOptions(e) {
        this.connectOptions = e;
    }
    debug() {
        const e = {};
        for (const [t, r] of this.connectionPools){
            const n = [];
            for (const e of r)n.push({
                id: e.id,
                active: e.useCount(),
                maxConcurrent: e.max,
                totalRequests: e.total
            });
            e[t] = {
                sessions: n
            };
        }
        return e;
    }
    removeFromPoolAndClose(e, t) {
        this.connectionPools.get(e)?.remove(t), t.close();
    }
    removeFromPoolAndCheckedDestroy(e, t) {
        this.connectionPools.get(e)?.remove(t), t.destroy();
    }
    getPool(e) {
        if (!this.connectionPools.has(e)) {
            const t = new d;
            this.config.maxConcurrency && t.setMaxConcurrency(this.config.maxConcurrency), this.connectionPools.set(e, t);
        }
        return this.connectionPools.get(e);
    }
    getUrlString(e) {
        return e.destination.toString();
    }
    connect(e) {
        return void 0 === this.connectOptions ? c().connect(e) : c().connect(e, this.connectOptions);
    }
}
var f = require("./module-29428.js");
const { constants: p } = c();
class g {
    config;
    configProvider;
    metadata = {
        handlerProtocol: "h2"
    };
    connectionManager = new h({});
    static create(e) {
        return "function" == typeof e?.handle ? e : new g(e);
    }
    constructor(e){
        this.configProvider = new Promise((t, r)=>{
            "function" == typeof e ? e().then((e)=>{
                t(e || {});
            }).catch(r) : t(e || {});
        });
    }
    destroy() {
        this.connectionManager.destroy();
    }
    async handle(e, { abortSignal: t, requestTimeout: r, isEventStream: n } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
            const { disableConcurrentStreams: e, maxConcurrentStreams: t, nodeHttp2ConnectOptions: r } = this.config;
            this.connectionManager.setDisableConcurrentStreams(e ?? !1), t && this.connectionManager.setMaxConcurrentStreams(t), r && this.connectionManager.setNodeHttp2ConnectOptions(r);
        }
        const { requestTimeout: a, disableConcurrentStreams: c } = this.config, l = c || n, u = r ?? a;
        return new Promise((r, a)=>{
            let c, d = !1;
            const h = async (e)=>{
                await c, a(e);
            };
            if (t?.aborted) {
                d = !0;
                const e = (0, i.F)(t);
                return void h(e);
            }
            const { hostname: g, method: m, port: y, protocol: w, query: S } = e;
            let b = "";
            if (null != e.username || null != e.password) {
                b = `${e.username ?? ""}:${e.password ?? ""}@`;
            }
            const E = {
                destination: new URL(`${w}//${b}${g}${y ? `:${y}` : ""}`)
            }, v = {
                requestTimeout: this.config?.sessionTimeout,
                isEventStream: n
            }, x = l ? this.connectionManager.createIsolatedSession(E, v) : this.connectionManager.lease(E, v), T = x.deref(), A = (e)=>{
                l && x.destroy(), d = !0, h(e);
            }, N = S ? (0, s.buildQueryString)(S) : "";
            let C = e.path;
            N && (C += `?${N}`), e.fragment && (C += `#${e.fragment}`);
            const _ = T.request({
                ...e.headers,
                [p.HTTP2_HEADER_PATH]: C,
                [p.HTTP2_HEADER_METHOD]: m
            });
            if (u && _.setTimeout(u, ()=>{
                _.close();
                const e = new Error(`Stream timed out because of no activity for ${u} ms`);
                e.name = "TimeoutError", A(e);
            }), t) {
                const e = ()=>{
                    _.close();
                    const e = (0, i.F)(t);
                    A(e);
                };
                if ("function" == typeof t.addEventListener) {
                    const r = t;
                    r.addEventListener("abort", e, {
                        once: !0
                    }), _.once("close", ()=>r.removeEventListener("abort", e));
                } else t.onabort = e;
            }
            _.on("frameError", (e, t, r)=>{
                A(new Error(`Frame type id ${e} in stream id ${r} has failed with code ${t}.`));
            }), _.on("error", A), _.on("aborted", ()=>{
                A(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${_.rstCode}.`));
            }), _.on("response", (e)=>{
                const t = new s.HttpResponse({
                    statusCode: e[":status"] ?? -1,
                    headers: (0, o.u)(e),
                    body: _
                });
                d = !0, (async (e)=>{
                    await c, r(e);
                })({
                    response: t
                }), l && T.close();
            }), _.on("close", ()=>{
                l ? x.destroy() : this.connectionManager.release(E, x), d || A(new Error("Unexpected error: http2 request did not get a response"));
            }), c = (0, f.f)(_, e, u);
        });
    }
    updateHttpClientConfig(e, t) {
        this.config = void 0, this.configProvider = this.configProvider.then((r)=>({
                ...r,
                [e]: t
            }));
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}
var m = require(96851);
