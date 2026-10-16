"use strict";
const { kProxy: t, kClose: s, kDestroy: o, kInterceptors: r } = require("./module-8832.js"), { URL: i } = require("./module-7016.js"), A = require("./module-568.js"), l = require("./module-4003.js"), c = require("./module-9792.js"), { InvalidArgumentError: m, RequestAbortedError: d } = require("./module-7902.js"), g = require("./module-3991.js"), u = Symbol("proxy agent"), E = Symbol("proxy client"), p = Symbol("proxy headers"), T = Symbol("request tls settings"), k = Symbol("proxy tls settings"), I = Symbol("connect endpoint function");
function h(e, n) {
    return new l(e, n);
}
module.exports = class extends c {
    constructor(e){
        if (super(e), this[t] = function(e) {
            if ("string" == typeof e && (e = {
                uri: e
            }), !e || !e.uri) throw new m("Proxy opts.uri is mandatory");
            return {
                uri: e.uri,
                protocol: e.protocol || "https"
            };
        }(e), this[u] = new A(e), this[r] = e.interceptors && e.interceptors.ProxyAgent && Array.isArray(e.interceptors.ProxyAgent) ? e.interceptors.ProxyAgent : [], "string" == typeof e && (e = {
            uri: e
        }), !e || !e.uri) throw new m("Proxy opts.uri is mandatory");
        const { clientFactory: n = h } = e;
        if ("function" != typeof n) throw new m("Proxy opts.clientFactory must be a function.");
        this[T] = e.requestTls, this[k] = e.proxyTls, this[p] = e.headers || {};
        const a = new i(e.uri), { origin: s, port: o, host: l, username: c, password: _ } = a;
        if (e.auth && e.token) throw new m("opts.auth cannot be used in combination with opts.token");
        e.auth ? this[p]["proxy-authorization"] = `Basic ${e.auth}` : e.token ? this[p]["proxy-authorization"] = e.token : c && _ && (this[p]["proxy-authorization"] = `Basic ${Buffer.from(`${decodeURIComponent(c)}:${decodeURIComponent(_)}`).toString("base64")}`);
        const C = g({
            ...e.proxyTls
        });
        this[I] = g({
            ...e.requestTls
        }), this[E] = n(a, {
            connect: C
        }), this[u] = new A({
            ...e,
            connect: async (e, n)=>{
                let a = e.host;
                e.port || (a += ":" + ("https:" === e.protocol ? 443 : 80));
                try {
                    const { socket: t, statusCode: r } = await this[E].connect({
                        origin: s,
                        port: o,
                        path: a,
                        signal: e.signal,
                        headers: {
                            ...this[p],
                            host: l
                        }
                    });
                    if (200 !== r && (t.on("error", ()=>{}).destroy(), n(new d(`Proxy response (${r}) !== 200 when HTTP Tunneling`))), "https:" !== e.protocol) return void n(null, t);
                    let i;
                    i = this[T] ? this[T].servername : e.servername, this[I]({
                        ...e,
                        servername: i,
                        httpSocket: t
                    }, n);
                } catch (e) {
                    n(e);
                }
            }
        });
    }
    dispatch(e, n) {
        const { host: a } = new i(e.origin), t = function(e) {
            if (Array.isArray(e)) {
                const n = {};
                for(let a = 0; a < e.length; a += 2)n[e[a]] = e[a + 1];
                return n;
            }
            return e;
        }(e.headers);
        return function(e) {
            const n = e && Object.keys(e).find((e)=>"proxy-authorization" === e.toLowerCase());
            if (n) throw new m("Proxy-Authorization should be sent in ProxyAgent constructor");
        }(t), this[u].dispatch({
            ...e,
            headers: {
                ...t,
                host: a
            }
        }, n);
    }
    async [s]() {
        await this[u].close(), await this[E].close();
    }
    async [o]() {
        await this[u].destroy(), await this[E].destroy();
    }
};
