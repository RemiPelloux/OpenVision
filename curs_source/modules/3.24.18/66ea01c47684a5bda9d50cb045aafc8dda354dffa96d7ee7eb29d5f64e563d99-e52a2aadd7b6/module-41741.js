require.d(exports, {
    w: ()=>f,
    $: ()=>g
});
var r = require(96851), n = require(73931), s = require("./module-94804.js");
const i = [
    "ECONNRESET",
    "EPIPE",
    "ETIMEDOUT"
];
var a = require("./module-86639.js"), c = require(44708), u = ()=>c && c.__esModule ? c.default : c, l = require("./module-70904.js");
var d = require("./module-29428.js");
const f = 0;
let h, m;
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
    static checkSocketUsage(e, t, o = console) {
        const { sockets: n, requests: s, maxSockets: i } = e;
        if ("number" != typeof i || i === 1 / 0) return t;
        if (Date.now() - 15e3 < t) return t;
        if (n && s) for(const e in n){
            if (!(0, r.hasOwn)(n, e)) continue;
            const t = n[e]?.length ?? 0, a = s[e]?.length ?? 0;
            if (t >= i && a >= 2 * i) return o?.warn?.(`@smithy/node-http-handler:WARN - socket usage at capacity=${t} and ${a} additional requests are enqueued.\nSee https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html\nor increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.`), Date.now();
        }
        return t;
    }
    constructor(e){
        this.configProvider = new Promise((t, o)=>{
            "function" == typeof e ? e().then((e)=>{
                t(this.resolveDefaultConfig(e));
            }).catch(o) : t(this.resolveDefaultConfig(e));
        });
    }
    destroy() {
        this.config?.httpAgent?.destroy(), this.config?.httpsAgent?.destroy();
    }
    async handle(e, { abortSignal: t, requestTimeout: o } = {}) {
        this.config || (this.config = await this.configProvider);
        const r = this.config, c = r.logger, f = "https:" === e.protocol;
        return f || this.config.httpAgent || (this.config.httpAgent = await this.config.httpAgentProvider()), new Promise((p, w)=>{
            let T, y = -1, b = -1, A = -1, v = -1, E = -1;
            const k = ()=>{
                l.N.clearTimeout(y), l.N.clearTimeout(b), l.N.clearTimeout(A), l.N.clearTimeout(v), l.N.clearTimeout(E);
            }, C = async (e)=>{
                await T, k(), w(e);
            };
            if (t?.aborted) {
                const e = (0, s.F)(t);
                return void C(e);
            }
            const N = e.headers, R = !!N && "100-continue" === (N.Expect ?? N.expect);
            let S = f ? r.httpsAgent : r.httpAgent;
            R && !this.externalAgent && (S = new (f ? u().Agent : h)({
                keepAlive: !1,
                maxSockets: 1 / 0
            })), y = l.N.setTimeout(()=>{
                this.socketWarningTimestamp = g.checkSocketUsage(S, this.socketWarningTimestamp, c);
            }, r.socketAcquisitionWarningTimeout ?? (r.requestTimeout ?? 2e3) + (r.connectionTimeout ?? 1e3));
            const O = e.query ? (0, n.buildQueryString)(e.query) : "";
            let I;
            if (null != e.username || null != e.password) {
                I = `${e.username ?? ""}:${e.password ?? ""}`;
            }
            let x = e.path;
            O && (x += `?${O}`), e.fragment && (x += `#${e.fragment}`);
            let q = e.hostname ?? "";
            q = "[" === q[0] && q.endsWith("]") ? e.hostname.slice(1, -1) : e.hostname;
            const _ = {
                headers: e.headers,
                host: q,
                method: e.method,
                path: x,
                port: e.port,
                agent: S,
                auth: I
            }, P = (f ? u().request : m)(_, (e)=>{
                (async (e)=>{
                    await T, k(), p(e);
                })({
                    response: new n.HttpResponse({
                        statusCode: e.statusCode || -1,
                        reason: e.statusMessage,
                        headers: (0, a.u)(e.headers),
                        body: e
                    })
                });
            });
            if (P.on("error", (e)=>{
                i.includes(e.code) ? C(Object.assign(e, {
                    name: "TimeoutError"
                })) : C(e);
            }), t) {
                const e = ()=>{
                    P.destroy();
                    const e = (0, s.F)(t);
                    C(e);
                };
                if ("function" == typeof t.addEventListener) {
                    const o = t;
                    o.addEventListener("abort", e, {
                        once: !0
                    }), P.once("close", ()=>o.removeEventListener("abort", e));
                } else t.onabort = e;
            }
            const L = o ?? r.requestTimeout;
            b = ((e, t, o = 0)=>{
                if (!o) return -1;
                const r = (r)=>{
                    const n = l.N.setTimeout(()=>{
                        e.destroy(), t(Object.assign(new Error(`@smithy/node-http-handler - the request socket did not establish a connection with the server within the configured timeout of ${o} ms.`), {
                            name: "TimeoutError"
                        }));
                    }, o - r), s = (e)=>{
                        e?.connecting ? e.on("connect", ()=>{
                            l.N.clearTimeout(n);
                        }) : l.N.clearTimeout(n);
                    };
                    e.socket ? s(e.socket) : e.on("socket", s);
                };
                return o < 2e3 ? (r(0), 0) : l.N.setTimeout(r.bind(null, 1e3), 1e3);
            })(P, C, r.connectionTimeout), A = ((e, t, o = 0, r, n)=>o ? l.N.setTimeout(()=>{
                    let s = `@smithy/node-http-handler - [${r ? "ERROR" : "WARN"}] a request has exceeded the configured ${o} ms requestTimeout.`;
                    if (r) {
                        const o = Object.assign(new Error(s), {
                            name: "TimeoutError",
                            code: "ETIMEDOUT"
                        });
                        e.destroy(o), t(o);
                    } else s += " Init client requestHandler with throwOnRequestTimeout=true to turn this into an error.", n?.warn?.(s);
                }, o) : -1)(P, C, L, r.throwOnRequestTimeout, c ?? console), v = ((e, t, o = 0)=>{
                const r = (r)=>{
                    const n = o - r, s = ()=>{
                        e.destroy(), t(Object.assign(new Error(`@smithy/node-http-handler - the request socket timed out after ${o} ms of inactivity (configured by client requestHandler).`), {
                            name: "TimeoutError"
                        }));
                    };
                    e.socket ? (e.socket.setTimeout(n, s), e.on("close", ()=>e.socket?.removeListener("timeout", s))) : e.setTimeout(n, s);
                };
                return 0 < o && o < 6e3 ? (r(0), 0) : l.N.setTimeout(r.bind(null, 0 === o ? 0 : 3e3), 3e3);
            })(P, C, r.socketTimeout);
            const U = _.agent;
            "object" == typeof U && "keepAlive" in U && (E = ((e, { keepAlive: t, keepAliveMsecs: o }, r = 3e3)=>{
                if (!0 !== t) return -1;
                const n = ()=>{
                    e.socket ? e.socket.setKeepAlive(t, o || 0) : e.on("socket", (e)=>{
                        e.setKeepAlive(t, o || 0);
                    });
                };
                return 0 === r ? (n(), 0) : l.N.setTimeout(n, r);
            })(P, {
                keepAlive: U.keepAlive,
                keepAliveMsecs: U.keepAliveMsecs
            })), T = (0, d.f)(P, e, L, this.externalAgent).catch((e)=>(k(), w(e)));
        });
    }
    updateHttpClientConfig(e, t) {
        this.config = void 0, this.configProvider = this.configProvider.then((o)=>e === Symbol.for("logger") ? {
                ...o,
                logger: o.logger ?? t
            } : {
                ...o,
                [e]: t
            });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
    resolveDefaultConfig(e) {
        const { requestTimeout: t, connectionTimeout: r, socketTimeout: n, socketAcquisitionWarningTimeout: s, httpAgent: i, httpsAgent: a, throwOnRequestTimeout: c, logger: l } = e || {}, d = !0;
        return {
            connectionTimeout: r,
            requestTimeout: t,
            socketTimeout: n,
            socketAcquisitionWarningTimeout: s,
            throwOnRequestTimeout: c,
            httpAgentProvider: async ()=>{
                const e = await Promise.resolve().then(require.t.bind(require, 37067, 23)), { Agent: t, request: r } = e.default ?? e;
                return m = r, h = t, i instanceof h || "function" == typeof i?.destroy ? (this.externalAgent = !0, i) : new h({
                    keepAlive: d,
                    maxSockets: 50,
                    ...i
                });
            },
            httpsAgent: (()=>a instanceof u().Agent || "function" == typeof a?.destroy ? (this.externalAgent = !0, a) : new (u()).Agent({
                    keepAlive: d,
                    maxSockets: 50,
                    ...a
                }))(),
            logger: l
        };
    }
}
