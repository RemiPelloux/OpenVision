"use strict";
require.d(exports, {
    w: ()=>h,
    $: ()=>g
});
var n = require(96851), s = require(73931), i = require("./module-94804.js");
const o = [
    "ECONNRESET",
    "EPIPE",
    "ETIMEDOUT"
];
var a = require("./module-86639.js"), c = require(44708), l = ()=>c && c.__esModule ? c.default : c, u = require("./module-70904.js");
var d = require("./module-29428.js");
const h = 0;
let f, p;
class g {
    config;
    configProvider;
    socketWarningTimestamp = 0;
    externalAgent = !1;
    metadata = {
        handlerProtocol: "http/1.1"
    };
    static create(e) {
        return "function" == typeof e?.handle ? e : new g(e);
    }
    static checkSocketUsage(e, t, r = console) {
        const { sockets: s, requests: i, maxSockets: o } = e;
        if ("number" != typeof o || o === 1 / 0) return t;
        if (Date.now() - 15e3 < t) return t;
        if (s && i) for(const e in s){
            if (!(0, n.hasOwn)(s, e)) continue;
            const t = s[e]?.length ?? 0, a = i[e]?.length ?? 0;
            if (t >= o && a >= 2 * o) return r?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${t} and ${a} additional requests are enqueued.\nSee https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html\nor increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`), Date.now();
        }
        return t;
    }
    constructor(e){
        this.configProvider = new Promise((t, r)=>{
            "function" == typeof e ? e().then((e)=>{
                t(this.resolveDefaultConfig(e));
            }).catch(r) : t(this.resolveDefaultConfig(e));
        });
    }
    destroy() {
        this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
    }
    async handle(e, { abortSignal: t, requestTimeout: r } = {}) {
        this.config || (this.config = await this.configProvider);
        const n = this.config, c = n.logger, h = "https:" === e.protocol;
        return h || this.config.httpAgent || (this.config.httpAgent = await this.config.httpAgentProvider()), new Promise((m, y)=>{
            let w, S = -1, b = -1, E = -1, v = -1, x = -1;
            const T = ()=>{
                u.N.clearTimeout(S), u.N.clearTimeout(b), u.N.clearTimeout(E), u.N.clearTimeout(v), u.N.clearTimeout(x);
            }, A = async (e)=>{
                await w, T(), y(e);
            };
            if (t?.aborted) {
                const e = (0, i.F)(t);
                return void A(e);
            }
            const N = e.headers, C = !!N && "100-continue" === (N.Expect ?? N.expect);
            let _ = h ? n.httpsAgent : n.httpAgent;
            C && !this.externalAgent && (_ = new (h ? l().Agent : f)({
                keepAlive: !1,
                maxSockets: 1 / 0
            })), S = u.N.setTimeout(()=>{
                this.socketWarningTimestamp = g.checkSocketUsage(_, this.socketWarningTimestamp, c);
            }, n.socketAcquisitionWarningTimeout ?? (n.requestTimeout ?? 2e3) + (n.connectionTimeout ?? 1e3));
            const R = e.query ? (0, s.buildQueryString)(e.query) : "";
            let I;
            if (null != e.username || null != e.password) {
                I = `${e.username ?? ""}:${e.password ?? ""}`;
            }
            let D = e.path;
            R && (D += `?${R}`), e.fragment && (D += `#${e.fragment}`);
            let k = e.hostname ?? "";
            k = "[" === k[0] && k.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname;
            const O = {
                headers: e.headers,
                host: k,
                method: e.method,
                path: D,
                port: e.port,
                agent: _,
                auth: I
            }, M = (h ? l().request : p)(O, (e)=>{
                (async (e)=>{
                    await w, T(), m(e);
                })({
                    response: new s.HttpResponse({
                        statusCode: e.statusCode || -1,
                        reason: e.statusMessage,
                        headers: (0, a.u)(e.headers),
                        body: e
                    })
                });
            });
            if (M.on("error", (e)=>{
                o.includes(e.code) ? A(Object.assign(e, {
                    name: "TimeoutError"
                })) : A(e);
            }), t) {
                const e = ()=>{
                    M.destroy();
                    const e = (0, i.F)(t);
                    A(e);
                };
                if ("function" == typeof t.addEventListener) {
                    const r = t;
                    r.addEventListener("abort", e, {
                        once: !0
                    }), M.once("close", ()=>r.removeEventListener("abort", e));
                } else t.onabort = e;
            }
            const P = r ?? n.requestTimeout;
            b = ((e, t, r = 0)=>{
                if (!r) return -1;
                const n = (n)=>{
                    const s = u.N.setTimeout(()=>{
                        e.destroy(), t(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${r} ms.`), {
                            name: "TimeoutError"
                        }));
                    }, r - n), i = (e)=>{
                        e?.connecting ? e.on("connect", ()=>{
                            u.N.clearTimeout(s);
                        }) : u.N.clearTimeout(s);
                    };
                    e.socket ? i(e.socket) : e.on("socket", i);
                };
                return r < 2e3 ? (n(0), 0) : u.N.setTimeout(n.bind(null, 1e3), 1e3);
            })(M, A, n.connectionTimeout), E = ((e, t, r = 0, n, s)=>r ? u.N.setTimeout(()=>{
                    let i = `@smithy/node-http-handler - [${n ? "ERROR" : "WARN"}] a request has exceeded the configured ${r} ms requestTimeout.`;
                    if (n) {
                        const r = Object.assign(new Error(i), {
                            name: "TimeoutError",
                            code: "ETIMEDOUT"
                        });
                        e.destroy(r), t(r);
                    } else i += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.", s?.warn?.(i);
                }, r) : -1)(M, A, P, n.throwOnRequestTimeout, c ?? console), v = ((e, t, r = 0)=>{
                const n = (n)=>{
                    const s = r - n, i = ()=>{
                        e.destroy(), t(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${r} ms of inactivity (configured by client requestHandler).`), {
                            name: "TimeoutError"
                        }));
                    };
                    e.socket ? (e.socket.setTimeout(s, i), e.on("close", ()=>e.socket?.removeListener("timeout", i))) : e.setTimeout(s, i);
                };
                return 0 < r && r < 6e3 ? (n(0), 0) : u.N.setTimeout(n.bind(null, 0 === r ? 0 : 3e3), 3e3);
            })(M, A, n.socketTimeout);
            const $ = O.agent;
            "object" == typeof $ && "keepAlive" in $ && (x = ((e, { keepAlive: t, keepAliveMsecs: r }, n = 3e3)=>{
                if (!0 !== t) return -1;
                const s = ()=>{
                    e.socket ? e.socket.setKeepAlive(t, r || 0) : e.on("socket", (e)=>{
                        e.setKeepAlive(t, r || 0);
                    });
                };
                return 0 === n ? (s(), 0) : u.N.setTimeout(s, n);
            })(M, {
                keepAlive: $.keepAlive,
                keepAliveMsecs: $.keepAliveMsecs
            })), w = (0, d.f)(M, e, P, this.externalAgent).catch((e)=>(T(), y(e)));
        });
    }
    updateHttpClientConfig(e, t) {
        this.config = void 0, this.configProvider = this.configProvider.then((r)=>e === Symbol.for("logger") ? {
                ...r,
                logger: r.logger ?? t
            } : {
                ...r,
                [e]: t
            });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
    resolveDefaultConfig(e) {
        const { requestTimeout: t, connectionTimeout: n, socketTimeout: s, socketAcquisitionWarningTimeout: i, httpAgent: o, httpsAgent: a, throwOnRequestTimeout: c, logger: u } = e || {}, d = !0;
        return {
            connectionTimeout: n,
            requestTimeout: t,
            socketTimeout: s,
            socketAcquisitionWarningTimeout: i,
            throwOnRequestTimeout: c,
            httpAgentProvider: async ()=>{
                const e = await Promise.resolve().then(require.t.bind(require, 37067, 23)), { Agent: t, request: n } = e.default ?? e;
                return p = n, f = t, o instanceof f || "function" == typeof o?.destroy ? (this.externalAgent = !0, o) : new f({
                    keepAlive: d,
                    maxSockets: 50,
                    ...o
                });
            },
            httpsAgent: (()=>a instanceof l().Agent || "function" == typeof a?.destroy ? (this.externalAgent = !0, a) : new (l()).Agent({
                    keepAlive: d,
                    maxSockets: 50,
                    ...a
                }))(),
            logger: u
        };
    }
}
