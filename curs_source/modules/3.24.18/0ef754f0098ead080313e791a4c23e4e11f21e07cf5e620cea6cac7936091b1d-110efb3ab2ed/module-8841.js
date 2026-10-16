"use strict";
const { kProxy: t, kClose: s, kDestroy: o, kInterceptors: r } = require("./module-8832.js"), { URL: i } = require("./module-7016.js"), l = require("./module-568.js"), d = require("./module-4003.js"), m = require("./module-9792.js"), { InvalidArgumentError: c, RequestAbortedError: p } = require("./module-7902.js"), A = require("./module-3991.js"), u = Symbol("proxy agent"), g = Symbol("proxy client"), T = Symbol("proxy headers"), h = Symbol("request tls settings"), k = Symbol("proxy tls settings"), _ = Symbol("connect endpoint function");
function E(e, a) {
    return new d(e, a);
}
module.exports = class extends m {
    constructor(e){
        if (super(e), this[t] = function(e) {
            if ("string" == typeof e && (e = {
                uri: e
            }), !e || !e.uri) throw new c("Proxy opts.uri is mandatory");
            return {
                uri: e.uri,
                protocol: e.protocol || "https"
            };
        }(e), this[u] = new l(e), this[r] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], "string" == typeof e && (e = {
            uri: e
        }), !e || !e.uri) throw new c("Proxy opts.uri is mandatory");
        const { clientFactory: a = E } = e;
        if ("function" != typeof a) throw new c("Proxy opts.clientFactory must be a function.");
        this[h] = e.requestTls, this[k] = e.proxyTls, this[T] = e.headers || {};
        const n = new i(e.uri), { origin: s, port: o, host: d, username: m, password: f } = n;
        if (e.auth && e.token) throw new c("opts.auth cannot be used in combination with opts.token");
        e.auth ? this[T]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[T]["proxy-authorization"] = e.token : m && f && (this[T]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(m)}:${decodeURIComponent(f)}`).toString("base64")}`);
        const C = A({
            ...e.proxyTls
        });
        this[_] = A({
            ...e.requestTls
        }), this[g] = a(n, {
            connect: C
        }), this[u] = new l({
            ...e,
            connect: async (e, a)=>{
                let n = e.host;
                e.port || (n += ":" + ("https:" === e.protocol ? 443 : 80));
                try {
                    const { socket: t, statusCode: r } = await this[g].connect({
                        origin: s,
                        port: o,
                        path: n,
                        signal: e.signal,
                        headers: {
                            ...this[T],
                            host: d
                        }
                    });
                    if (200 !== r && (t.on("error", ()=>{}).destroy(), a(new p(`Proxy response (${r}) !== 200 when HTTP Tunneling`))), "https:" !== e.protocol) return void a(null, t);
                    let i;
                    i = this[h] ? this[h].servername : e.servername, this[_]({
                        ...e,
                        servername: i,
                        httpSocket: t
                    }, a);
                } catch (e) {
                    a(e);
                }
            }
        });
    }
    dispatch(e, a) {
        const { host: n } = new i(e.origin), t = function(e) {
            if (Array.isArray(e)) {
                const a = {};
                for(let n = 0; n < e.length; n += 2)a[e[n]] = e[n + 1];
                return a;
            }
            return e;
        }(e.headers);
        return function(e) {
            const a = e && Object.keys(e).find((e)=>"proxy-authorization" === e.toLowerCase());
            if (a) throw new c("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(t), this[u].dispatch({
            ...e,
            headers: {
                ...t,
                host: n
            }
        }, a);
    }
    async [s]() {
        await this[u].close(), await this[g].close();
    }
    async [o]() {
        await this[u].destroy(), await this[g].destroy();
    }
};
