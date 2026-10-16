"use strict";
const { kProxy: r, kClose: s, kDestroy: o, kDispatch: n, kInterceptors: i } = require("./module-76992.js"), { URL: a } = require(73136), Q = require("./module-16618.js"), g = require("./module-3817.js"), E = require("./module-27110.js"), { InvalidArgumentError: B, RequestAbortedError: c, SecureProxyConnectionError: I } = require("./module-38238.js"), C = require("./module-60039.js"), h = require("./module-90996.js"), l = Symbol("proxy agent"), u = Symbol("proxy client"), d = Symbol("proxy headers"), f = Symbol("request tls settings"), w = Symbol("proxy tls settings"), y = Symbol("connect endpoint function"), D = Symbol("tunnel proxy");
function p(A, e) {
    return new g(A, e);
}
const k = ()=>{};
function R(A, e) {
    return 1 === e.connections ? new h(A, e) : new g(A, e);
}
class F extends E {
    #l;
    constructor(A, { headers: e = {}, connect: t, factory: r }){
        if (super(), !A) throw new B("Proxy URL is mandatory");
        this[d] = e, this.#l = r ? r(A, {
            connect: t
        }) : new h(A, {
            connect: t
        });
    }
    [n](A, e) {
        const t = e.onHeaders;
        e.onHeaders = function(A, r, s) {
            407 !== A ? t && t.call(this, A, r, s) : "function" == typeof e.onError && e.onError(new B("Proxy Authentication Required (407)"));
        };
        const { origin: r, path: s = "/", headers: o = {} } = A;
        if (A.path = r + s, !("host" in o) && !("Host" in o)) {
            const { host: A } = new a(r);
            o.host = A;
        }
        return A.headers = {
            ...this[d],
            ...o
        }, this.#l[n](A, e);
    }
    async [s]() {
        return this.#l.close();
    }
    async [o](A) {
        return this.#l.destroy(A);
    }
}
module.exports = class extends E {
    constructor(A){
        if (super(), !A || "object" == typeof A && !(A instanceof a) && !A.uri) throw new B("Proxy uri is mandatory");
        const { clientFactory: e = p } = A;
        if ("function" != typeof e) throw new B("Proxy opts.clientFactory must be a function.");
        const { proxyTunnel: t = !0 } = A, s = this.#u(A), { href: o, origin: n, port: g, protocol: E, username: h, password: m, hostname: b } = s;
        if (this[r] = {
            uri: o,
            protocol: E
        }, this[i] = A.interceptors?.ProxyAgent && Array.isArray(A.interceptors.ProxyAgent) ? A.interceptors.ProxyAgent : [], this[f] = A.requestTls, this[w] = A.proxyTls, this[d] = A.headers || {}, this[D] = t, A.auth && A.token) throw new B("opts.auth cannot be used in combination with opts.token");
        A.auth ? this[d]["proxy-authorization"] = `Basic ${A.auth}` : A.token ? this[d]["proxy-authorization"] = A.token : h && m && (this[d]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(h)}:${decodeURIComponent(m)}`).toString("base64")}`);
        const N = C({
            ...A.proxyTls
        });
        this[y] = C({
            ...A.requestTls
        });
        const S = A.factory || R;
        this[u] = e(s, {
            connect: N
        }), this[l] = new Q({
            ...A,
            factory: (A, e)=>{
                const { protocol: t } = new a(A);
                return this[D] || "http:" !== t || "http:" !== this[r].protocol ? S(A, e) : new F(this[r].uri, {
                    headers: this[d],
                    connect: N,
                    factory: S
                });
            },
            connect: async (A, e)=>{
                let t = A.host;
                A.port || (t += `:${function(A) {
                    return "https:" === A ? 443 : 80;
                }(A.protocol)}`);
                try {
                    const { socket: r, statusCode: s } = await this[u].connect({
                        origin: n,
                        port: g,
                        path: t,
                        signal: A.signal,
                        headers: {
                            ...this[d],
                            host: A.host
                        },
                        servername: this[w]?.servername || b
                    });
                    if (200 !== s && (r.on("error", k).destroy(), e(new c(`Proxy response (${s}) !== 200 when HTTP Tunneling`))), "https:" !== A.protocol) return void e(null, r);
                    let o;
                    o = this[f] ? this[f].servername : A.servername, this[y]({
                        ...A,
                        servername: o,
                        httpSocket: r
                    }, e);
                } catch (A) {
                    "ERR_TLS_CERT_ALTNAME_INVALID" === A.code ? e(new I(A)) : e(A);
                }
            }
        });
    }
    dispatch(A, e) {
        const t = function(A) {
            if (Array.isArray(A)) {
                const e = {};
                for(let t = 0; t < A.length; t += 2)e[A[t]] = A[t + 1];
                return e;
            }
            return A;
        }(A.headers);
        if (function(A) {
            const e = A && Object.keys(A).find((A)=>"proxy-authorization" === A.toLowerCase());
            if (e) throw new B("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(t), t && !("host" in t) && !("Host" in t)) {
            const { host: e } = new a(A.origin);
            t.host = e;
        }
        return this[l].dispatch({
            ...A,
            headers: t
        }, e);
    }
    #u(A) {
        return "string" == typeof A ? new a(A) : A instanceof a ? A : new a(A.uri);
    }
    async [s]() {
        await this[l].close(), await this[u].close();
    }
    async [o]() {
        await this[l].destroy(), await this[u].destroy();
    }
};
